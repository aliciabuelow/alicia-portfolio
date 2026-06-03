import travelPreviewImg from "../components/images/AI-Travel-Preview.jpeg";
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
  }
];

export default projects;
