import type { MetadataRoute } from "next";

const BASE_URL = "https://biohackingunlocked.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    // Core pages
    "",
    "/start-here",
    "/about",
    "/editorial-policy",
    "/disclaimer",
    "/privacy-policy",
    "/contact",

    // Peptides hub + subpages
    "/peptides",
    "/peptides/what-are-peptides",
    "/peptides/peptide-safety",
    "/peptides/how-peptides-work",
    "/peptides/how-to-store-peptides",
    "/peptides/research-vs-pharma-peptides",

    // Revenue page
    "/best-peptide-sources",

    // Individual peptide guides
    "/peptides/bpc-157",
    "/peptides/tb-500",
    "/peptides/ghk-cu",
    "/peptides/cjc-1295",
    "/peptides/ipamorelin",
    "/peptides/sermorelin",
    "/peptides/melanotan-2",
    "/peptides/selank",
    "/peptides/semax",

    // Comparison pages
    "/bpc-157-vs-tb-500",
    "/cjc-1295-vs-ipamorelin",
    "/ghk-cu-vs-collagen",
    "/selank-vs-semax",

    // Problem-focused guides
    "/peptides-for-recovery",
    "/peptides-for-skin",
    "/peptides-for-fat-loss",
    "/peptides-for-sleep",
    "/peptides-for-brain-health",

    // Safety & education
    "/peptide-side-effects",
    "/peptide-research-safety",
    "/peptide-quality-testing",
    "/peptide-coa-explained",
    "/how-to-identify-fake-peptides",

    // Reviews
    "/reviews",
    "/reviews/peptide-sciences-review",
    "/reviews/swiss-chems-review",
    "/reviews/umbrella-labs-review",

    // Future hubs
    "/nootropics",
    "/recovery",
    "/longevity",
  ];

  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : route === "/best-peptide-sources" ? 0.9 : 0.7,
  }));
}
