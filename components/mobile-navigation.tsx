"use client";

import Link from "next/link";
import { ArrowUpLeft, Menu, X } from "lucide-react";

import { BrandLogo } from "./brand-logo";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";

const links = [
  ["الرئيسية", "/"],
  ["خدماتنا", "/#services"],
  ["أعمالنا", "/projects"],
  ["من نحن", "/about"],
  ["تواصل معنا", "/contact"],
] as const;

export function MobileNavigation() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="menu-trigger" type="button" aria-label="فتح القائمة">
          <Menu aria-hidden="true" />
          <span>القائمة</span>
        </button>
      </SheetTrigger>
      <SheetContent side="left" showCloseButton={false} className="mobile-sheet">
        <SheetHeader className="mobile-sheet-head">
          <SheetTitle className="sr-only">قائمة الموقع</SheetTitle>
          <SheetDescription className="sr-only">روابط التنقل الرئيسية في موقع موجة الخليج</SheetDescription>
          <BrandLogo compact />
          <SheetClose asChild>
            <button className="menu-close" type="button" aria-label="إغلاق القائمة"><X aria-hidden="true" /></button>
          </SheetClose>
        </SheetHeader>
        <nav className="mobile-nav-links" aria-label="التنقل الرئيسي للجوال">
          {links.map(([label, href], index) => (
            <SheetClose asChild key={href}>
              <Link href={href}><span>0{index + 1}</span>{label}<ArrowUpLeft aria-hidden="true" /></Link>
            </SheetClose>
          ))}
        </nav>
        <div className="mobile-sheet-foot">
          <p>نصمم وننفذ أجنحة المعارض والفعاليات من الفكرة حتى الافتتاح.</p>
          <a href="tel:+966563790900" dir="ltr">+966 56 379 0900</a>
        </div>
      </SheetContent>
    </Sheet>
  );
}
