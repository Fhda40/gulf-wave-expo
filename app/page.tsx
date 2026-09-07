import { HeroVideo } from "../components/hero-video";
import Link from "next/link";
import { ArrowLeft, MapPin, MoveLeft } from "lucide-react";

const services = [
  { n: "01", title: "تصميم أجنحة المعارض", text: "نحوّل هوية علامتك إلى مساحة مدروسة تجذب الزوار وتدعم هدف مشاركتك." },
  { n: "02", title: "التصنيع والتنفيذ", text: "إدارة دقيقة للتصنيع والتركيب والتشطيبات حتى يصبح التصميم واقعًا جاهزًا." },
  { n: "03", title: "تنظيم الفعاليات", text: "تخطيط وتشغيل متكامل للتجارب والفعاليات المؤسسية داخل الرياض." },
  { n: "04", title: "التجهيزات المؤقتة", text: "واجهات، منصات تصوير، مناطق استقبال وتجارب موسمية مصممة حسب الموقع." },
];
const gallery = [1, 3, 6, 9, 11, 14];
const projectRail = [
  "/projects/tahakom-2.jpeg", "/projects/ziena-2.jpeg", "/projects/water-1.jpeg",
  "/projects/ramadan-1.jpeg", "/projects/life-care-1.jpeg", "/projects/founding-day-1.jpeg",
];
const partners: Array<{ name: string; logo: string; invert?: boolean; boost?: boolean }> = [
  { name: "وزارة التجارة", logo: "https://strapi.wasmenia.com/uploads/Ministry_of_Commerce_01_1_9a797a9750.svg", boost: true },
  { name: "الهيئة العامة للنقل", logo: "https://www.tga.gov.sa/img/TGA_Colored_white.svg" },
  { name: "هيئة الزكاة والضريبة والجمارك", logo: "https://zatca.gov.sa/ar/MediaCenter/AuthorityIdentity/PublishingImages/dark-bg.png" },
  { name: "وزارة السياحة", logo: "https://cdn.mt.gov.sa/identity/V2/prd/design/dist/images/MT-logo.svg" },
  { name: "وزارة الرياضة", logo: "https://strapi.wasmenia.com/uploads/Ministry_of_Sports_1c3c7816b4.svg", boost: true },
  { name: "صندوق التنمية الزراعية", logo: "/partners/adf.png", boost: true },
  { name: "مدن", logo: "/partners/modon.svg", boost: true },
  { name: "صكوك المالية", logo: "/partners/sukuk.svg" },
  { name: "سلام موبايل", logo: "/partners/salam-mobile.svg", boost: true },
  { name: "رسيل للهدايا", logo: "/partners/raseel.png", boost: true },
  { name: "رِفت", logo: "/partners/rift.png", invert: true },
  { name: "ريد بُل", logo: "/partners/red-bull.svg" },
  { name: "وزارة الثقافة", logo: "/partners/ministry-culture.svg", boost: true },
  { name: "مواقف الرياض", logo: "/partners/riyadh-parking.svg", invert: true, boost: true },
  { name: "تحكم", logo: "https://strapi.wasmenia.com/uploads/Tahakom_a9bf41a6eb.svg", boost: true },
  { name: "شركة نقل المياه", logo: "https://strapi.wasmenia.com/uploads/Water_Transport_Company_02ebfbaf43.svg", boost: true },
  { name: "Life Care", logo: "https://www.lifecare.com.sa/wp-content/uploads/2026/07/Lifecare-logo.png" },
  { name: "إتقان", logo: "https://etqan.sa/wp-content/uploads/2025/11/512x512-etqan-logo.png", boost: true },
];

