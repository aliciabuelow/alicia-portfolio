import travelPreviewImg from "../components/images/AI-Travel-Preview.png"
import shopifyPreviewImg from "../components/images/mollymilly-preview.png"
import trackerPreviewImg from "../components/images/project-tracker-preview.png"

const projects = [
  {
    preview: travelPreviewImg,
    title: "AI Travel Planner",
    description: "Multi-day, custom travel planner focused on turning unpredictable AI responses into structured, realistic, and readable itineraries.",
    features: ["Formatted AI output & response parsing", "Prompt engineering to control formatting", "Deployed full-stack application"],
    tags: ["React (Vite)", "Express", "Node.js", "OpenAI API"],
    color: "#1A0089",
    demoUrl: "https://ai-travel-app-mauve.vercel.app/",
    githubUrl: "https://github.com/aliciabuelow/AI-travel-app",
    caseStudy: {
        overview: "Built an AI-powered travel itinerary generator focused on turning unpredictable AI responses into realistic, readable travel plans.",
        role: "Developed a React application with a structured, user-friendly interface for capturing key travel inputs. Integrated a backend using Express and the OpenAI API to generate itineraries. Designed and iterated on prompt logic to enforce consistent, structured responses, then parsed and rendered the output into a clear day-by-day format using React state and conditional rendering.",
        challenges: "Ensuring consistent and reliable AI output required multiple iterations of prompt engineering, particularly around enforcing formatting and reducing unpredictability. Attempted to include external links in responses, but removed the feature due to unreliable (hallucinated) results. Also navigated new territory by setting up and deploying a simple, separate backend using Express.",
        learning: "Strengthened my understanding of API integration, asynchronous requests, and rendering dynamic data in React. Through building and iterating on the app, I also learned a great deal about prompt design, improving AI output through testing, and balancing technical functionality with user experience. The addition of a simple backend also advanced my understanding of how frontend and backend communicate.",
    }
  },
  {
    preview: shopifyPreviewImg,
    title: "Molly & Milly - E-commerce Store",
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
  {
    preview: trackerPreviewImg,
    title: "Project Tracker (React App)",
    description: "Lightweight project tracker built to manage projects and tasks while demonstrating structured state management and full CRUD functionality in React.",
    features: ["Full CRUD functionality for projects and tasks", "Nested state management across projects and task lists", "Component-based architecture with clear data flow", "Persistent data using localStorage"],
    tags: ["React (Vite)", "JavaScript", "CSS3", "localStorage"],
    color: "#1A0089",
    demoUrl: "https://alicia-buelow-project-tracker.vercel.app/",
    githubUrl: "https://github.com/aliciabuelow/Project-Tracker-App",
    caseStudy: {
      overview: "Built a lightweight project tracker to manage projects and tasks, focusing on implementing full CRUD functionality and structured state management in React.",
      role: "Developed a React application with a component-based architecture to manage projects and nested task data. Centralized state in the top-level component and passed data and update functions through props. Implemented features for creating, editing, deleting, and filtering tasks, along with localStorage integration to persist user data across sessions.",
      challenges: "The biggest challenge was moving from building the app step-by-step to actually understanding how all the pieces worked together. With nested state (projects containing tasks), it was initially difficult to follow how data was being updated across components, especially when using methods like map and filter. I also found it challenging to trace how functions were passed through props and triggered state changes. Rather than rebuilding the app from scratch, I worked through this by reviewing and interacting with the code in small sections, gradually building a clearer mental model of how state flows through the application. Implementing features like inline editing and task toggling also highlighted the complexity of keeping UI state and application state in sync.",
      learning: "This project significantly strengthened my understanding of core React concepts, particularly state management, props, and how component structure affects data flow. Working with nested data helped me get more comfortable using methods to update tasks and projects without mutating existing data. I also gained a better understanding of form handling in React, including managing input values through state and updating the UI based on user interactions. Beyond the code itself, this project taught me how to approach learning more effectively — breaking down complex functionality into smaller parts and reinforcing concepts through both study and hands-on changes to the code.",
    }
  }
];

export default projects;
