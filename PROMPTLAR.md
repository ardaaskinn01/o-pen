# O-PEN – Site Kurulumu için 12 Prompt

Sırayla, her biri ayrı bir oturumda/mesajda çalıştırılmak üzere hazırlandı. Her prompt bir öncekinin çıktısına dayanır.

**Ortak bağlam (her prompt'un başına yapıştırın):**
> Proje: `c:\Users\ardaa\o-pen` (Vite + React 19, JS). Marka: **O-PEN** (PVC/alüminyum pencere-kapı sistemleri, "o-pen window" yaklaşımı: açık, ışık alan, ferah yaşam). Müşteri eskiden inşaat işindeydi, şimdi tekrar pen sektöründe. Tema: **turuncu + siyah** (+ beyaz/açık gri zemin). Kurumsal ton (FıratPen, Winsa gibi), bol görselli. Referans eski proje: `nurettin-tutak/` (Next.js; yalnızca içerik/yapı referansı, kod taşınmayacak, projeye dokunma). Dil: Türkçe. Mobil öncelikli, erişilebilir, hızlı.

---

## Prompt 1 – Proje temeli, mimari ve tasarım sistemi
```
Projeyi inceleyip (package.json, vite.config.js, src/, public/) kurumsal bir site için temel mimariyi kur:
- react-router-dom, react-helmet-async (SEO), lucide-react (ikonlar) ekle. İstersen framer-motion da ekle (hafif animasyonlar).
- Klasör yapısı: src/components (layout, ui, sections), src/pages, src/data, src/hooks, src/styles.
- Tasarım sistemi (CSS değişkenleri, src/styles/tokens.css): turuncu (#FF6A00 civarı, hover/koyu tonlarıyla), siyah (#0B0B0C), antrasit, beyaz, açık gri. Tipografi: başlıklar için güçlü bir sans (ör. Poppins/Montserrat), gövde için Inter; Google Fonts, display=swap.
- Hazır UI parçaları: Button (primary/outline/ghost), Container, SectionTitle (turuncu çizgi vurgulu), Card, PageHero (breadcrumb'lı iç sayfa başlığı), Reveal (scroll animasyonu; prefers-reduced-motion'a saygılı).
- Router iskeleti: /, /kurumsal (hakkımızda), /urunler, /urunler/:slug, /referanslar, /galeri, /blog (opsiyonel), /iletisim, /gizlilik, /cerez, /kullanim-kosullari, 404.
- ScrollToTop, global reset, favicon alanı. Henüz içerik yazma; sadece çalışan, boş sayfalı iskelet. `npm run build` ve `npm run lint` hatasız olmalı.
```

## Prompt 2 – Logo ve marka varlıkları
```
public/assets içindeki logo.png ve logo.jpg dosyalarını incele (boyut, arka plan, şeffaflık, kenar kalitesi). Hangisinin navbar/footer/favicon için uygun olduğuna karar ver ve gerekçeni yaz (şeffaf arka plan gerekiyorsa PNG tercih edilir). Sonra:
- Seçilen logoyu src/assets veya public/brand altına düzenli adla koy; gerekirse optimize et (webp/boyut) ve koyu zemin için beyaz/açık versiyon gerekip gerekmediğini değerlendir (gerekirse CSS filter veya ayrı dosya).
- Favicon seti (16/32/180/512), apple-touch-icon, site.webmanifest, theme-color (#FF6A00) üret ve index.html'e ekle.
- Logo bileşeni (<Logo variant="light|dark" />) oluştur, alt metni "O-PEN Pen Sistemleri" olsun.
- Ayrıca asset.jpg ve asset2.jpg dosyalarına bak; ne olduklarını söyle ve uygunsa hero/bölüm görseli olarak kullanılabilir listeye ekle.
```

## Prompt 3 – Görsel stratejisi ve pen temalı görsellerin temini
```
Eski projedeki (nurettin-tutak/public) bol görselli yapıyı analiz et: hangi bölümlerde ne tür görsel kullanılmış (hero slider, kart görselleri, galeri, parallax bantlar vb.) çıkar. Aynı yoğunluğu pen temasıyla yeniden kurmak için bir görsel envanteri planla (hero 3-4 adet, ürün kategorileri, üretim/atölye, montaj, ev/ofis iç-dış mekân, galeri ~12-16, referans).
Görselleri internetten bul: yalnızca ticari kullanıma uygun, atıf gerektirmeyen kaynaklar (Unsplash, Pexels, Pixabay) – lisansı her görsel için kaydet. Telifli/kurumsal rakip (FıratPen, Winsa vb.) görsellerini KULLANMA. İndirme yapamıyorsan Unsplash/Pexels doğrudan görsel URL'leri ve arama anahtar kelimelerini listele; ayrıca eksik kalanlar için yapay zekâ ile üretim promptları (turuncu-siyah vurgulu, fotogerçekçi PVC pencere, balkon kapısı, cam balkon, panjur, katlanır cam sistem) yaz.
Çıktı: public/images/{hero,urunler,uretim,galeri,genel} klasörleri, webp'e çevrilmiş/optimize edilmiş dosyalar, kodda kullanılacak src/data/images.js ve public/images/CREDITS.md. Her görsele Türkçe SEO uyumlu alt metin ekle.
```

## Prompt 4 – Navbar (kurumsal) ve üst bilgi çubuğu
```
FıratPen ve Winsa sitelerindeki kurumsal navbar mantığını (yalnızca yapı/UX ilhamı, kopya yok) ve nurettin-tutak'taki Navbar.js + TopContactBar.js'i referans alarak:
- Üst ince bilgi çubuğu (siyah): telefon, e-posta, adres/şehir, sosyal medya ikonları, (ops.) "Teklif Al" kısa yolu. Telefon/e-posta değerlerini nurettin-tutak'tan alma, src/data/site.js içinde yer tutucu olarak tut (Prompt 11'de netleşecek).
- Ana navbar (sticky; scroll'da küçülen, gölgeli): O-PEN logosu solda; menü: Ana Sayfa, Kurumsal (açılır: Hakkımızda, Vizyon & Misyon, Neden O-PEN, Kalite Politikası), Ürünler (mega menü: PVC Pencere, Alüminyum Sistemler, Kapı Sistemleri, Cam Balkon, Panjur & Kepenk, Sineklik; görselli kartlar), Referanslar, Galeri, İletişim; sağda turuncu "Ücretsiz Keşif / Teklif Al" butonu.
- Mobilde tam ekran/yan çekmece menü, erişilebilir (aria-expanded, klavye, focus trap, ESC). Aktif link vurgusu (turuncu).
- Menü yapısı src/data/navigation.js'den beslensin (footer ile paylaşılsın).
```

## Prompt 5 – Footer (kurumsal)
```
FıratPen/Winsa tarzı çok sütunlu kurumsal footer (yapı ilhamı, kopya yok):
- Üstte turuncu CTA şeridi ("Hayalinizdeki pencereyi birlikte tasarlayalım" + Teklif Al butonu).
- Sütunlar: logo + kısa marka açıklaması + sosyal ikonlar; Kurumsal linkleri; Ürünler; Hızlı Bağlantılar; İletişim bilgileri (adres, telefon, e-posta, çalışma saatleri); opsiyonel bülten abonelik alanı (şimdilik sadece UI).
- Alt şerit: © {yıl} O-PEN. Tüm hakları saklıdır. + Gizlilik Politikası, Çerez Politikası, Kullanım Koşulları linkleri; siyah zemin, turuncu vurgular.
- Navigation verisini Prompt 4'teki navigation.js'den kullan. Sayfanın sağ altına "yukarı çık" ve (ops.) WhatsApp yüzen butonu ekle. Mobilde akordeon düzeni.
```

## Prompt 6 – Ana sayfa (görselli, "o-pen window" hikâyesi)
```
Ana sayfayı kur; nurettin-tutak ana sayfasının bol görselli akışını koru, içeriği pen sektörüne uyarla:
1. Tam ekran hero slider/arka plan videosuz görsel: "O-PEN ile Dünyaya Pencere Aç" benzeri güçlü başlık (özgün slogan üret), 2 CTA (Ürünleri Keşfet / Teklif Al), turuncu-siyah gradient overlay.
2. "o-pen window" yaklaşımı bölümü: markanın adının hikâyesi (açık pencere = ışık, hava, güven, şeffaflık), 3-4 değer kartı, büyük görsel ve animasyonlu pencere-açılma efekti (CSS/SVG, hafif).
3. Ürün kategorileri grid'i (görselli kartlar, hover'da turuncu overlay).
4. Rakamlarla O-PEN (sayaç animasyonu; sayıları yer tutucu işaretle).
5. Neden O-PEN (ısı/ses yalıtımı, güvenlik, enerji tasarrufu, garanti, profesyonel montaj) – ikonlu.
6. Çalışma sürecimiz (Keşif → Ölçü → Üretim → Montaj → Servis) adım çizgisi.
7. Galeri/proje önizleme şeridi, referans/marka logoları (tedarikçi markalar için yer tutucu), müşteri yorumları (örnek metin işaretli), son CTA bandı.
Her bölüm Reveal animasyonlu, görseller lazy-load ve doğru width/height ile. Metinler Türkçe, SEO için tek H1.
```

## Prompt 7 – Kurumsal / Hakkımızda sayfaları
```
nurettin-tutak/src/app/hakkinda (genel, misyon, vizyon, yonetim) ve kurumsal sayfalarındaki METİN içeriğini oku ve /kurumsal altında şu sayfaları oluştur: Hakkımızda, Vizyon & Misyon, Neden O-PEN (ve ihtiyaca göre Kalite Politikası).
Kurallar:
- Metinler şimdilik oradan kopyalanıp pen/O-PEN markasına uyarlanarak kullanılsın (inşaat/Nurettin Tutak'a özgü ifadeleri nötrle).
- Eski sitedeki GÖRSELLERİ kopyalama; "Ümit Güleç" adı ve ilgili yönetim/kişi bölümü hiç yer almasın. Yönetim sayfası gerekmiyorsa yapma.
- Düzen: PageHero, metin + görsel blokları (Prompt 3'ün pen görselleri), değerler kartları, zaman çizgisi (yer tutucu), CTA.
- Hangi metinlerin geçici olduğunu src/data/content-todo.md dosyasına yaz.
```

## Prompt 8 – Ürünler ve hizmet sayfaları
```
Veri odaklı ürün yapısı kur (src/data/products.js): PVC Pencere, Alüminyum Pencere/Sürme, Kapı Sistemleri (giriş/balkon), Cam Balkon, Panjur & Kepenk, Sineklik & Aksesuar. Her ürün: slug, başlık, kısa/uzun açıklama, özellikler, teknik tablo (yer tutucu değerler işaretli), SSS, görseller, ilgili ürünler.
- /urunler: filtreli/kategorili görselli liste; /urunler/:slug: galeri, özellikler, teknik tablo, SSS akordeonu, "Teklif Al" formuna ürün bilgisi taşıyan CTA.
- Her sayfa için Helmet ile benzersiz title/description, Product/BreadcrumbList JSON-LD hazırla.
- Referanslar sayfası (/referanslar) ve Galeri (/galeri; lightbox, kategori filtresi, klavye erişilebilir) sayfalarını da bu adımda yap.
```

## Prompt 9 – İletişim sayfası ve Google Haritalar
```
/iletisim sayfasını nurettin-tutak/src/app/iletisim/page.js içeriğine (alanlar, düzen, metinler) dayanarak oluştur:
- Bilgi kartları (adres, telefon, e-posta, çalışma saatleri), sosyal linkler.
- Form: ad soyad, e-posta, telefon, konu/ürün seçimi, mesaj, KVKK onay kutusu, honeypot spam alanı; istemci doğrulama, yükleniyor/başarı/hata durumları, /api/contact'a POST (Prompt 10).
- Harita: https://maps.app.goo.gl/8MR6Zato6CACyiDF9 adresindeki konumu Google Maps ile göster. Kısa linkin yönlendirdiği gerçek konumu (koordinat/adres) tespit et; <iframe> embed için çalışan bir src üret (API anahtarı gerektirmeyen `https://www.google.com/maps?q=...&output=embed` biçimi), lazy-load, title özniteliği, ayrıca "Yol Tarifi Al" butonu olarak kısa linki kullan. Konum adresini src/data/site.js'e yaz; LocalBusiness JSON-LD'ye de bu adres/geo bilgisi eklensin.
```

## Prompt 10 – Form gönderimi (mail altyapısı)
```
Eski nurettin-tutak/src/app/api/contact/route.js (nodemailer + SMTP env) mantığını bu Vite projesine taşı. Vite statik olduğundan sunucusuz fonksiyon kullan: `api/contact.js` (Vercel Serverless formatı; nodemailer). Kullanıcıdan hangi barındırma (Vercel/Netlify/cPanel) kullanılacağını sor ve ona göre uyarla.
Gereksinimler:
- Girdi doğrulama (zorunlu alanlar, e-posta formatı, uzunluk sınırı), honeypot ve basit rate-limit, HTML kaçışlama (mail gövdesine ham girdi basma).
- Eski koddaki hataları düzelt: `from` alanı SMTP_USER olsun, `replyTo` ziyaretçinin e-postası olsun; telefon/e-posta mail gövdesine eklensin; port sayıya çevrilsin; `secure` portu 465'e göre ayarlansın; verify() çağrısını kaldır.
- Gönderene otomatik teşekkür maili (opsiyonel), yöneticiye düzgün HTML + düz metin şablon.
- Ortam değişkenleri: SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, MAIL_TO. `.env.example` oluştur; gerçek `.env` .gitignore'da olsun. ESKİ projenin .env.local değerlerini koda veya git'e asla koyma.
- Geliştirmede çalışması için Vite proxy veya `vercel dev` talimatı yaz.
Sonunda bana net bir liste ver: hangi mail bilgilerini sağlamam gerekiyor (SMTP sunucusu, port, gönderen hesap, parola/uygulama şifresi, bildirimlerin gideceği adres).
```

## Prompt 11 – SEO, sitemap, robots ve yapılandırılmış veri
```
Teknik SEO'yu tamamla:
- src/data/site.js'te tek kaynak: site adı, alan adı (yer tutucu: https://www.o-pen.com.tr – bana sor), telefon, e-posta, adres, sosyal linkler.
- Her sayfada react-helmet-async ile title (≤60), description (≤160), canonical, Open Graph, Twitter Card; OG görseli (1200x630) üret.
- Statik üretim: vite-plugin ile veya build sonrası script (scripts/generate-sitemap.js) ile route listesinden (statik sayfalar + ürün slug'ları) `public/sitemap.xml` (lastmod'lu) ve `public/robots.txt` (sitemap satırı dahil) üret; `npm run build` içine bağla.
- Pre-render/SSG: SPA'nın SEO'sunu güvenceye al (vite-plugin-ssg, react-snap veya prerender seçeneklerini karşılaştır, projeye en uygununu kur) ve her route için HTML çıktısı al.
- JSON-LD: Organization, LocalBusiness (HomeAndConstructionBusiness), WebSite, BreadcrumbList, Product, FAQPage.
- Barındırma yapılandırması: SPA yönlendirmesi (vercel.json/_redirects), 404, cache başlıkları, www/https yönlendirme notu. Bir de 301 yönlendirme listesi şablonu.
- Search Console/Bing doğrulama meta yer tutucuları ve README'ye "yayın sonrası SEO kontrol listesi" ekle.
```

## Prompt 12 – Performans, erişilebilirlik, yasal sayfalar ve son kalite kontrolü
```
Son aşama:
- Yasal sayfalar: /gizlilik, /cerez, /kullanim-kosullari (nurettin-tutak içeriğini temel al, marka adını O-PEN yap, KVKK aydınlatma metni ekle), çerez bilgilendirme bandı (analitik yoksa basit).
- Performans: görsellerde webp + srcset + lazy, hero görseli preload, font preload, kod bölme (React.lazy ile sayfa bazlı), kullanılmayan CSS/JS temizliği. Hedef Lighthouse (mobil): Performance ≥90, Accessibility ≥95, Best Practices ≥95, SEO 100.
- Erişilebilirlik: kontrast (turuncu üstü beyaz metin kontrastını kontrol et, gerekirse koyu turuncu/siyah metin kullan), odak halkaları, alt metinler, başlık hiyerarşisi, form etiketleri, skip-to-content linki.
- Tüm sayfaları 360/768/1280/1920 px genişliklerde gez, taşma/kırık görsel/ölü link kontrolü yap; eski projeden kalan "Nurettin Tutak", "Ümit Güleç", "inşaat" ifadelerini projede ara ve temizle.
- `npm run lint` ve `npm run build` temiz; `npm run preview` ile test et.
- Bana yayın öncesi yapılacaklar listesi ver: gerçek telefon/adres/e-posta, yer tutucu içerikler, alan adı, SMTP bilgileri, Search Console ve Analytics.
```

---

## Sizden gerekli bilgiler (mail formu için)
1. **Barındırma**: Vercel / Netlify / cPanel (sunucusuz fonksiyonu buna göre kuruyoruz).
2. **SMTP**: sunucu (ör. `mail.alanadi.com`), port (465 SSL), gönderen hesap (ör. `info@...`), parola.
3. **Bildirim adresi** (`MAIL_TO`): formdan gelen mesajların gideceği e-posta.
4. **Alan adı**, telefon, açık adres, çalışma saatleri, sosyal medya linkleri.

> Not: Eski projenin `.env.local` dosyasında SMTP bilgileri duruyor. Okumadım, değerlerini göstermedim. Aynı hesabı kullanacaksanız kendiniz yeni projeye taşıyın.

