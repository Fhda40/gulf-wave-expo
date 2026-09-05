import Link from "next/link";
import { ArrowLeft, MapPin, MoveLeft } from "lucide-react";

const services = [
  { n: "01", title: "تصميم أجنحة المعارض", text: "نحوّل هوية علامتك إلى مساحة مدروسة تجذب الزوار وتدعم هدف مشاركتك." },
  { n: "02", title: "التصنيع والتنفيذ", text: "إدارة دقيقة للتصنيع والتركيب والتشطيبات حتى يصبح التصميم واقعًا جاهزًا." },
  { n: "03", title: "تنظيم الفعاليات", text: "تخطيط وتشغيل متكامل للتجارب والفعاليات المؤسسية داخل الرياض." },
  { n: "04", title: "التجهيزات المؤقتة", text: "واجهات، منصات تصوير، مناطق استقبال وتجارب موسمية مصممة حسب الموقع." },
];
const gallery = [1, 3, 6, 9, 11, 14];

export default function Home() {
  return <main>
    <section className="hero" id="home">
      <img className="hero-image" src="/hero-pavilion.webp" alt="جناح معرض عصري بتصميم معماري وإضاءة محيطية" fetchPriority="high" />
      <div className="hero-shade" /><div className="hero-grid" aria-hidden="true" />
      <div className="container hero-content"><div className="hero-copy reveal">
        <p className="eyebrow"><MapPin size={17} /> الرياض — تصميم — تنفيذ — تشغيل</p>
        <h1>حضورك يبدأ<br />من <span>المساحة</span></h1>
        <p className="lead">نصمم وننفذ أجنحة معارض وتجارب فعاليات تحوّل علامتك إلى مشهد لا يُنسى.</p>
        <div className="hero-actions"><a className="button primary" href="https://wa.me/966563790900?text=مرحباً%20موجة%20الخليج،%20أرغب%20في%20طلب%20عرض%20سعر" target="_blank" rel="noreferrer">ابدأ مشروعك <MoveLeft size={18} /></a><Link className="button ghost" href="#projects">استكشف الأعمال <ArrowLeft size={18} /></Link></div>
      </div><div className="hero-index" aria-hidden="true"><b>01</b><i /><span>02</span><span>03</span><span>04</span><span>05</span></div></div>
    </section>
    <section className="feature-project" id="projects"><div className="container feature-grid">
      <div className="project-meta"><p className="eyebrow cyan">مشروع مختار</p><h2>عزّنا بطبعنا</h2><dl><div><dt>المناسبة</dt><dd>اليوم الوطني السعودي</dd></div><div><dt>النطاق</dt><dd>تصميم — تصنيع — تركيب</dd></div><div><dt>الموقع</dt><dd>الرياض</dd></div></dl><Link className="text-link" href="/projects">عرض جميع المشاريع <ArrowLeft size={17} /></Link></div>
      <div className="project-visual"><img src="/projects/project-23.webp" alt="جناح معرض احترافي من تنفيذ موجة الخليج" loading="lazy" /><span>01 / 28</span></div>
    </div></section>
    <section className="services" id="services"><div className="container"><div className="section-head"><p className="eyebrow cyan">ما الذي ننفذه</p><h2>من الفكرة الأولى<br />حتى لحظة الافتتاح</h2><p>فريق واحد يدير التصميم والتصنيع والتركيب والتشغيل، لتصل إلى النتيجة دون تشتيت بين عدة موردين.</p></div><div className="service-list">{services.map((s) => <article key={s.n}><span>{s.n}</span><h3>{s.title}</h3><p>{s.text}</p><ArrowLeft size={20} /></article>)}</div></div></section>
    <section className="portfolio-strip"><div className="container strip-head"><p className="eyebrow cyan">أعمالنا</p><h2>مساحات تلفت الانتباه<br />وتحمل هوية المكان</h2><Link className="text-link" href="/projects">مشاهدة المعرض الكامل <ArrowLeft size={17} /></Link></div><div className="gallery">{gallery.map((n, i) => <figure key={n}><img src={`/projects/project-${String(n).padStart(2,"0")}.webp`} alt={`أحد مشاريع تجهيز المعارض والفعاليات لدى موجة الخليج — صورة ${i + 1}`} loading="lazy" /><figcaption><span>0{i + 1}</span> تجهيزات وفعاليات</figcaption></figure>)}</div></section>
    <section className="process"><div className="container"><div className="section-head"><p className="eyebrow cyan">طريقة العمل</p><h2>مسار واضح.<br />تنفيذ بلا مفاجآت.</h2></div><ol><li><b>01</b><h3>نفهم الهدف</h3><p>نحدد طبيعة المشاركة، الجمهور، المساحة والموعد.</p></li><li><b>02</b><h3>نصمم التجربة</h3><p>نقدّم تصورًا يعكس الهوية ويخدم حركة الزوار.</p></li><li><b>03</b><h3>نصنع ونركّب</h3><p>نتولى التفاصيل الميدانية حتى التسليم الجاهز.</p></li><li><b>04</b><h3>نساند التشغيل</h3><p>نبقى قريبين لضمان انطلاقة التجربة كما خُطط لها.</p></li></ol></div></section>
    <section className="faq"><div className="container"><div className="section-head"><p className="eyebrow cyan">أسئلة شائعة</p><h2>قبل أن نبدأ</h2></div><div className="faq-list"><details><summary>هل تقدمون التصميم والتنفيذ معًا؟</summary><p>نعم، نتولى دورة المشروع من دراسة المساحة والتصميم وحتى التصنيع والتركيب والتسليم.</p></details><details><summary>هل تعملون داخل الرياض فقط؟</summary><p>مقر نشاطنا في الرياض، ويمكن دراسة المشاريع خارجها بحسب نطاق العمل وموعد التنفيذ.</p></details><details><summary>متى أطلب عرض السعر؟</summary><p>كلما كان التواصل مبكرًا كان التخطيط أفضل. أرسل المساحة والموعد ونوع الفعالية وسنتواصل معك لتحديد الاحتياج.</p></details></div></div></section>
    <section className="cta" id="contact"><div className="container"><p className="eyebrow">مساحتك القادمة تبدأ هنا</p><h2>لنحوّل فكرتك<br />إلى تجربة تُرى</h2><a className="button primary" href="https://wa.me/966563790900?text=مرحباً%20موجة%20الخليج،%20أرغب%20في%20بدء%20مشروع" target="_blank" rel="noreferrer">اطلب عرض سعر <MoveLeft size={18} /></a></div></section>
  </main>;
}
