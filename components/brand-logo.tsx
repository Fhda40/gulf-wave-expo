import Link from "next/link";

export function BrandLogo({ compact = false }: { compact?: boolean }) {
  return (
    <Link className={compact ? "logo logo-compact" : "logo"} href="/" aria-label="موجة الخليج — الرئيسية">
      <svg className="brand-mark" viewBox="0 0 64 64" role="img" aria-hidden="true">
        <path
          className="brand-wave-main"
          d="M4 34c10 9 19 10 28 1 5-5 8-12 15-15 5-2 10-2 15 1-5-8-12-12-20-10-8 2-12 9-18 15-6 7-11 9-20 3l-2 5Z"
        />
        <path
          className="brand-wave-tail"
          d="M3 41c12 11 24 12 35 1 5-5 9-11 15-12 4-1 7 0 10 2-4-7-10-10-16-8-7 2-11 8-16 13-8 8-16 9-27 0l-1 4Z"
        />
      </svg>
      <span className="brand-name"><b>موجة الخليج</b><small>GULF WAVE</small></span>
    </Link>
  );
}
