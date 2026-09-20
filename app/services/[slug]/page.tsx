import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getService, getServiceHref, servicePages } from "../../../lib/services";

export function generateStaticParams() {
  return servicePages.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const item = getService(slug);
  if (!item) return {};
  return { title: item.title, description: item.lead, alternates: { canonical: `/services/${slug}` } };
}

export default async function Service({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = getService(slug);
  if (!item) notFound();
  const relatedServices = servicePages.filter((service) => service.slug !== slug);

  return <main>
    <section className="inner-hero"><div className="container"><p className="eyebrow cyan">خدمات موجة الخليج</p><h1>{item.title}</h1><p>{item.lead}</p></div></section>
    <section className="content-page"><div className="container"><article><p>{item.body}</p><h2>تنفيذ يبدأ بالفهم</h2><p>نتحقق من متطلبات الموقع والموعد والميزانية، ثم نقترح النطاق الأنسب ونرتب مراحل التصميم والاعتماد والتنفيذ حتى التسليم.</p><a className="button primary" href="https://wa.me/966563790900?text=مرحباً%20موجة%20الخليج،%20أرغب%20في%20معرفة%20تفاصيل%20الخدمة" target="_blank" rel="noreferrer">اطلب عرض سعر</a></article>
      <nav className="related-services" aria-label="خدمات أخرى"><h2>خدمات أخرى</h2><div>{relatedServices.map((service) => <Link href={getServiceHref(service.slug)} key={service.slug}>{service.shortTitle}</Link>)}</div></nav>
    </div></section>
  </main>;
}
