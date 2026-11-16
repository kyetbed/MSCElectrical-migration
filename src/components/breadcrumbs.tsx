import Link from "next/link";

import { siteUrl } from "@/data/nap";

export type BreadcrumbItem = {
  name: string;
  href?: string;
};

export function Breadcrumbs({
  items,
  onDark = false,
  embedded = false,
  className,
}: {
  items: BreadcrumbItem[];
  onDark?: boolean;
  embedded?: boolean;
  className?: string;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      ...(item.href ? { item: `${siteUrl}${item.href}` } : {}),
    })),
  };

  const navClass = [
    embedded ? "pb-6" : onDark ? "" : "px-[5%] pt-28 lg:pt-32",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <nav aria-label="Breadcrumb" className={navClass || undefined}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ol
        className={`flex flex-wrap items-center gap-x-2 gap-y-1 text-sm ${
          onDark ? "text-white/90" : "text-[#1243B4]"
        }`}
      >
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={`${item.name}-${index}`} className="inline-flex items-center gap-2">
              {item.href && !isLast ? (
                <Link href={item.href} className="hover:underline">
                  {item.name}
                </Link>
              ) : (
                <span
                  className={
                    isLast
                      ? onDark
                        ? "font-semibold text-white"
                        : "font-semibold text-[#111]"
                      : undefined
                  }
                >
                  {item.name}
                </span>
              )}
              {!isLast ? (
                <span className={onDark ? "text-white/40" : "text-[#1243B4]/50"} aria-hidden>
                  /
                </span>
              ) : null}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}