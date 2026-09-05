import type { Metadata } from "next";
import { notFound } from "next/navigation";
const data={
  "exhibition-booth-design":{title:"تصميم أجنحة المعارض بالرياض",lead:"نصمم جناحًا يعكس هوية علامتك ويقود حركة الزوار بوضوح.",body:"ندرس مساحة الجناح، أهداف المشاركة، نقاط العرض والاستقبال ثم نبني تصورًا بصريًا قابلًا للتصنيع والتنفيذ."},
  "booth-production":{title:"تصنيع وتنفيذ البوثات",lead:"من المخطط إلى جناح جاهز للافتتاح، عبر فريق تنفيذي واحد.",body:"نتولى التصنيع والتركيب والإضاءة والتشطيبات والتنسيق الميداني ضمن الجدول المعتمد للمشاركة."},
  "event-production":{title:"تجهيز وتنظيم الفعاليات بالرياض",lead:"تجهيز بصري وتشغيلي للفعاليات المؤسسية والتجارب الموسمية.",body:"ننفذ منصات الفعاليات ومناطق الاستقبال والواجهات ومنصات التصوير والعناصر البصرية المصممة حسب الموقع."},
  "temporary-installations":{title:"تجهيزات المعارض والواجهات المؤقتة",lead:"حلول مرنة للمولات والمعارض والمساحات العامة والمناسبات.",body:"نصمم وننتج تجهيزات مؤقتة متماسكة مع الهوية، سهلة التشغيل ومناسبة لطبيعة الجمهور والمكان."}
} as const;
type Slug=keyof typeof data;
export function generateStaticParams(){return Object.keys(data).map(slug=>({slug}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params;const item=data[slug as Slug];if(!item)return {};return {title:item.title,description:item.lead,alternates:{canonical:`/services/${slug}`}}}
export default async function Service({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const item=data[slug as Slug];if(!item)notFound();return <main><section className="inner-hero"><div className="container"><p className="eyebrow cyan">خدمات موجة الخليج</p><h1>{item.title}</h1><p>{item.lead}</p></div></section><section className="content-page"><div className="container"><article><p>{item.body}</p><h2>تنفيذ يبدأ بالفهم</h2><p>نتحقق من متطلبات الموقع والموعد والميزانية، ثم نقترح النطاق الأنسب ونرتب مراحل التصميم والاعتماد والتنفيذ حتى التسليم.</p><a className="button primary" href="https://wa.me/966563790900?text=مرحباً%20موجة%20الخليج،%20أرغب%20في%20معرفة%20تفاصيل%20الخدمة" target="_blank" rel="noreferrer">اطلب عرض سعر</a></article></div></section></main>}
