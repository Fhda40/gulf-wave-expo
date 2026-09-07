import Link from "next/link";

export function BrandLogo({ compact = false }: { compact?: boolean }) {
  return (
    <Link className={compact ? "logo logo-compact" : "logo"} href="/" aria-label="موجة الخليج — الرئيسية">
      <svg className="brand-mark" viewBox="0 0 64 64" role="img" aria-hidden="true">
        <path d="M8 49V23l18-11v17L8 40" />
        <path d="M56 49V17L32 4v24l24 14" />
        <path d="M8 37c8-8 14-8 22 0s14 8 26-3" />
      </svg>
      <span className="brand-name"><b>موجة الخليج</b><small>GULF WAVE</small></span>
    </Link>
  );
}
