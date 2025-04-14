
import { GraduationCap, BookOpen } from 'lucide-react';

interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  grade: string;
  courses: string[];
}

const Education = () => {
  const educationHistory: EducationItem[] = [
    {
      institution: "A. D. Patel Institute of Technology, New Vallabh Vidyanagar",
      degree: "Bachelor of Engineering - Computer Engineering",
      period: "Jul 2020 - May 2024",
      grade: "8.33",
      courses: [
        "Data Structures and Algorithms",
        "Operating Systems",
        "Computer Networks",
        "Object Oriented Programming",
        "Artificial Intelligence and Machine learning",
        "Database Management Systems",
        "Python and introduction of Data Analytics",
        "Computer Networking",
        "Android development"
      ]
    },
    {
      institution: "Shree Vidhya Arambh School, Rajkot",
      degree: "Higher Secondary School",
      period: "Jul 2018 - May 2020",
      grade: "88.35",
      courses: ["Physics", "Chemistry", "Maths"]
    },
    {
      institution: "Shree Vidhya Arambh School, Rajkot",
      degree: "Secondary School",
      period: "Jul 2016 - May 2018",
      grade: "98.20",
      courses: []
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="section-padding">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
          <span className="text-android-green">Education</span>
        </h2>
        <div className="w-24 h-1 bg-android-green mx-auto mb-12 rounded-full"></div>
        
        <div className="max-w-3xl mx-auto">
          {educationHistory.map((edu, index) => (
            <div 
              key={index} 
              className="animate-on-scroll mb-8 bg-white rounded-xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-android-green/10 p-3 rounded-full">
                  {index === 0 ? 
                    <GraduationCap className="w-6 h-6 text-android-green" /> : 
                    <BookOpen className="w-6 h-6 text-android-green" />
                  }
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-android-dark">{edu.institution}</h3>
                    <span className="bg-android-green/10 text-android-dark px-3 py-1 rounded-full text-sm">
                      Grade: {edu.grade}
                    </span>
                  </div>
                  
                  <div className="text-gray-700 mb-1">{edu.degree}</div>
                  <div className="text-gray-600 text-sm mb-3">{edu.period}</div>
                  
                  {edu.courses.length > 0 && (
                    <div>
                      <h4 className="font-semibold mb-2">Coursework:</h4>
                      <div className="flex flex-wrap gap-2">
                        {edu.courses.map((course, idx) => (
                          <span 
                            key={idx} 
                            className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
