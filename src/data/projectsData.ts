export interface Project {
  title: string;
  description: string[];
  techStack: string[];
  image: string;
  links: {
    github?: string;
    playstore?: string;
  };
}

export const featuredProjects: Project[] = [
  {
    title: "Agri Price: Daily Crop Prices Gujarat",
    description: [
      "Created Agri-Price app to show daily crop prices (min/max) in all Gujarat markets. Used Kotlin and Jetpack Compose to build easy-to-use UI with offline-first support using Room DB.",
      "Used Supabase to store clean crop and market data. Wrote Python scripts to fetch and update public data daily. Old data (over 100 days) and unused crops are removed automatically.",
      "Implemented notifications for today's updated Markets. For better User experience managed Themes and Data refresh rules for offline-first architecture."
    ],
    techStack: ["Android", "Kotlin", "Supabase", "Jetpack Compose", "Room", "Koin", "Notification", "Navigation3", "Offline-first", "Material UI"],
    image: "agri-price_icon.png",
    links: {
      playstore: "https://play.google.com/store/apps/details?id=com.elite.agriprice",
      github: "https://github.com/jemish-169/Agri-Price"
    }
  },
  {
    title: "Pro Scanner - PDF Scanner App",
    description: [
      "Developed a robust document scanning app using Android Jetpack Compose for an intuitive, modern UI, implemented MVVM architecture for clean, maintainable code and seamless state management.",
      "Integrated ML Kit for advanced features such as automatic document detection and smart cropping, improving accuracy and efficiency in document scanning.",
      "Implemented efficient file management features, including custom categories and dynamic file organization, using Coroutines for smooth, non-blocking operations."
    ],
    techStack: ["Android", "Kotlin", "Jetpack compose", "Coroutines", "MVVM", "ML-kit", "Material UI", "File Management"],
    image: "pro-scanner_icon.png",
    links: { playstore: "https://play.google.com/store/apps/details?id=com.elite.scanner", github: "https://github.com/jemish-169/Pro-Scanner" }
  },
  {
    title: "Bhagavad Gita: Hindi & English",
    description: [
      "Designed and developed a Bhagavad Gita app featuring MVVM architecture and implemented RoomDB for local storage and ktor for networking.",
      "Implemented features like translations and commentaries, chapter summaries, mark favourite verses, Scheduled notifications, and share verses with custom designs & themes.",
      "App has audio feature utilizing Media Player and for better user experience in reading implemented dark and light mode."
    ],
    techStack: ["Android", "Kotlin", "Jetpack compose", "MVVM", "Ktor", "Notification", "Navigation3", "RoomDB", "Media Player", "Supabase"],
    image: "gita_icon.png",
    links: { playstore: "https://play.google.com/store/apps/details?id=com.practice.gita", github: "https://github.com/jemish-169/Bhagavad-Gita" }
  },
  {
    title: "Stocky - Inventory management POS",
    description: [
      "Developed a inventory management app using Kotlin, Jetpack Compose, and Supabase. Included modules like inventory tracking, sales with PDF invoices, transactions, and analytics.",
      "Implemented Hilt and Followed MVVM and Clean Architecture for scalability and clean code. Added smooth animations, dark/light themes, and multilingual support for better UX.",
      "Used Supabase RPC functions to handle concurrent transactions. Ensured real-time data consistency and smooth multi-user interactions."
    ],
    techStack: ["Android", "Kotlin", "Supabase", "Jetpack compose", "Coroutines", "Hilt", "MVVM", "Clean Architecture", "Animations", "Material UI"],
    image: "stocky_icon.png",
    links: { github: "https://github.com/jemish-169/Stocky-Inventory-Management-POS/" }
  },
  {
    title: "2048++ : puzzle game",
    description: [
      "Developed 2048++ game with advanced features, including undo and a Hammer tool to remove random tiles.",
      "Designed the game to function entirely offline, leveraging shared preferences to efficiently save and manage user data.",
      "Created visually creative themes to enhance the user experience."
    ],
    techStack: ["Android", "Kotlin", "XML", "MVP", "XML - NavGraph", "Material UI", "Shared preferences"],
    image: "2048_icon.png",
    links: { playstore: "https://play.google.com/store/apps/details?id=com.app.slidesum", github: "https://github.com/jemish-169/2048" }
  },
  {
    title: "Trello - Project Management App",
    description: [
      "Developed a Trello-like project management app in Kotlin with real-time collaboration features using Firebase and Firestore as the backend.",
      "Implemented user authentication, board/list/card management, and fine-grained role-based access controls for creators vs. team members.",
      "Followed modular architecture using Activities, Fragments, and Firebase integration; ensured responsive UI with Material Design and latest Android APIs."
    ],
    techStack: ["Android", "Kotlin", "XML", "Firebase", "Modular Architecture", "Coroutines", "Material Design"],
    image: "trello_icon.png",
    links: { github: "https://github.com/jemish-169/Trello-Project-Management-App" }
  },
];

