"use client";
import { useState, type FormEvent } from "react";
import { ArrowUpLeft, MessageCircle } from "lucide-react";
import { Button } from "./ui/button";

export function ProjectInquiry() {
  const [message, setMessage] = useState("");
  function prepare(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const values = new FormData(event.currentTarget);
    const get = (key: string) => String(values.get(key) || "").trim();
    const rows = [
      "طلب مشروع جديد — موجة الخليج",
      "الاسم: " + get("name"),
      get("company") && "الجهة: " + get("company"),
      "رقم التواصل: " + get("phone"),
      "نوع المشروع: " + get("service"),
      "المدينة / الموقع: " + get("city"),
      get("area") && "المساحة: " + get("area") + " م²",
      get("date") && "الموعد المطلوب: " + get("date"),
      "الميزانية المحددة: " + get("budget") + " ريال سعودي",
      "حالة التصاميم: " + get("design"),
      get("reference") && "رابط المرجع: " + get("reference"),
      "تفاصيل المشروع:\n" + get("details"),
    ];
    setMessage(rows.filter(Boolean).join("\n"));
  }
  return <form className="inquiry-form" onSubmit={prepare} onChange={() => setMessage("")}>
    <div className="form-heading"><h2>تفاصيل مشروعك</h2><p>الحقول بعلامة * مطلوبة</p></div>
    <div className="inquiry-fields">
      <label htmlFor="inquiry-name">اسمك *<input id="inquiry-name" name="name" autoComplete="name" required maxLength={80} /></label>
      <label htmlFor="inquiry-company">اسم الجهة<input id="inquiry-company" name="company" autoComplete="organization" maxLength={100} /></label>
      <label htmlFor="inquiry-phone">رقم التواصل *<input id="inquiry-phone" name="phone" type="tel" dir="ltr" autoComplete="tel" required pattern="[+0-9٠-٩۰-۹ ()-]{7,22}" maxLength={22} title="أدخل رقم التواصل مع رمز الدولة عند الحاجة" /></label>
      <label htmlFor="inquiry-service">ما الذي تريد تنفيذه؟ *<select id="inquiry-service" name="service" required defaultValue=""><option value="" disabled>اختر نوع المشروع</option><option>تصميم وتنفيذ جناح معرض</option><option>تصنيع وتركيب تصميم جاهز</option><option>تجهيز فعالية أو حفل</option><option>مسرح ومنطقة استقبال</option><option>ركن موسمي أو منصة تصوير</option><option>تصميم فقط</option><option>مشروع آخر</option></select></label>
      <label htmlFor="inquiry-city">المدينة أو موقع التنفيذ *<input id="inquiry-city" name="city" required maxLength={120} /></label>
      <label htmlFor="inquiry-area">المساحة التقريبية بالمتر المربع<input id="inquiry-area" name="area" type="number" min="1" max="1000000" step="0.01" inputMode="decimal" /></label>
      <label htmlFor="inquiry-budget">ميزانيتك المحددة بالريال السعودي *<input id="inquiry-budget" name="budget" type="number" min="1" max="1000000000" step="0.01" inputMode="decimal" required placeholder="مثال: 25000" /><small>اكتب المبلغ الإجمالي المتاح للمشروع</small></label>
      <label htmlFor="inquiry-date">موعد التسليم المطلوب<input id="inquiry-date" name="date" type="date" /></label>
      <label htmlFor="inquiry-design">هل لديك تصميم أو تصور؟ *<select id="inquiry-design" name="design" required defaultValue=""><option value="" disabled>اختر الحالة</option><option>لدي تصاميم جاهزة للتنفيذ</option><option>لدي تصور أو صور مرجعية</option><option>لدي فكرة وأحتاج تطويرها</option><option>أحتاج اقتراحًا وتصميمًا من البداية</option></select></label>
      <label htmlFor="inquiry-reference">رابط التصاميم أو الصور المرجعية<input id="inquiry-reference" name="reference" type="url" dir="ltr" placeholder="https://" maxLength={500} /><small>يمكنك إرفاق ملفاتك مباشرة في محادثة واتساب بعد فتحها</small></label>
      <label className="field-wide" htmlFor="inquiry-details">صف لنا مشروعك وما تريد تصميمه *<textarea id="inquiry-details" name="details" required minLength={10} maxLength={1500} rows={5} placeholder="الفكرة، الهدف، التجهيزات المطلوبة، الألوان وأي تفاصيل تساعدنا على فهم طلبك" /></label>
    </div>
    <Button type="submit" className="button primary inquiry-submit">راجع طلبك <ArrowUpLeft aria-hidden="true" /></Button>
    {message && <section className="inquiry-review" aria-live="polite"><h3>طلبك جاهز للمراجعة</h3><p className="inquiry-message">{message}</p><Button asChild className="button primary"><a href={"https://wa.me/966563790900?text=" + encodeURIComponent(message)} target="_blank" rel="noreferrer">أرسل الطلب عبر واتساب <MessageCircle aria-hidden="true" /></a></Button><p className="form-note">سيفتح واتساب بالرسالة؛ اضغط إرسال هناك لإيصال الطلب. يمكنك تعديل الحقول أعلاه ثم مراجعتها مجددًا</p></section>}
    <p className="form-note">بياناتك تُجهز في المتصفح ولا تُحفظ في قاعدة بيانات الموقع</p>
  </form>;
}
