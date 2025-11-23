
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
    skills: ["Android Development", "Kotlin", "Java", "XML", "Compose Multiplatform", "Room", "WorkManager", "Retrofit", "GraphQL", "POS systems", "Barcode scanner"],
    responsibilities: [
      "Working on a Compose Multiplatform POS enabling store owners to manage inventory via barcode scanning and view multi-store sales reports.",
      "Delivered a cross-platform project-management app with a custom Canvas signature capture (path smoothing & gesture support) to enable quick, secure task approvals.",
      "Implemented an offline-first delivery workflow using Room and WorkManager to queue transactions locally and sync reliably when the device reconnects.",
      "Developed ROA & ADJ modules and integrated Expinet gateway; used Crashlytics and targeted fixes to reduce crashes significantly.",
      "Implemented loyalty points feature in a food-delivery app, supporting multiple programs and efficient data handling via GraphQL."
    ]
  },
  {
    title: "Software Engineer L1",
    company: "Crest Infosystems PVT. LTD",
    duration: "Dec-2023 to June-2024",
    skills: ["Android Development", "Kotlin", "XML", "Jetpack Compose", "MVVM", "Clean Architecture", "Dagger & Hilt", "Room"],
    responsibilities: [
      "Improved a warehouse management app with barcode-scan enabled search and pagination, increasing operational efficiency.",
      "Applied Jetpack Compose, Coroutines and advanced architecture patterns to deliver scalable and maintainable features.",
      "Worked with WorkManager, AlarmManager, push notifications and Android storage APIs."
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
    skills: ["Android Development", "Kotlin", "MVVM", "Retrofit", "SQLite", "REST APIs"],
    responsibilities: [
      "Improved team-management Android app by updating dashboard, navigation and profile sections to boost usability.",
      "Implemented Excel-sheet upload for bulk work entry, saving ~6 minutes per use and reducing manual entry errors.",
      "Reduced loading time by ~2 seconds by caching Indian city names locally, removing repeated network requests."
    ]
  }
];
