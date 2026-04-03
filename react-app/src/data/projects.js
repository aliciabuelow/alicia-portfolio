import travelPreviewImg from "../components/images/AI-Travel-Preview.png"
import shopifyPreviewImg from "../components/images/mollymilly-preview.png"

const projects = [
  {
    preview: travelPreviewImg,
    title: "Travel Itinerary Builder",
    description: "Multi-day, custom travel planner focused on turning unpredictable AI responses into structured, realistic, and readable itineraries.",
    features: ["Formatted AI output & response parsing", "Prompt engineering to control formatting", "Deployed full-stack application"],
    tags: ["React", "Express", "Node.js", "OpenAI API", "Vite"],
    color: "#1A0089",
    demoUrl: "https://ai-travel-app-mauve.vercel.app/",
    githubUrl: "https://github.com/aliciabuelow/AI-travel-app",
    caseStudy: {
        overview: "what it is, why you built it.",
        role: "what you did.",
        challenges: "challenges faced.",
        learning: "what learned.",
    }
  },
  {
    preview: shopifyPreviewImg,
    title: "E-commerce Art Store",
    description: "Designed and launched a Shopify storefront to sell original artwork and digital designs, focusing on branding, usability, and real customer experience.",
    features: ["Custom storefront and product page design for visual consistency", "Integrated print-on-demand services for automated fulfilment", "SEO optimization with structured product listings and metadata", "Processed 150+ customer orders"],
    tags: ["Shopify", "Adobe Creative Suite", "SEO", "HTML/CSS"],
    color: "#1A0089",
    caseStudy: {
        overview: "what it is, why you built it.",
        role: "what you did.",
        challenges: "challenges faced.",
        learning: "what learned.",
    }
  },
  {
    preview: "",
    title: "Project Tracker",
    description: "Under construction",
    features: [""],
    tags: ["React"],
    color: "#1A0089",
    demoUrl: "#",
    githubUrl: "#",    
    caseStudy: {
        overview: "what it is, why you built it.",
        role: "what you did.",
        challenges: "challenges faced.",
        learning: "what learned.",
    }
  }
];

export default projects;
