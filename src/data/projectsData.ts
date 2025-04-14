
export interface Project {
  title: string;
  description: string[];
  techStack: string[];
  image: string;
  links: { 
    demo?: string; 
    github?: string; 
    playstore?: string;
  };
}

export const featuredProjects: Project[] = [
  {
    title: "Stocky - Inventory management POS",
    description: [
      "Developed a inventory management app using Kotlin, Jetpack Compose, and Supabase. Included modules like inventory tracking, sales with PDF invoices, transactions, and analytics.",
      "Implemented Hilt and Followed MVVM and Clean Architecture for scalability and clean code. Added smooth animations, dark/light themes, and multilingual support for better UX.",
      "Used Supabase RPC functions to handle concurrent transactions. Ensured real-time data consistency and smooth multi-user interactions."
    ],
    techStack: ["Android", "Kotlin", "Supabase", "Jetpack compose", "Coroutines", "Hilt", "MVVM", "Clean Architecture", "Animations", "Material UI"],
    image: "/placeholder.svg",
    links: { github: "#" }
  },
  {
    title: "Pro Scanner - PDF Creator",
    description: [
      "Developed a robust document scanning app using Android Jetpack Compose for an intuitive, modern UI, implemented MVVM architecture for clean, maintainable code and seamless state management.",
      "Integrated ML Kit for advanced features such as automatic document detection and smart cropping, improving accuracy and efficiency in document scanning.",
      "Implemented efficient file management features, including custom categories and dynamic file organization, using Coroutines for smooth, non-blocking operations."
    ],
    techStack: ["Android", "Kotlin", "Jetpack compose", "Coroutines", "MVVM", "ML-kit", "Material UI", "File Management"],
    image: "/placeholder.svg",
    links: { playstore: "#", github: "#" }
  },
  {
    title: "2048++ : puzzle game",
    description: [
      "Developed 2048++ game with advanced features, including undo and a Hammer tool to remove random tiles, enhancing gameplay strategy and user engagement.",
      "Designed the game to function entirely offline, leveraging shared preferences to efficiently save and manage user data.",
      "Created visually appealing themes to enhance the aesthetic appeal and provide a delightful user experience."
    ],
    techStack: ["Android", "Kotlin", "XML", "MVP", "Navigation Library", "Material UI", "Shared preferences"],
    image: "/placeholder.svg",
    links: { playstore: "#", github: "#" }
  },
  {
    title: "Bhagavad Gita: Hindi & English",
    description: [
      "Designed and developed a Bhagavad Gita app featuring MVVM architecture, SQLite database integration with Room, and API consumption to get content.",
      "Distinguished app with audio feature utilizing Media Player and Google Text-to-Speech also ensured seamless user experience by handling edge cases and implementing dark and light mode themes."
    ],
    techStack: ["Android", "Kotlin", "XML", "MVVM", "Retrofit", "LiveData", "Animation"],
    image: "/placeholder.svg",
    links: { playstore: "#", github: "#" }
  },
  {
    title: "Trello - Project Management App",
    description: [
      "Developed a Trello-like project management app in Kotlin with real-time collaboration features using Firebase and Firestore as the backend.",
      "Implemented user authentication, board/list/card management, and fine-grained role-based access controls for creators vs. team members.",
      "Followed modular architecture using Activities, Fragments, and Firebase integration; ensured responsive UI with Material Design and latest Android APIs."
    ],
    techStack: ["Android", "Kotlin", "XML", "Firebase", "Modular Architecture", "Coroutines", "Material Design"],
    image: "/placeholder.svg",
    links: { github: "#" }
  },
  {
    title: "HelpDesk : An It ticketing PowerApp",
    description: [
      "Built an application using Power Platform that enables users to create and edit tickets.",
      "Created tickets are displayed on admin and user screens for easy tracking and editing.",
      "Data stored in SharePoint is fetched and handled by connectors.",
      "Implemented features, allowing users to edit and delete tickets and admins to edit, delete, assign and change ticket status.",
      "Developed automated email notifications flow to notify users and admin whenever a ticket is created or updated."
    ],
    techStack: ["Power Platform", "SharePoint", "Canvas app", "Power automate", "Connectors"],
    image: "/placeholder.svg",
    links: { demo: "#" }
  },
  {
    title: "BuzzTalk : A professional social media app",
    description: [
      "A Social Media app where users can post, comment, like, connect, follow and chat with each others.",
      "Followed MVVM Architecture through the application with Dagger Hilt for Dependency Injection.",
      "Implemented Real time Chat Functionality using Socket.io",
      "Implemented REST APIs in Android using Retrofit."
    ],
    techStack: ["Android", "Kotlin", "XML", "MVVM", "Retrofit", "Dagger Hilt"],
    image: "/placeholder.svg",
    links: { github: "#" }
  },
  {
    title: "Brighter : A photo editing app",
    description: [
      "A photo editing Android app that allows users to edit photos using filters, frames, brightness and other 12+ tools.",
      "Implemented with animations with Lottie and JSON.",
      "Maintained clean architecture, Professional UI design. App saves the edited photo in local storage."
    ],
    techStack: ["Android", "Kotlin", "XML", "JSON Animation", "DS photo SDK"],
    image: "/placeholder.svg",
    links: { playstore: "#", github: "#" }
  },
];

