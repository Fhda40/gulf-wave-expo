export const servicePages = [
  {
    slug: "exhibition-booth-design",
    title: "تصميم أجنحة المعارض بالرياض",
    shortTitle: "تصميم أجنحة المعارض",
    lead: "نصمم جناحًا يعكس هوية علامتك ويقود حركة الزوار بوضوح.",
    body: "ندرس مساحة الجناح، أهداف المشاركة، نقاط العرض والاستقبال ثم نبني تصورًا بصريًا قابلًا للتصنيع والتنفيذ.",
  },
  {
    slug: "booth-production",
    title: "تصنيع وتنفيذ البوثات",
    shortTitle: "التصنيع والتنفيذ",
    lead: "من المخطط إلى جناح جاهز للافتتاح، عبر فريق تنفيذي واحد.",
    body: "نتولى التصنيع والتركيب والإضاءة والتشطيبات والتنسيق الميداني ضمن الجدول المعتمد للمشاركة.",
  },
  {
    slug: "event-production",
    title: "تجهيز وتنظيم الفعاليات بالرياض",
    shortTitle: "تنظيم الفعاليات",
    lead: "تجهيز بصري وتشغيلي للفعاليات المؤسسية والتجارب الموسمية.",
    body: "ننفذ منصات الفعاليات ومناطق الاستقبال والواجهات ومنصات التصوير والعناصر البصرية المصممة حسب الموقع.",
  },
  {
    slug: "temporary-installations",
    title: "تجهيزات المعارض والواجهات المؤقتة",
    shortTitle: "التجهيزات المؤقتة",
    lead: "حلول مرنة للمولات والمعارض والمساحات العامة والمناسبات.",
    body: "نصمم وننتج تجهيزات مؤقتة متماسكة مع الهوية، سهلة التشغيل ومناسبة لطبيعة الجمهور والمكان.",
  },
] as const;

export type ServiceSlug = (typeof servicePages)[number]["slug"];

export function getService(slug: string) {
  return servicePages.find((service) => service.slug === slug);
}

export function getServiceHref(slug: ServiceSlug) {
  return `/services/${slug}`;
}
