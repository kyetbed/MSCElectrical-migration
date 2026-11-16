import { locations } from "@/data/locations";

/** Old site town slugs that differ from the rebuild. */
export const legacyTownSlugAliases: Record<string, string> = {
  bestwood: "bestwood-village",
  "old-basford": "basford",
  "lenton-abbey": "lenton",
  "st-anns": "sneinton",
  edwalton: "west-bridgford",
};

const validSlugs = new Set<string>(locations.map((l) => l.slug));

export function resolveLegacyTownSlug(rawSlug: string): string | null {
  const slug = legacyTownSlugAliases[rawSlug] ?? rawSlug;
  if (validSlugs.has(slug)) return slug;
  return null;
}