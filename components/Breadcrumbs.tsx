import Link from "next/link";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      ...(item.href ? { item: `https://mcdonalds.es${item.href}` } : {}),
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <nav
        aria-label="Ruta de navegación"
        className="w-full bg-[#27251F]/80 border-b border-white/5"
      >
        <ol className="max-w-7xl mx-auto px-6 py-3 flex items-center gap-2 text-xs text-white/40 flex-wrap">
          {items.map((item, i) => (
            <li key={i} className="flex items-center gap-2">
              {i > 0 && <span aria-hidden="true">›</span>}
              {item.href && i < items.length - 1 ? (
                <Link
                  href={item.href}
                  className="hover:text-[#FFBC0D] transition-colors duration-200"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-[#FFBC0D] font-medium">{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
