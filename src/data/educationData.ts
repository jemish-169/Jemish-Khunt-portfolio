
export interface Education {
  institution: string;
  degree: string;
  duration: string;
  grade: string;
  coursework: string[];
}

export const educations: Education[] = [
  {
    institution: "A. D. Patel Institute of Technology, New Vallabh Vidyanagar",
    degree: "Bachelor of Engineering - Computer Engineering",
    duration: "Jul 2020 - May 2024",
    grade: "8.33",
    coursework: [
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
    duration: "Jul 2018 - May 2020",
    grade: "88.35",
    coursework: [
      "Physics",
      "Chemistry",
      "Maths"
    ]
  },
  {
    institution: "Shree Vidhya Arambh School, Rajkot",
    degree: "Secondary School",
    duration: "Jul 2016 - May 2018",
    grade: "98.20",
    coursework: []
  }
];
