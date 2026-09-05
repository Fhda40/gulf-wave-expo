import type { MetadataRoute } from "next";
export const dynamic = "force-static";
export default function sitemap():MetadataRoute.Sitemap{const base="https://gulfwaveexpo.com";const paths=["","/projects","/about","/contact","/services/exhibition-booth-design","/services/booth-production","/services/event-production","/services/temporary-installations"];return paths.map((path,i)=>({url:`${base}${path}`,lastModified:new Date(),changeFrequency:i===0?"weekly":"monthly",priority:i===0?1:i===1?.9:.7}))}
