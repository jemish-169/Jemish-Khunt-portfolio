
export interface Experience {
  title: string;
  company: string;
  duration: string;
  skills: string[];
  responsibilities: string[];
}

export const experiences: Experience[] = [
  {
    title: "Software Engineer L2",
    company: "Crest Infosystems PVT. LTD",
    duration: "June-2024 to present",
    skills: ["Android Development", "Kotlin", "Java", "XML", "Compose Multiplatform", "Room database", "SOAP", "Retrofit", "GraphQL", "Pagination", "POS systems", "Barcode scanner"],
    responsibilities: [
      "Built a cross-platform project management app using Compose Multiplatform, with a custom Canvas-based signature capture library for task authorization.",
      "Implemented an offline-first mechanism to save and complete deliveries locally, used WorkManager to sync data automatically when the network is available.",
      "Developed ROA & ADJ module, integrated Expinet gateway, and reduced app crashes by 60% using Crashlytics and optimizing code.",
      "Implemented loyalty points feature in a food delivery app, enabling users to select from multiple programs for discounts, leveraging GraphQL for efficient data handling."
    ]
  },
  {
    title: "Software Engineer L1",
    company: "Crest Infosystems PVT. LTD",
    duration: "Dec-2023 to June-2024",
    skills: ["Android Development", "Kotlin", "XML", "Jetpack compose", "MVVM", "MVP", "Clean architecture", "Advanced design patterns", "Dagger & Hilt", "Room database"],
    responsibilities: [
      "Enhanced a warehouse management apps by implementing barcode scan-enabled pagination and search functionalities, improved operational efficiency.",
      "Mastered advanced Android technologies including Jetpack Compose, Coroutines, architectural patterns and Dagger-Hilt.",
      "Worked with Work manager, Alarm scheduler, Push notifications and storage APIs in Android."
    ]
  },
  {
    title: "Web Development Intern",
    company: "Tatvasoft",
    duration: "May-2023 to Jun-2023",
    skills: ["Web Development", "React.JS", "HTML5", "CSS3", "REST APIs"],
    responsibilities: [
      "Developed an e-commerce bookstore website that features registration, login, book-list, global book search, and book-cart functionalities using ReactJS.",
      "Used Axios to communicate with the Backend APIs.",
      "Applied React Hooks such as useEffect, useState, useContext, and React libraries: Material UI, toastify, formik for creating the frontend."
    ]
  },
  {
    title: "Android Development Intern",
    company: "Infinity Brains",
    duration: "May-2022 to Aug-2022",
    skills: ["Android Development", "Kotlin", "XML", "Model-view-viewmodel (MVVM)", "Retrofit", "REST APIs"],
    responsibilities: [
      "Worked on the Dashboard, Navbar and different Sections of the application like Monitoring team Section and Profile editing Section of the App.",
      "Built feature for Uploading Excel-sheet of Work details, It saves estimated 6 Minutes of manual form filling.",
      "Worked with the team on the design, development and Integration of API.",
      "Improved user experience by optimizing existing code and fixing navigation and on-boarding bugs.",
      "Worked on Data Verification, API Integration, Designing and Creating New Components Using Retrofit, XML and MVVM."
    ]
  }
];
