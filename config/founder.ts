/**
 * Founder Section Configuration
 * Contains data for the Meet Your Guide section
 */

export interface FounderCard {
  id: string;
  tags: string[];
  title: string;
  content: string | string[];
  metadata: {
    label: string;
    value: string;
  }[];
  link?: {
    text: string;
    url: string;
  };
  image: string;
}

export const founderCards: FounderCard[] = [
  {
    id: "jake-cortez-bio",
    tags: ["FOUNDER", "AI ARCHITECT", "SYSTEMS ENGINEER"],
    title: "Jake Cortez: Architecting AI-Powered Operating Systems for Entrepreneurs",
    content: [
      "Jake Cortez operates at the intersection of artificial intelligence, psychometric science, and systematic wealth creation—architecting operating systems that transform entrepreneurial potential into measurable market dominance.",
      "Track Record:\n• Raised $19M+ in capital for major land development and mobile home community projects\n• Structured and closed multi-million-dollar strategic deals with national homebuilders\n• Designed and implemented AI systems in a manufactured home dealership, enabling automated SMS, Instagram, Facebook, and voice engagement\n• Leveraged AI to increase home sales by 30% within the first operational cycle\n• Advisor to 7–9 figure founders across real estate, tech, and investment sectors\n• Known for engineering repeatable systems that de-risk projects and accelerate development timelines",
      "Mission:\n\"Architect AI-powered operating systems for entrepreneurs to scale wealth, wisdom, and impact—simultaneously. This is a systematic integration of material abundance and meaningful contribution, engineered through intelligent technology that amplifies human potential.\"",
      "Active Ecosystem:\nJake is building a multi-brand portfolio including AI Growth Advisor (agentic AI systems for 7-8 figure companies), ProdigyFlow.AI (workforce transformation), IdentityUpgrade.AI (executive transformation), and iSimplify.io (AI discipleship platform launching October 2025).",
    ],
    metadata: [
      { label: "Focus", value: "AI Systems Architecture" },
      { label: "Specialization", value: "Wealth Creation & Executive Transformation" },
    ],
    link: {
      text: "Learn more about Jake's work",
      url: "/about",
    },
    image: "/Jake_Cortez.jpeg",
  },
];

/**
 * Get all founder cards
 */
export function getFounderCards(): FounderCard[] {
  return founderCards;
}

/**
 * Get founder card by ID
 */
export function getFounderCardById(id: string): FounderCard | undefined {
  return founderCards.find((card) => card.id === id);
}
