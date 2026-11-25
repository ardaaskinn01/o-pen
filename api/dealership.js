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
    const {
      name,
      company,
      email,
      phone,
      city,
      district,
      experience,
      showroomStatus,
      message,
      _honey,
    } = req.body || {};

    // Honeypot spam koruması
    if (_honey) {
      return res.status(200).json({ success: true, message: 'Başvurunuz başarıyla alındı.' });
    }

    if (!name || typeof name !== 'string' || !name.trim()) {
      return res.status(400).json({ success: false, message: 'Lütfen yetkili adını ve soyadını giriniz.' });
    }

    if (!phone || typeof phone !== 'string' || !phone.trim()) {
      return res.status(400).json({ success: false, message: 'Lütfen iletişim telefon numaranızı giriniz.' });
    }

    if (!city || typeof city !== 'string' || !city.trim()) {
      return res.status(400).json({ success: false, message: 'Lütfen bayilik talep edilen ili belirtiniz.' });
    }

    const {
      RESEND_API_KEY,
      MAIL_TO = 'info@o-pen.com.tr',
      FROM_EMAIL = 'O-PEN Bayilik <info@o-pen.com.tr>',
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
    const safeCompany = company ? escapeHtml(company.trim()) : 'Şahıs / Yeni Girişim';
    const safeEmail = email ? escapeHtml(email.trim()) : 'Belirtilmedi';
    const safePhone = escapeHtml(phone.trim());
    const safeCity = escapeHtml(city.trim());
    const safeDistrict = district ? escapeHtml(district.trim()) : 'Merkez / Tümü';
    const safeExperience = experience ? escapeHtml(experience.trim()) : 'Belirtilmedi';
    const safeShowroom = showroomStatus ? escapeHtml(showroomStatus.trim()) : 'Belirtilmedi';
    const safeMessage = message ? escapeHtml(message.trim()).replace(/\n/g, '<br/>') : 'Ek not iletilmedi.';

    const adminHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 640px; margin: 0 auto; background-color: #FAFAFA; border: 1px solid #E4E4E7; border-radius: 8px; overflow: hidden;">
        <div style="background-color: #0B0B0C; border-bottom: 4px solid #FF6A00; padding: 24px; text-align: center;">
          <h2 style="color: #FFFFFF; margin: 0; font-size: 24px; font-weight: bold;">
            <span style="color: #FF6A00;">O-</span>PEN
          </h2>
          <p style="color: #A1A1AA; font-size: 13px; margin-top: 6px; text-transform: uppercase; letter-spacing: 0.12em;">
            Yeni Bayilik & Satış Noktası Başvurusu
          </p>
        </div>

        <div style="padding: 28px; background-color: #FFFFFF;">
          <div style="background-color: #FFF3EB; border: 1px solid #FFD8BE; border-radius: 6px; padding: 14px 18px; margin-bottom: 22px;">
            <p style="margin: 0; color: #9A3412; font-size: 14px; font-weight: bold;">
              📍 Bayilik Talep Bölgesi: ${safeCity} / ${safeDistrict}
            </p>
          </div>

          <table style="width: 100%; border-collapse: collapse; font-size: 14px; margin-bottom: 24px;">
            <tr style="border-bottom: 1px solid #F4F4F5;">
              <td style="padding: 10px 0; color: #71717A; width: 160px; font-weight: bold;">Yetkili Adı Soyadı:</td>
              <td style="padding: 10px 0; color: #0B0B0C; font-weight: bold;">${safeName}</td>
            </tr>
            <tr style="border-bottom: 1px solid #F4F4F5;">
              <td style="padding: 10px 0; color: #71717A; font-weight: bold;">Firma / Şirket Ünvanı:</td>
              <td style="padding: 10px 0; color: #0B0B0C;">${safeCompany}</td>
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
              <td style="padding: 10px 0; color: #71717A; font-weight: bold;">Sektörel Tecrübe:</td>
              <td style="padding: 10px 0; color: #0B0B0C;">${safeExperience}</td>
            </tr>
            <tr style="border-bottom: 1px solid #F4F4F5;">
              <td style="padding: 10px 0; color: #71717A; font-weight: bold;">Showroom / Mağaza Durumu:</td>
              <td style="padding: 10px 0; color: #0B0B0C;">${safeShowroom}</td>
            </tr>
          </table>

          <div style="background-color: #F4F4F5; border-left: 4px solid #FF6A00; padding: 16px; border-radius: 4px;">
            <h4 style="margin: 0 0 8px 0; color: #18181B; font-size: 14px;">Başvuru Sahibi Açıklamaları / Notlar:</h4>
            <div style="font-size: 14px; color: #3F3F46; line-height: 1.6;">
              ${safeMessage}
            </div>
          </div>

          <div style="margin-top: 24px; text-align: center;">
            <a href="tel:${safePhone.replace(/[^0-9+]/g, '')}" style="display: inline-block; background-color: #FF6A00; color: #FFFFFF; font-weight: bold; font-size: 14px; padding: 12px 28px; text-decoration: none; border-radius: 6px;">
              Yetkiliyi Telefonla Ara
            </a>
          </div>
        </div>

        <div style="padding: 16px; background-color: #F4F4F5; text-align: center; font-size: 12px; color: #71717A;">
          Bu başvuru <strong>o-pen.com.tr</strong> web sitesi bayilik formundan Resend altyapısıyla iletilmiştir.
        </div>
      </div>
    `;

    const sendResult = await resend.emails.send({
      from: FROM_EMAIL,
      to: [MAIL_TO],
      replyTo: safeEmail !== 'Belirtilmedi' ? safeEmail : undefined,
      subject: `[O-PEN Bayilik Başvurusu] ${safeCity} - ${safeCompany}`,
      html: adminHtml,
    });

    if (sendResult.error) {
      console.error('Resend API Hatası:', sendResult.error);
      return res.status(500).json({
        success: false,
        message: 'Başvuru e-postası gönderilirken bir servis hatası oluştu. Lütfen doğrudan telefonla iletişime geçiniz.',
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Bayilik başvurunuz başarıyla alındı! Bayi İlişkileri departmanımız başvurunuzu değerlendirip en kısa sürede sizinle iletişime geçecektir.',
      id: sendResult.data?.id,
    });
  } catch (error) {
    console.error('Bayilik Formu Sunucu Hatası:', error);
    return res.status(500).json({
      success: false,
      message: 'Beklenmeyen bir sunucu hatası oluştu. Lütfen daha sonra tekrar deneyiniz.',
    });
  }
}
