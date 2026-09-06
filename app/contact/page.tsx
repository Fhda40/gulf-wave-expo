import type { Metadata } from "next";
import { ProjectInquiry } from "../../components/project-inquiry";
export const metadata: Metadata = {title:"تواصل معنا",description:"شاركنا تفاصيل مشروعك وميزانيتك، وأرسل طلب عرض السعر عبر واتساب",alternates:{canonical:"/contact"}};
export default function Contact(){return <main><section className="inner-hero"><div className="container"><p className="eyebrow cyan">طلب عرض سعر</p><h1>ما مشروعك القادم؟</h1><p>أخبرنا بالفكرة والمساحة والميزانية، وأضف تصورك إن وجد لنفهم ما تحتاجه</p></div></section><section className="content-page"><div className="container"><ProjectInquiry /></div></section></main>}
