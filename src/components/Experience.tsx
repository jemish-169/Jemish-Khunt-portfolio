
import { Briefcase } from 'lucide-react';

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  skills: string[];
  responsibilities: string[];
}

const Experience = () => {
  const experiences: ExperienceItem[] = [
    {
      title: "Software Engineer L2",
      company: "Crest Infosystems PVT. LTD",
      period: "June-2024 to present",
      skills: ["Android Development", "Kotlin", "Java", "XML", "Compose Multiplatform", "Room database", "SOAP", "Retrofit", "GraphQL", "Pagination", "POS systems", "Barcode scanner"],
      responsibilities: [
        "Built a cross-platform project management app using Compose Multiplatform, with a custom Canvas-based signature capture library for task authorization.",
        "Implemented an offline-first mechanism to save and complete deliveries locally, used WorkManager to sync data automatically when the network is available.",
        "Developed and integrated ROA & ADJ modules and Expinet payment gateway in a delivery app, streamlining return on adjustment processes.",
        "Implemented loyalty points feature in a food delivery app, enabling users to select from multiple programs for discounts, leveraging GraphQL for efficient data handling."
      ]
    },
    {
      title: "Software Engineer L1",
      company: "Crest Infosystems PVT. LTD",
      period: "Dec-2023 to June-2024",
      skills: ["Android Development", "Kotlin", "XML", "Jetpack compose", "MVVM", "MVP", "Clean architecture", "Advanced design patterns", "Dagger & Hilt", "Room database"],
      responsibilities: [
        "Enhanced a warehouse management app by implementing barcode scan-enabled pagination and search functionalities, improving operational efficiency.",
        "Mastered advanced Android technologies including Jetpack Compose, Coroutines, architectural patterns and Dagger-Hilt.",
        "Worked with Work manager, Alarm scheduler, Push notifications and storage APIs in Android."
      ]
    },
    {
      title: "Web Development Intern",
      company: "Tatvasoft",
      period: "May-2023 to Jun-2023",
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
      period: "May-2022 to Aug-2022",
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

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="section-padding">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
          Work <span className="text-android-green">Experience</span>
        </h2>
        <div className="w-24 h-1 bg-android-green mx-auto mb-12 rounded-full"></div>
        
        <div className="max-w-3xl mx-auto relative">
          <div className="timeline-line"></div>
          
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="slide-animate mb-12 pl-8 relative"
            >
              <div className="timeline-dot"></div>
              <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex flex-wrap justify-between items-start mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-android-dark">{exp.title}</h3>
                    <div className="flex items-center text-gray-600 mb-2">
                      <Briefcase className="w-4 h-4 mr-1" />
                      <span>{exp.company}</span>
                    </div>
                  </div>
                  <span className="bg-android-green/10 text-android-dark px-3 py-1 rounded-full text-sm">
                    {exp.period}
                  </span>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Skills:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.slice(0, 5).map((skill, idx) => (
                      <span 
                        key={idx} 
                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                    {exp.skills.length > 5 && (
                      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">
                        +{exp.skills.length - 5}
                      </span>
                    )}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Key Responsibilities:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="text-gray-700 text-sm">{resp}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
