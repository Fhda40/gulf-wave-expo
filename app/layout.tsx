import { ArrowUpLeft, MessageCircle } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { BrandLogo } from "../components/brand-logo";
import { MobileNavigation } from "../components/mobile-navigation";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://gulfwavexpo.com"),
  title: { default: "موجة الخليج | تصميم وتنفيذ المعارض والفعاليات بالرياض", template: "%s | موجة الخليج" },
  description: "موجة الخليج لتصميم وتصنيع وتنفيذ أجنحة المعارض وتجهيز الفعاليات والواجهات التفاعلية في الرياض.",
  keywords: ["تصميم أجنحة معارض بالرياض", "تنفيذ بوثات", "تجهيز فعاليات الرياض", "موجة الخليج", "Gulf Wave Expo"],
  alternates: { canonical: "/" },
  openGraph: { title: "موجة الخليج للمعارض والفعاليات", description: "نصمم وننفذ المساحات التي تصنع حضور علامتك.", locale: "ar_SA", type: "website", url: "/" },
  twitter: { card: "summary_large_image", title: "موجة الخليج للمعارض والفعاليات", description: "تصميم وتنفيذ أجنحة المعارض والفعاليات في الرياض." },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
};

const schema = { "@context": "https://schema.org", "@type": "ProfessionalService", name: "موجة الخليج", alternateName: "Gulf Wave", url: "https://gulfwavexpo.com", telephone: "+966563790900", areaServed: { "@type": "City", name: "Riyadh" }, address: { "@type": "PostalAddress", addressLocality: "الرياض", addressCountry: "SA" }, description: "تصميم وتنفيذ أجنحة المعارض والفعاليات في الرياض", serviceType: ["تصميم أجنحة المعارض", "تنفيذ البوثات", "تنظيم الفعاليات", "التجهيزات المؤقتة"] };
const navLinks = [["الرئيسية", "/"], ["خدماتنا", "/#services"], ["أعمالنا", "/projects"], ["من نحن", "/about"], ["تواصل معنا", "/contact"]] as const;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ar" dir="rtl"><body>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <header className="site-header"><div className="container nav">
      <BrandLogo />
      <nav className="desktop-nav" aria-label="التنقل الرئيسي">{navLinks.map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}</nav>
      <Link className="header-contact" href="/contact">ابدأ مشروعك <ArrowUpLeft aria-hidden="true" /></Link>
      <MobileNavigation />
    </div></header>
    {children}
    <a className="whatsapp-float" href="https://wa.me/966563790900" target="_blank" rel="noreferrer" aria-label="تواصل مع موجة الخليج عبر واتساب"><MessageCircle aria-hidden="true" size={24}/><span>لنتحدث عن مشروعك<small>واتساب موجة الخليج</small></span><ArrowUpLeft aria-hidden="true" size={17}/></a>
    <footer className="site-footer">
      <div className="container footer-pitch"><div><span>مشروعك القادم</span><h2>لنصنع مساحة<br />يتذكرها جمهورك.</h2></div><Link className="footer-action" href="/contact">ابدأ الحديث <ArrowUpLeft aria-hidden="true" /></Link></div>
      <div className="container footer-main">
        <div className="footer-brand"><BrandLogo /><p>تصميم، تصنيع وتنفيذ أجنحة المعارض والفعاليات في الرياض.</p></div>
        <nav aria-label="روابط الفوتر"><strong>تصفّح</strong>{navLinks.slice(1).map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}</nav>
        <div className="footer-services"><strong>ننفذ</strong><span>أجنحة المعارض</span><span>الفعاليات المؤسسية</span><span>التجهيزات المؤقتة</span></div>
        <div className="footer-contact"><strong>تواصل</strong><a href="tel:+966563790900" dir="ltr">+966 56 379 0900</a><span>الرياض، السعودية</span></div>
      </div>
      <div className="container copyright"><span>© {new Date().getFullYear()} موجة الخليج</span><span>تطوير <b dir="ltr">Najd Valley</b></span></div>
    </footer>
  </body></html>;
}
