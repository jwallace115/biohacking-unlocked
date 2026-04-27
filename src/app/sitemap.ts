import type { MetadataRoute } from "next";

const BASE_URL = "https://biohackingunlocked.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/best-peptide-sources`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...[
      "/peptides/bpc-157",
      "/peptides/tb-500",
      "/peptides/ghk-cu",
      "/peptides/cjc-1295",
      "/peptides/ipamorelin",
      "/peptides/sermorelin",
      "/peptides/retatrutide",
      "/peptides/melanotan-2",
      "/peptides/selank",
      "/peptides/semax",
      "/peptides/wolverine-stack",
      "/peptides/gh-stack",
    ].map((route) => ({
      url: `${BASE_URL}${route}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
    ...[
      "/peptide-coa-explained",
      "/how-to-identify-fake-peptides",
    ].map((route) => ({
      url: `${BASE_URL}${route}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
  ];
}
