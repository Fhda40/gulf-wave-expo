import { MessageCircle, ArrowUpLeft } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://gulfwaveexpo.com"),
  title: { default: "موجة الخليج | تصميم وتنفيذ المعارض والفعاليات بالرياض", template: "%s | موجة الخليج" },
  description: "موجة الخليج لتصميم وتصنيع وتنفيذ أجنحة المعارض وتجهيز الفعاليات والواجهات التفاعلية في الرياض.",
  keywords: ["تصميم أجنحة معارض بالرياض", "تنفيذ بوثات", "تجهيز فعاليات الرياض", "موجة الخليج", "Gulf Wave Expo"],
  alternates: { canonical: "/" },
  openGraph: { title: "موجة الخليج للمعارض والفعاليات", description: "نصمم وننفذ المساحات التي تصنع حضور علامتك.", locale: "ar_SA", type: "website", url: "/" },
  twitter: { card: "summary_large_image", title: "موجة الخليج للمعارض والفعاليات", description: "تصميم وتنفيذ أجنحة المعارض والفعاليات في الرياض." },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
};
const schema = { "@context": "https://schema.org", "@type": "ProfessionalService", name: "موجة الخليج", alternateName: "Gulf Wave", url: "https://gulfwaveexpo.com", telephone: "+966563790900", areaServed: { "@type": "City", name: "Riyadh" }, address: { "@type": "PostalAddress", addressLocality: "الرياض", addressCountry: "SA" }, description: "تصميم وتنفيذ أجنحة المعارض والفعاليات في الرياض", serviceType: ["تصميم أجنحة المعارض", "تنفيذ البوثات", "تنظيم الفعاليات", "التجهيزات المؤقتة"] };
function Logo(){return <Link className="logo" href="/" aria-label="موجة الخليج — الرئيسية"><span className="brand-symbol" aria-hidden="true">g<span>w</span></span><span><b>موجة الخليج</b><small>GULF WAVE</small></span></Link>}
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="ar" dir="rtl"><body><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/><header className="site-header"><div className="container nav"><Logo/><nav aria-label="التنقل الرئيسي"><Link href="/">الرئيسية</Link><Link href="/#services">خدماتنا</Link><Link href="/projects">أعمالنا</Link><Link href="/about">من نحن</Link><Link href="/contact">تواصل معنا</Link></nav><details className="mobile-menu"><summary>القائمة</summary><div><Link href="/">الرئيسية</Link><Link href="/#services">خدماتنا</Link><Link href="/projects">أعمالنا</Link><Link href="/about">من نحن</Link><Link href="/contact">تواصل معنا</Link></div></details></div></header>{children}<a className="whatsapp-float" href="https://wa.me/966563790900" target="_blank" rel="noreferrer" aria-label="تواصل مع موجة الخليج عبر واتساب"><MessageCircle aria-hidden="true" size={24}/><span>لنتحدث عن مشروعك<small>واتساب موجة الخليج</small></span><ArrowUpLeft aria-hidden="true" size={17}/></a><footer><div className="container footer-grid"><Logo/><p>نصمم وننفذ تجارب المعارض والفعاليات التي تستحق أن تُرى.</p><div><a href="tel:+966563790900" dir="ltr">+966 56 379 0900</a><span>الرياض، المملكة العربية السعودية</span></div></div><div className="container copyright"><span>© {new Date().getFullYear()} موجة الخليج. جميع الحقوق محفوظة</span><span>Gulf Wave — Exhibitions & Events</span></div></footer></body></html>}