export const minorProjects: Project[] = [
  {
    title: "Android-Launcher: Android Starter Project Generator",
    description: [
      "Built a web-based tool to generate Android starter projects with custom setup like Compose/XML, DI, Networking, Room, themes, and more. Users can pick tools and download ready-to-run ZIP files.",
      "Frontend is made using AI-powered builder and hosted on Netlify. Simple and clean form lets users configure their project easily.",
      "Backend is written in Python using Jinja2 templates to create Android project files. Deployed using Docker on AWS Lambda via ECR for fast and scalable performance."
    ],
    techStack: ["Web App", "Python", "Jinja2", "Docker", "AWS Lambda", "Netlify"],
    image: "/placeholder.svg",
    links: { github: "https://github.com/jemish-169/Android-Launcher", playstore: "https://android-launcher.netlify.app/" } // it is a web app, not an android app
  },
  {
    title: "Fitness91: Fitness Tracking App",
    description: [
      "Built a fitness tracking Android app using Jetpack Compose, and Supabase with modules for gym workouts, face exercises, and diet planning.",
      "Implemented dynamic dashboards, in-app theming, and color-coded progress indicators to visualize daily and overall completion stats.",
      "Used Hilt, MVVM and Clean Architecture for scalability, and integrated Supabase for authentication and real-time progress tracking."
    ],
    techStack: ["Android", "Kotlin", "Supabase", "Jetpack compose", "Coroutines", "Hilt", "MVVM", "Clean Architecture", "Animations", "Material UI"],
    image: "/placeholder.svg",
    links: { github: "https://github.com/jemish-169/Fitness91-App/" }
  },
  {
    title: "CricketScore: Live Cricket Score Tracking App",
    description: [
      "Built a real-time cricket score tracking app using Kotlin, Firebase, and Single Activity Architecture with modular fragments for smooth navigation.",
      "Implemented automatic run calculation, strike switching, and bowler management to streamline match progression and user input.",
      "Enabled live match updates and match state sharing across devices via Firebase, with polished UI/UX through fragment animations and Nav Graph."
    ],
    techStack: ["Android", "Kotlin", "XML", "Firebase Realtime", "NavGraph", "Material UI"],
    image: "/placeholder.svg",
    links: { github: "https://github.com/jemish-169/cricketscore" }
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
    links: { github: "https://github.com/jemish-169/Travenor-Destination-booking-app" }
  },
  {
    title: "BuzzTalk : A professional social media app",
    description: [
      "A Social Media app where users can post, comment, like, connect, follow, chat and tag each other in post (using LinkedIn SpyGlass Library).",
      "Followed MVVM Architecture through the application with Dagger Hilt for Dependency Injection.",
      "Implemented Real time Chat Functionality using Socket.io. Implemented REST APIs in Android using Retrofit."
    ],
    techStack: ["Android", "Kotlin", "XML", "MVVM", "Retrofit", "Dagger Hilt"],
    image: "/placeholder.svg",
    links: { github: "https://github.com/jemish-169/BuzzTalk/" }
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
    links: { github: "https://github.com/jemish-169/Mausam" }
  },
  {
    title: "HelpDesk : An It ticketing PowerApp",
    description: [
      "Built an application using Power Platform that enables users to create and manage tickets. Used SharePoint to store data.",
      "Implemented features, allowing users to edit and delete tickets and admins to edit, delete, assign and change ticket status.",
      "Developed automated email notifications flow to notify users and admin whenever a ticket is created or updated."
    ],
    techStack: ["Power Platform", "SharePoint", "Canvas app", "Power automate", "Connectors"],
    image: "/placeholder.svg",
    links: { github: "https://www.github.com/jemish-169/HelpDesk/" }
  },
  {
    title: "Brighter : A photo editing app",
    description: [
      "A photo editing app that allows users to edit photos using filters, frames, brightness and other 12+ tools.",
      "Implemented with animations with Lottie and JSON.",
      "Maintained clean architecture, Professional UI design. App saves the edited photo in local storage."
    ],
    techStack: ["Android", "Kotlin", "XML", "JSON Animation", "DS photo SDK"],
    image: "/placeholder.svg",
    links: { github: "https://github.com/jemish-169/Brighter" }
  },
  {
    title: "ChatAI: AI ChatBot",
    description: [
      "A secure webview based chat-bot to interact with Gemini AI by Google.",
      "FAQ and user guide to onboard user and guide for use of chatBot."
    ],
    techStack: ["Android", "Kotlin", "XML", "WebView"],
    image: "/placeholder.svg",
    links: { github: "https://github.com/jemish-169/Chat-AI" }
  }
];