export default function Home() {
  return <main>
    <section className="hero" id="home">
      <HeroVideo />
      <div className="hero-shade" />
      <div className="container hero-content"><div className="hero-copy reveal">
        <p className="eyebrow"><MapPin size={17} /> تصميم وتنفيذ المعارض والفعاليات</p>
        <h1>نصمم حضورك<br /><span>وننفذ تفاصيله</span></h1>
        <p className="lead">من تصميم جناحك إلى تجهيزه للافتتاح، نتولى تفاصيل مشاركتك من البداية حتى التسليم</p>
        <div className="hero-actions"><a className="button primary" href="/contact">اطلب عرض سعر <MoveLeft size={18} /></a><Link className="button ghost" href="#projects">شاهد أعمالنا <ArrowLeft size={18} /></Link></div>
      </div></div>
    </section>
    <section className="feature-project" id="projects"><div className="container feature-grid">
      <div className="project-meta"><p className="eyebrow cyan">مشروع مختار</p><h2>من تنفيذنا</h2><dl><div><dt>العمل</dt><dd>تجهيز جناح معرض</dd></div><div><dt>النطاق</dt><dd>تصميم — تصنيع — تركيب</dd></div><div><dt>الموقع</dt><dd>الرياض</dd></div></dl><Link className="text-link" href="/projects">عرض جميع المشاريع <ArrowLeft size={17} /></Link></div>
      <div className="project-visual"><img src="/projects/project-23.webp" alt="جناح معرض احترافي من تنفيذ موجة الخليج" loading="lazy" /></div>
    </div></section>
    <section className="services" id="services"><div className="container"><div className="section-head"><p className="eyebrow cyan">ما الذي ننفذه</p><h2>من الفكرة الأولى<br />حتى لحظة الافتتاح</h2><p>فريق واحد يدير التصميم والتصنيع والتركيب والتشغيل، لتصل إلى النتيجة دون تشتيت بين عدة موردين.</p></div><div className="service-list">{services.map((s) => <article key={s.n}><h3>{s.title}</h3><p>{s.text}</p></article>)}</div></div></section>
    <section className="portfolio-strip"><div className="container strip-head"><p className="eyebrow cyan">أعمالنا</p><h2>أعمال تتحدث عنا</h2><Link className="text-link" href="/projects">مشاهدة المعرض الكامل <ArrowLeft size={17} /></Link></div><div className="gallery">{gallery.map((n, i) => <figure key={n}><img src={`/projects/project-${String(n).padStart(2,"0")}.webp`} alt={`أحد مشاريع تجهيز المعارض والفعاليات لدى موجة الخليج — صورة ${i + 1}`} loading="lazy" /><figcaption>من أعمال موجة الخليج</figcaption></figure>)}</div></section>
    <section className="project-reel" aria-labelledby="project-reel-title"><div className="container reel-heading"><h2 id="project-reel-title">مشاهد من أرض الواقع</h2><p>تصميم، تصنيع وتجهيز في مواقع متعددة</p></div><div className="reel-window"><div className="reel-track">{[...projectRail, ...projectRail].map((src, index) => <figure key={`${src}-${index}`} aria-hidden={index >= projectRail.length}><img src={src} alt={index < projectRail.length ? "مشروع منفذ من أعمال موجة الخليج" : ""} loading="lazy" /></figure>)}</div></div></section>
    <section className="clients" aria-labelledby="clients-title"><div className="container clients-heading"><h2 id="clients-title">شركاء النجاح</h2><p>جهات وعلامات تشرفنا بتنفيذ أعمال وتجارب لها</p></div><div className="logo-marquee" role="region" aria-label="شعارات شركاء النجاح"><div className="logo-marquee-track">{[...partners, ...partners].map((partner, index) => <figure className="partner-logo" key={`${partner.name}-${index}`} title={partner.name} aria-hidden={index >= partners.length}><img className={[partner.invert && "partner-invert", partner.boost && "partner-boost"].filter(Boolean).join(" ") || undefined} src={partner.logo} alt={index < partners.length ? `شعار ${partner.name}` : ""} loading={index < partners.length ? "eager" : "lazy"} /></figure>)}</div></div></section>
    <section className="process"><div className="container"><div className="section-head"><p className="eyebrow cyan">طريقة العمل</p><h2>كيف ننفذ مشروعك</h2></div><ol><li><h3>نفهم الهدف</h3><p>نحدد طبيعة المشاركة، الجمهور، المساحة والموعد.</p></li><li><h3>نصمم التجربة</h3><p>نقدّم تصورًا يعكس الهوية ويخدم حركة الزوار.</p></li><li><h3>نصنع ونركّب</h3><p>نتولى التفاصيل الميدانية حتى التسليم الجاهز.</p></li><li><h3>نساند التشغيل</h3><p>نبقى قريبين لضمان انطلاقة التجربة كما خُطط لها.</p></li></ol></div></section>
    <section className="faq"><div className="container"><div className="section-head"><p className="eyebrow cyan">أسئلة شائعة</p><h2>قبل أن نبدأ</h2></div><div className="faq-list"><details><summary>هل تقدمون التصميم والتنفيذ معًا؟</summary><p>نعم، نتولى دورة المشروع من دراسة المساحة والتصميم وحتى التصنيع والتركيب والتسليم.</p></details><details><summary>هل تعملون داخل الرياض فقط؟</summary><p>مقر نشاطنا في الرياض، ويمكن دراسة المشاريع خارجها بحسب نطاق العمل وموعد التنفيذ.</p></details><details><summary>متى أطلب عرض السعر؟</summary><p>كلما كان التواصل مبكرًا كان التخطيط أفضل. أرسل المساحة والموعد ونوع الفعالية وسنتواصل معك لتحديد الاحتياج.</p></details></div></div></section>
    <section className="cta" id="contact"><div className="container"><p className="eyebrow">أرسل المساحة والموعد ومتطلبات المشروع، ودعنا نرتب التفاصيل</p><h2>لديك معرض أو فعالية؟</h2><a className="button primary" href="/contact">اطلب عرض سعر <MoveLeft size={18} /></a></div></section>
  </main>;
}