export const minorProjects: Project[] = [
  {
    title: "Fitness91",
    description: [
      "Built a fitness tracking Android app using Jetpack Compose, and Supabase with modules for gym workouts, face exercises, and diet planning.",
      "Implemented dynamic dashboards, in-app theming, and color-coded progress indicators to visualize daily and overall completion stats.",
      "Used Hilt, MVVM and Clean Architecture for scalability, and integrated Supabase for authentication and real-time progress tracking."
    ],
    techStack: ["Android", "Kotlin", "Supabase", "Jetpack compose", "Coroutines", "Hilt", "MVVM", "Clean Architecture", "Animations", "Material UI"],
    image: "/placeholder.svg",
    links: { github: "#" }
  },
  {
    title: "CricketScore",
    description: [
      "Built a real-time cricket score tracking app using Kotlin, Firebase, and Single Activity Architecture with modular fragments for smooth navigation.",
      "Implemented automatic run calculation, strike switching, and bowler management to streamline match progression and user input.",
      "Enabled live match updates and match state sharing across devices via Firebase, with polished UI/UX through fragment animations and Nav Graph."
    ],
    techStack: ["Android", "Kotlin", "XML", "Firebase Realtime", "NavGraph", "Material UI"],
    image: "/placeholder.svg",
    links: { github: "#" }
  },
  {
    title: "Travenor: Destination booking app",
    description: [
      "Designed a travel destination booking app UI using Jetpack Compose with smooth animated navigation, dynamic theming, and interactive elements.",
      "Built key screens including onboarding, authentication, home, search, notifications, and featured destinations with clean Material UI design.",
      "Focused on mastering Compose by building complex layouts, managing state effectively, and leveraging animation APIs to deliver optimal user experiences."
    ],
    techStack: ["Android", "Kotlin", "Jetpack compose", "Coroutines", "Animations", "Material UI"],
    image: "/placeholder.svg",
    links: { github: "#" }
  },
  {
    title: "Mausam : A Weather & Forecast app",
    description: [
      "Developed a weather app, which allows users to view current weather conditions, forecasts and astronomy data for any city.",
      "Integrated WeatherAPI using Retrofit for real-time data updates including three-day hourly weather and forecasts.",
      "Optimized app performance and Designed a user-friendly interface for clean and elegant UI experience."
    ],
    techStack: ["Android", "Kotlin", "XML", "Retrofit", "JSON Animation"],
    image: "/placeholder.svg",
    links: { github: "#", playstore: "#" }
  },
  {
    title: "ChatAI",
    description: [
      "A secure webview based chat-bot to interact with Gemini AI by Google.",
      "FAQ and user guide to onboard user and guide for use of chatBot."
    ],
    techStack: ["Android", "Kotlin", "XML", "WebView"],
    image: "/placeholder.svg",
    links: { github: "#" }
  }
];
