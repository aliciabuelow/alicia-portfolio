import travelPreviewImg from "../components/images/AI-Travel-Preview.jpeg"
import shopifyPreviewImg from "../components/images/mollymilly-preview.png"
import trackerPreviewImg from "../components/images/project-tracker-preview.png"
import wfpPreviewImg from "../components/images/WFP-Preview1.jpeg";


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
        role: "Developed a React application with a user-friendly interface for capturing key travel inputs, then integrated a lightweight Express backend and the OpenAI API to generate itineraries. Iterated on prompt design to enforce consistent, structured responses, then parsed and rendered the output into a clear day-by-day format using React state and conditional rendering.",
        challenges: "Ensuring consistent and reliable AI output required multiple iterations of prompt engineering, particularly around enforcing formatting and reducing unpredictability. Attempted to include external links in responses, but removed the feature due to unreliable (hallucinated) results. Also navigated new territory in setting up and deploying a simple, separate backend using Express.",
        learning: "Strengthened my understanding of API integration, asynchronous requests, and rendering dynamic data in React. Through iterating on the app, I also learned a great deal about improving AI output through prompt design and testing, while balancing technical functionality with user experience. Building a simple backend also gave me a stronger sense of how frontend and backend communicate."
        }
  },
  {
    preview: wfpPreviewImg,
    title: "Work-Friendly Perth",
    description: "Curated Perth work-spot finder built around practical local data, lightweight filtering, and a polished, responsive interface.",
    features: ["Clickable category, suburb, and tag filtering", "Curated local dataset with practical notes", "Responsive UI with type-based card styling"],
    tags: ["React (Vite)", "JavaScript", "CSS3"],
    color: "#1A0089",
    demoUrl: "https://perth-workfriendly-app.vercel.app/",
    githubUrl: "https://github.com/aliciabuelow/perth-workfriendly-app",
    caseStudy: {
      overview: "Built a curated Perth work-spot finder with a strong visual style, practical local content, and lightweight browsing interactions.",
      role: "Designed and developed a responsive React app around a manually curated dataset of libraries, public spaces, parks, and community hubs. I focused on turning scattered local information into something easier to browse and compare, using type-based card styling, clickable categories, suburb, type, and tag filtering, practical notes, and small usability details like clear search and return-to-search controls.",
      challenges: "The biggest challenge was making a relatively simple front-end project feel genuinely useful and intentional without unnecessary features or overcomplication. Since the app doesn’t rely on a backend or external API, the value had to come from the quality of the data, the interaction design, and the visual execution. I spent a lot of time refining the notes, tags, card structure, and colour system to support scanability on the frontend.",
      learning: "This project helped me think more deeply about UI/UX, visual branding, and the role of content in a front-end build. I practised designing for scanability, creating a cohesive visual system, making interactive elements accessible, and choosing features based on whether they actually improved the user experience. I put a lot of consideration into user pathways through the project, and that moulded the project into something different than I had initially planned, but much more practical and user-focused as a product."
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
      overview: "Built a lightweight project tracker for managing projects and tasks, focused on CRUD functionality and structured state management in React.",
      role: "Developed a React application with a component-based architecture to manage projects and nested task data. Centralized state in the top-level component and passed data and update functions through props. Implemented features for creating, editing, deleting, and filtering tasks, along with localStorage integration to persist user data across sessions.",
      challenges: "The biggest challenge was moving from building the app step-by-step to understanding how all the pieces worked together. With nested state, it was initially difficult to follow how data was updated across components, especially when using methods like map and filter. Tracing how functions passed through props triggered state changes was another learning curve. I worked through this by reviewing and interacting with the code in smaller sections, gradually building a clearer idea of how state flows through the application. Features like inline editing and task toggling also highlighted the challenge of keeping UI state and application state in sync.",
      learning: "Strengthened my understanding of core React concepts, particularly state management, props, and how component structure affects data flow. Working with nested data helped me get more comfortable using methods to update tasks and projects without mutating existing data. I also gained a better understanding of form handling in React, including managing input values through state and updating the UI based on user interactions. Beyond the code itself, the project also taught me how to approach learning more effectively - breaking down complex functionality into smaller parts and reinforcing concepts through both study and hands-on changes to the code."
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
        learning: "Gained hands-on experience building and managing a business with real customers and transactions. Developed my understanding of user experience, branding, and conversion-focused design. Learned how to balance creative design with practical constraints such as fulfilment systems, customer expectations, and scalability."    
    }
  }
];

export default projects;
