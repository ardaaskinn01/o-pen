import { Resend } from 'resend';

function escapeHtml(str) {
  if (!str || typeof str !== 'string') return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

const rateLimitMap = new Map();
const RATE_LIMIT_WINDOW_MS = 60 * 1000;
const MAX_REQUESTS_PER_WINDOW = 5;

function isRateLimited(clientIp) {
  const now = Date.now();
  const clientData = rateLimitMap.get(clientIp);

  if (!clientData) {
    rateLimitMap.set(clientIp, { count: 1, startTime: now });
    return false;
  }

  if (now - clientData.startTime > RATE_LIMIT_WINDOW_MS) {
    rateLimitMap.set(clientIp, { count: 1, startTime: now });
    return false;
  }

  clientData.count += 1;
  return clientData.count > MAX_REQUESTS_PER_WINDOW;
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({
      success: false,
      message: 'Method Not Allowed. Yalnızca POST istekleri kabul edilir.',
    });
  }

  const clientIp =
    req.headers['x-forwarded-for'] ||
    req.headers['x-real-ip'] ||
    req.socket?.remoteAddress ||
    'unknown-ip';

  if (isRateLimited(clientIp)) {
    return res.status(429).json({
      success: false,
      message: 'Çok fazla form isteği gönderildi. Lütfen 1 dakika sonra tekrar deneyiniz.',
    });
  }

  try {
    const { name, email, phone, service, message, _honey } = req.body || {};

    if (_honey) {
      return res.status(200).json({ success: true, message: 'Mesajınız alındı.' });
    }

    if (!name || typeof name !== 'string' || !name.trim()) {
      return res.status(400).json({ success: false, message: 'Lütfen adınızı ve soyadınızı giriniz.' });
    }

    if (!email || typeof email !== 'string' || !email.trim()) {
      return res.status(400).json({ success: false, message: 'Lütfen geçerli bir e-posta adresi giriniz.' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return res.status(400).json({ success: false, message: 'Girdiğiniz e-posta formatı geçersizdir.' });
    }

    if (!message || typeof message !== 'string' || !message.trim()) {
      return res.status(400).json({ success: false, message: 'Lütfen iletmek istediğiniz mesajınızı yazınız.' });
    }

    if (name.length > 100 || email.length > 120 || (phone && phone.length > 30) || message.length > 3000) {
      return res.status(400).json({
        success: false,
        message: 'Girdiğiniz alanlardan biri maksimum karakter sınırını aşıyor.',
      });
    }

    const {
      RESEND_API_KEY,
      MAIL_TO = 'info@o-pen.com',
      FROM_EMAIL = 'O-PEN İletişim <info@o-pen.com>',
    } = process.env;

    if (!RESEND_API_KEY) {
      console.error('RESEND_API_KEY ortam değişkeni tanımlanmamış.');
      return res.status(500).json({
        success: false,
        message: 'E-posta servis API anahtarı yapılandırılmamış.',
      });
    }

    const resend = new Resend(RESEND_API_KEY);

    const safeName = escapeHtml(name.trim());
    const safeEmail = escapeHtml(email.trim());
    const safePhone = phone ? escapeHtml(phone.trim()) : 'Belirtilmedi';
    const safeService = service ? escapeHtml(service.trim()) : 'Genel Teklif & Danışma';
    const safeMessage = escapeHtml(message.trim()).replace(/\n/g, '<br/>');

    const adminHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 620px; margin: 0 auto; background-color: #FAFAFA; border: 1px solid #E4E4E7; border-radius: 8px; overflow: hidden;">
        <div style="background-color: #0B0B0C; border-bottom: 4px solid #FF6A00; padding: 24px; text-align: center;">
          <h2 style="color: #FFFFFF; margin: 0; font-size: 24px; font-weight: bold;">
            <span style="color: #FF6A00;">O-</span>PEN
          </h2>
          <p style="color: #A1A1AA; font-size: 13px; margin-top: 6px; text-transform: uppercase; letter-spacing: 0.1em;">
            Yeni Keşif & İletişim Talebi
          </p>
        </div>

        <div style="padding: 28px; background-color: #FFFFFF;">
          <p style="font-size: 15px; color: #18181B; margin-bottom: 20px;">
            Web siteniz üzerinden yeni bir müşteri iletişim ve keşif formu dolduruldu:
          </p>

          <table style="width: 100%; border-collapse: collapse; font-size: 14px; margin-bottom: 24px;">
            <tr style="border-bottom: 1px solid #F4F4F5;">
              <td style="padding: 10px 0; color: #71717A; width: 140px; font-weight: bold;">Müşteri Adı:</td>
              <td style="padding: 10px 0; color: #0B0B0C; font-weight: bold;">${safeName}</td>
            </tr>
            <tr style="border-bottom: 1px solid #F4F4F5;">
              <td style="padding: 10px 0; color: #71717A; font-weight: bold;">Telefon:</td>
              <td style="padding: 10px 0; color: #0B0B0C;">
                <a href="tel:${safePhone.replace(/[^0-9+]/g, '')}" style="color: #FF6A00; text-decoration: none; font-weight: bold;">
                  ${safePhone}
                </a>
              </td>
            </tr>
            <tr style="border-bottom: 1px solid #F4F4F5;">
              <td style="padding: 10px 0; color: #71717A; font-weight: bold;">E-Posta:</td>
              <td style="padding: 10px 0; color: #0B0B0C;">
                <a href="mailto:${safeEmail}" style="color: #FF6A00; text-decoration: none;">
                  ${safeEmail}
                </a>
              </td>
            </tr>
            <tr style="border-bottom: 1px solid #F4F4F5;">
              <td style="padding: 10px 0; color: #71717A; font-weight: bold;">İlgilendiği Ürün:</td>
              <td style="padding: 10px 0; color: #0B0B0C;">
                <span style="background-color: #FFF3EB; color: #FF6A00; font-weight: bold; padding: 4px 10px; border-radius: 4px;">
                  ${safeService}
                </span>
              </td>
            </tr>
          </table>

          <div style="background-color: #F4F4F5; border-left: 4px solid #FF6A00; padding: 16px; border-radius: 4px;">
            <h4 style="margin: 0 0 8px 0; color: #18181B; font-size: 14px;">Müşteri Notu / Ölçü Detayları:</h4>
            <div style="font-size: 14px; color: #3F3F46; line-height: 1.6;">
              ${safeMessage}
            </div>
          </div>
        </div>

        <div style="background-color: #F4F4F5; padding: 16px; text-align: center; font-size: 12px; color: #71717A;">
          Bu e-posta <strong>o-pen.com</strong> web sitesi iletişim formundan Resend altyapısıyla iletilmiştir.
          Müşteriyi doğrudan yanıtlamak için bu e-postayı yanıtlayabilirsiniz (Reply-To aktiftir).
        </div>
      </div>
    `;

    const adminText = `
YENİ İLETİŞİM & KEŞİF FORMU (O-PEN)
=====================================
Ad Soyad: ${name.trim()}
Telefon : ${phone ? phone.trim() : 'Belirtilmedi'}
E-Posta : ${email.trim()}
Ürün    : ${service ? service.trim() : 'Genel'}

Mesaj:
${message.trim()}
=====================================
Giriş Zamanı: ${new Date().toLocaleString('tr-TR')}
    `.trim();

    // Yöneticiye Mail Gönder
    const sendResult = await resend.emails.send({
      from: FROM_EMAIL,
      to: [MAIL_TO],
      replyTo: `${name.trim()} <${email.trim()}>`,
      subject: `[O-PEN Teklif Talebi] ${name.trim()} - ${service || 'Pencere'}`,
      text: adminText,
      html: adminHtml,
    });

    if (sendResult.error) {
      console.error('Resend API Hatası:', sendResult.error);
      return res.status(500).json({
        success: false,
        message: 'E-posta servisi yanıt vermedi. Lütfen doğrudan telefon veya WhatsApp ile iletişime geçiniz.',
      });
    }

    // Müşteriye Otomatik Teyit E-Postası (Opsiyonel)
    try {
      await resend.emails.send({
        from: FROM_EMAIL,
        to: [email.trim()],
        subject: `Talebiniz Alındı | O-PEN Pencere & Kapı Sistemleri`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 580px; margin: 0 auto; padding: 24px; border: 1px solid #E4E4E7; border-radius: 8px;">
            <div style="border-bottom: 2px solid #FF6A00; padding-bottom: 12px; margin-bottom: 16px;">
              <h2 style="color: #0B0B0C; margin: 0;"><span style="color: #FF6A00;">O-</span>PEN Pencere Sistemleri</h2>
            </div>
            <p style="font-size: 15px; color: #18181B;">Sayın <strong>${safeName}</strong>,</p>
            <p style="font-size: 14px; color: #52525B; line-height: 1.6;">
              Web sitemiz üzerinden ilettiğiniz <strong>${safeService}</strong> konulu keşif ve fiyat teklifi talebiniz başarıyla tarafımıza ulaşmıştır.
            </p>
            <p style="font-size: 14px; color: #52525B; line-height: 1.6;">
              Teknik ve mimari ekibimiz bilgilerinizi inceleyerek en geç <strong>24 saat</strong> içinde sizinle iletişime geçecektir.
            </p>
            <div style="background-color: #FFF3EB; border-left: 4px solid #FF6A00; padding: 12px; border-radius: 4px; margin: 20px 0;">
              <p style="margin: 0; font-size: 13px; color: #0B0B0C;">
                Acil keşif veya anlık danışma için bize doğrudan <strong>+90 (546) 768 99 92</strong> numaralı WhatsApp hattımızdan da ulaşabilirsiniz.
              </p>
            </div>
            <p style="font-size: 12px; color: #A1A1AA; margin-top: 24px;">
              © ${new Date().getFullYear()} O-PEN Pencere & Kapı Sistemleri.
            </p>
          </div>
        `,
      });
    } catch (confError) {
      console.warn('Müşteri otomatik teyit e-postası atlandı:', confError.message);
    }

    return res.status(200).json({
      success: true,
      message: 'E-postanız başarıyla iletildi!',
    });
  } catch (error) {
    console.error('Sunucu hatası:', error);
    return res.status(500).json({
      success: false,
      message: 'E-posta gönderimi sırasında bir hata oluştu.',
    });
  }
}
