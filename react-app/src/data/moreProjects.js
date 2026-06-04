import shopifyPreviewImg from "../components/images/mollymilly-preview.png";
import trackerPreviewImg from "../components/images/project-tracker-preview.png";

const moreProjects = [
    {
    preview: trackerPreviewImg,
    title: "Project Tracker (React App)",
    description: "Lightweight project tracker built to manage projects and tasks while demonstrating structured state management and full CRUD functionality in React.",
    features: ["Full CRUD functionality for projects and tasks", "Nested state management across projects and task lists", "Component-based architecture with clear data flow", "Persistent data using localStorage"],
    tags: ["React (Vite)", "JavaScript", "CSS3", "localStorage"],
    color: "#1A0089",
    demoUrl: "https://alicia-buelow-project-tracker.vercel.app/",
    githubUrl: "https://github.com/aliciabuelow/Project-Tracker-App",
    },
{
    preview: shopifyPreviewImg,
    title: "Molly & Milly (E-commerce Store)",
    description: "Designed and launched a Shopify storefront to sell original artwork and digital designs, focusing on branding, usability, and real customer experience.",
    features: ["Custom storefront and product page design for visual consistency", "Integrated print-on-demand services for automated fulfilment", "SEO optimization with structured product listings and metadata", "Processed 150+ customer orders"],
    tags: ["Shopify", "Adobe Creative Suite", "SEO", "HTML/CSS"],
    color: "#1A0089",
    caseStudy: {
        overview: "Designed and launched an e-commerce storefront to sell custom digital artwork and print-on-demand products, combining visual design, branding, and real-world customer experience. Processed 150+ customer orders from initial concept to delivery.",
        role: "Built and customized a Shopify storefront, designing a full visual identity and layout using Adobe Illustrator and Photoshop. Created custom artwork for each order and managed product listings, pricing, and content. Integrated and coordinated multiple print-on-demand services to support automated fulfilment workflows. Handled end-to-end operations, including customer communication, order management, and marketing through social media and paid ads.",
        challenges: "Managing third-party print-on-demand services required ongoing testing and iteration to ensure consistent product quality and reliable fulfilment. Maintaining a cohesive brand across the storefront, product offerings, and marketing channels was also a key challenge. As a solo project, balancing design, operations, and ongoing store maintenance required strong organization and adaptability.",
        learning: "Gained hands-on experience building and managing a business with real customers and transactions. Developed my understanding of user experience, branding, and conversion-focused design. Learned how to balance creative design with practical constraints such as fulfilment systems, customer expectations, and scalability."    
    }
    }
];

export default moreProjects;