export interface Compound {
  slug: string;
  name: string;
  category: string;
  summary: string;
  whatIsIt: string;
  research: string[];
  commonUses: string[];
  unknowns: string[];
  protocols: string[];
  vendors: string[];
}

export const compounds: Compound[] = [
  {
    slug: "bpc-157",
    name: "BPC-157",
    category: "Recovery",
    summary:
      "A synthetic peptide derived from a protein found in human gastric juice, studied for its potential role in tissue repair and recovery.",
    whatIsIt:
      "BPC-157 (Body Protection Compound-157) is a synthetic peptide consisting of 15 amino acids. It is derived from a protective protein found naturally in the human stomach. Researchers have studied it primarily in animal models for its potential effects on healing tendons, muscles, and the gut lining.",
    research: [
      "Animal studies suggest BPC-157 may accelerate tendon and ligament healing (Seiwerth et al., Journal of Physiology, 2018).",
      "Rodent models have shown potential protective effects on the gastrointestinal lining (Sikiric et al., Current Pharmaceutical Design, 2018).",
      "Limited human clinical trial data is available as of now. Most evidence comes from animal and in-vitro studies.",
    ],
    commonUses: [
      "Joint and tendon recovery support",
      "Gut health and digestive support",
      "General injury recovery",
    ],
    unknowns: [
      "Long-term safety in humans has not been established.",
      "Optimal dosing for humans is not clinically validated.",
      "Interactions with other compounds or medications are not well studied.",
    ],
    protocols: [
      "Community-reported subcutaneous dosing: 250-500mcg per day",
      "Some users report cycling 4 weeks on, 2 weeks off",
      "Often used near the site of injury for localized support",
    ],
    vendors: ["amino-asylum", "peptide-sciences"],
  },
  {
    slug: "tb-500",
    name: "TB-500",
    category: "Recovery",
    summary:
      "A synthetic fragment of thymosin beta-4, researched for its potential role in tissue repair, flexibility, and inflammation reduction.",
    whatIsIt:
      "TB-500 is a synthetic version of a region of thymosin beta-4, a naturally occurring peptide found in nearly all human and animal cells. It has been studied primarily in veterinary and preclinical settings for its potential effects on wound healing and tissue repair.",
    research: [
      "Animal studies indicate TB-500 may promote cell migration and blood vessel formation (Goldstein et al., Expert Opinion on Biological Therapy, 2012).",
      "Preclinical research suggests potential anti-inflammatory properties.",
      "Human clinical data remains very limited.",
    ],
    commonUses: [
      "Muscle and tissue recovery",
      "Flexibility and mobility support",
      "Often stacked with BPC-157 in community protocols",
    ],
    unknowns: [
      "Human safety profile is not established through clinical trials.",
      "Optimal dosing in humans is not validated.",
      "Long-term effects are unknown.",
    ],
    protocols: [
      "Community-reported dosing: 2-5mg twice per week during loading phase",
      "Maintenance: 2-5mg every two weeks",
      "Often used alongside BPC-157",
    ],
    vendors: ["amino-asylum", "peptide-sciences"],
  },
  {
    slug: "cjc-1295",
    name: "CJC-1295",
    category: "Longevity",
    summary:
      "A synthetic growth hormone-releasing hormone (GHRH) analog studied for its potential to increase growth hormone levels.",
    whatIsIt:
      "CJC-1295 is a synthetic analog of growth hormone-releasing hormone (GHRH). It was developed to provide a longer-lasting stimulation of growth hormone release compared to natural GHRH. It is often discussed in the context of anti-aging and body composition research.",
    research: [
      "Clinical studies have shown CJC-1295 can increase plasma GH and IGF-1 levels in healthy adults (Teichman et al., Journal of Clinical Endocrinology & Metabolism, 2006).",
      "Research suggests sustained GH elevation for 6-8 days after a single dose with DAC (Drug Affinity Complex) variant.",
      "More research is needed on long-term outcomes and safety.",
    ],
    commonUses: [
      "Growth hormone optimization",
      "Body composition and recovery",
      "Often paired with Ipamorelin",
    ],
    unknowns: [
      "Long-term effects of sustained GH elevation are not fully understood.",
      "Individual response can vary significantly.",
      "Safety in populations with existing health conditions needs more study.",
    ],
    protocols: [
      "Community-reported dosing: 100mcg before bed, often with Ipamorelin",
      "Typically used 5 days on, 2 days off",
      "CJC-1295 with DAC variant: 2mg once per week",
    ],
    vendors: ["peptide-sciences"],
  },
  {
    slug: "ipamorelin",
    name: "Ipamorelin",
    category: "Longevity",
    summary:
      "A selective growth hormone secretagogue studied for its targeted stimulation of growth hormone release with fewer side effects than other GH peptides.",
    whatIsIt:
      "Ipamorelin is a synthetic pentapeptide that acts as a selective growth hormone secretagogue. Unlike other GH-releasing peptides, it is considered more targeted in its action, stimulating GH release without significantly affecting cortisol or prolactin levels.",
    research: [
      "Studies show Ipamorelin selectively stimulates GH release in a dose-dependent manner (Raun et al., European Journal of Endocrinology, 1998).",
      "Research indicates it does not significantly increase cortisol, ACTH, or prolactin at therapeutic doses.",
      "Clinical data on long-term use in humans is limited.",
    ],
    commonUses: [
      "Growth hormone optimization with fewer side effects",
      "Sleep quality improvement",
      "Recovery and body composition support",
    ],
    unknowns: [
      "Long-term safety data in humans is lacking.",
      "Interactions with other peptides need more research.",
      "Effects may vary based on age and baseline GH levels.",
    ],
    protocols: [
      "Community-reported dosing: 200-300mcg before bed",
      "Often paired with CJC-1295 (no DAC)",
      "Typical cycles: 8-12 weeks",
    ],
    vendors: ["peptide-sciences"],
  },
  {
    slug: "sermorelin",
    name: "Sermorelin",
    category: "Longevity",
    summary:
      "A synthetic analog of natural GHRH that has been FDA-approved for diagnosing growth hormone deficiency and studied for anti-aging applications.",
    whatIsIt:
      "Sermorelin is a synthetic peptide analog of growth hormone-releasing hormone (GHRH) consisting of the first 29 amino acids of the natural 44-amino acid sequence. It has been used clinically and has an established safety record compared to many other peptides in this space.",
    research: [
      "Sermorelin has been FDA-approved for diagnostic use in growth hormone deficiency.",
      "Clinical studies show it can increase GH secretion in both children and adults (Walker, Endocrine Practice, 2006).",
      "It has one of the more established safety profiles among GH-related peptides.",
    ],
    commonUses: [
      "Growth hormone optimization",
      "Anti-aging and longevity support",
      "Sleep quality improvement",
    ],
    unknowns: [
      "Optimal long-term dosing for anti-aging purposes is not established.",
      "Effects may diminish over extended use.",
      "Individual results can vary significantly.",
    ],
    protocols: [
      "Community-reported dosing: 200-500mcg before bed",
      "Often used as a standalone GH peptide",
      "Typical use: daily for 3-6 months",
    ],
    vendors: ["amino-asylum", "peptide-sciences"],
  },
  {
    slug: "semaglutide",
    name: "Semaglutide",
    category: "Metabolic",
    summary:
      "A GLP-1 receptor agonist originally developed for type 2 diabetes, now widely studied and prescribed for weight management.",
    whatIsIt:
      "Semaglutide is a glucagon-like peptide-1 (GLP-1) receptor agonist. It mimics the GLP-1 hormone that is released in the gut after eating. It was originally developed for type 2 diabetes management and has since been approved by the FDA for chronic weight management under brand names like Ozempic and Wegovy.",
    research: [
      "FDA-approved for type 2 diabetes (Ozempic) and chronic weight management (Wegovy).",
      "The STEP clinical trials demonstrated significant weight loss in participants (Wilding et al., NEJM, 2021).",
      "Ongoing research into cardiovascular benefits and other potential applications.",
    ],
    commonUses: [
      "Weight management and appetite control",
      "Blood sugar regulation",
      "Metabolic health optimization",
    ],
    unknowns: [
      "Long-term effects beyond clinical trial durations need more study.",
      "Weight regain after discontinuation is a documented concern.",
      "Effects on muscle mass during weight loss need attention.",
    ],
    protocols: [
      "FDA-approved dosing starts at 0.25mg weekly, titrated up to 2.4mg weekly",
      "Research-grade semaglutide requires careful reconstitution",
      "Medical supervision is strongly recommended for this compound",
    ],
    vendors: ["peptide-sciences"],
  },
  {
    slug: "aod-9604",
    name: "AOD-9604",
    category: "Metabolic",
    summary:
      "A modified fragment of human growth hormone studied for its potential fat-reduction properties without the growth-promoting effects of full GH.",
    whatIsIt:
      "AOD-9604 (Advanced Obesity Drug) is a synthetic peptide fragment of the C-terminus of human growth hormone (amino acids 177-191). It was designed to have the fat-reducing effects of growth hormone without the diabetogenic or growth-promoting side effects.",
    research: [
      "Early clinical trials showed modest effects on fat reduction (Heffernan et al., Obesity Research, 2001).",
      "AOD-9604 has been granted GRAS (Generally Recognized as Safe) status by the FDA as a food additive.",
      "Clinical development for obesity was discontinued, but research interest continues.",
    ],
    commonUses: [
      "Targeted fat reduction support",
      "Metabolic health without GH side effects",
      "Often used alongside other peptides",
    ],
    unknowns: [
      "Clinical development was halted, raising questions about efficacy at tested doses.",
      "Optimal dosing and administration routes are not established.",
      "Long-term effects are not well documented.",
    ],
    protocols: [
      "Community-reported dosing: 250-500mcg per day",
      "Typically administered on an empty stomach",
      "Often cycled 5 days on, 2 days off",
    ],
    vendors: ["amino-asylum", "peptide-sciences"],
  },
];

export function getCompound(slug: string): Compound | undefined {
  return compounds.find((c) => c.slug === slug);
}

export function getCompoundsByCategory(category: string): Compound[] {
  return compounds.filter((c) => c.category === category);
}
