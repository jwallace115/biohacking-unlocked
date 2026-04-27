export interface Vendor {
  slug: string;
  name: string;
  overview: string;
  coaVerified: boolean;
  carries: string[];
  pricing: string;
  shipping: string;
  reputation: string;
  pros: string[];
  cons: string[];
  verdict: string;
  affiliateUrl: string;
  yearsOperating: number;
}

export const vendors: Vendor[] = [
  {
    slug: "amino-asylum",
    name: "Amino Asylum",
    overview:
      "Amino Asylum is a US-based peptide and research compound supplier known for competitive pricing and a wide product catalog. They have been operating since 2020 and have built a following in the biohacking community.",
    coaVerified: true,
    carries: ["BPC-157", "TB-500", "Sermorelin", "AOD-9604"],
    pricing:
      "Generally considered budget-friendly compared to competitors. Peptide vials typically range from $25-$60.",
    shipping:
      "Ships within the US. Standard shipping takes 3-7 business days. Expedited options available.",
    reputation:
      "Mixed but trending positive. Active community presence on Reddit and forums. Customer service has improved over time.",
    pros: [
      "Competitive pricing across their catalog",
      "Wide selection of compounds",
      "COA documentation available on request",
      "Active community engagement",
    ],
    cons: [
      "Relatively newer company compared to some competitors",
      "Website can be difficult to navigate",
      "Some reports of shipping delays during peak periods",
    ],
    verdict:
      "A solid budget-friendly option for beginners. We recommend always requesting COA documentation and starting with their more established products.",
    affiliateUrl: "#",
    yearsOperating: 6,
  },
  {
    slug: "peptide-sciences",
    name: "Peptide Sciences",
    overview:
      "Peptide Sciences is one of the most established US-based peptide suppliers, known for rigorous third-party testing and high purity standards. They are frequently recommended in research and biohacking communities.",
    coaVerified: true,
    carries: [
      "BPC-157",
      "TB-500",
      "CJC-1295",
      "Ipamorelin",
      "Sermorelin",
      "Semaglutide",
      "AOD-9604",
    ],
    pricing:
      "Premium pricing reflecting their testing standards. Peptide vials typically range from $40-$90.",
    shipping:
      "US-based shipping with 2-5 business day delivery. International shipping available to select countries.",
    reputation:
      "Widely regarded as one of the most reputable peptide suppliers. Consistently recommended on Reddit, forums, and by experienced researchers.",
    pros: [
      "Extensive third-party testing with published COAs",
      "High purity standards (98%+ on most products)",
      "Long track record in the industry",
      "Excellent customer service",
      "Wide product selection",
    ],
    cons: [
      "Higher prices than budget competitors",
      "Some products occasionally out of stock",
      "No phone support",
    ],
    verdict:
      "Our top recommendation for quality and reliability. The premium pricing is justified by their testing standards and consistency. Ideal for those who prioritize purity and want peace of mind.",
    affiliateUrl: "#",
    yearsOperating: 10,
  },
];

export function getVendor(slug: string): Vendor | undefined {
  return vendors.find((v) => v.slug === slug);
}
