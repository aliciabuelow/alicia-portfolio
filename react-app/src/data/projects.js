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
        overview: "Built an AI-powered travel itinerary generator focused on turning unpredictable AI responses into realistic, easy-to-follow travel plans.",
        role: "Developed a React application with a structured, user-friendly interface for capturing key travel inputs. Integrated a backend using Express and the OpenAI API to generate itineraries. Designed and iterated on prompt logic to enforce consistent, structured responses, then parsed and rendered the output into a clear day-by-day format using React state and conditional rendering.",
        challenges: "Ensuring consistent and reliable AI output required multiple iterations of prompt engineering, particularly around enforcing formatting and reducing unpredictability. Attempted to include external links in responses, but removed the feature due to unreliable (hallucinated) results. Also navigated new territory by setting up and deploying a separate backend using Express.",
        learning: "Gained hands-on experience building and deploying a full-stack application, including working with Express and API integration. Developed a strong understanding of prompt engineering for structured AI output, as well as techniques for parsing and rendering dynamic data in React. Improved handling of loading states and asynchronous data flows.",
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
        overview: "Designed and launched an e-commerce storefront to sell custom digital artwork and print-on-demand products, combining visual design, branding, and real-world customer experience. Processed 150+ customer orders from initial concept to delivery.",
        role: "Built and customized a Shopify storefront, designing a full visual identity and layout using Adobe Illustrator and Photoshop. Created custom artwork for each order and managed product listings, pricing, and content. Integrated and coordinated multiple print-on-demand services to support automated fulfilment workflows. Handled end-to-end operations, including customer communication, order management, and marketing through social media and paid ads.",
        challenges: "Managing third-party print-on-demand services required ongoing testing and iteration to ensure consistent product quality and reliable fulfilment. Maintaining a cohesive brand across the storefront, product offerings, and marketing channels was also a key challenge. As a solo project, balancing design, operations, and ongoing store maintenance required strong organization and adaptability.",
        learning: "Gained hands-on experience building and managing a business with active customers and transactions. Developed a strong understanding of user experience, branding, and conversion-focused design. Learned how to balance creative design with practical constraints such as fulfilment systems, customer expectations, and scalability.",
    }
  },
];

export default projects;
