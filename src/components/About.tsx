
import { Code, Database, Globe, Smartphone, Rocket } from 'lucide-react';

const About = () => {
  const skills = [
    { 
      category: 'Mobile Development', 
      items: ['Android', 'Kotlin', 'Jetpack Compose', 'Java', 'XML', 'Coroutines', 'CMP', 'MVVM & MVI', 'Data & View binding', 'Clean Architecture', 'Material Design', ] 
    },
    { 
      category: 'Backend & Data Systems', 
      items: ['SQLite and storages', 'RPCs', 'Firebase', 'Supabase', 'Networking', 'REST & GraphQL APIs' ] 
    },
    { 
      category: 'Tools & Deployment', 
      items: ['Git and VCSs', 'Postman', 'Play console', 'Memory profiling', 'Benchmarks', 'Debugging tools'] 
    },
    { 
      category: 'Other', 
      items: ['C/C++', 'DS & Algo.', 'Sys. Design (basics)', 'GoLang (Learning)', 'AWS', 'MS Power Platform'] 
    },
  ];

  const WhatIDo = [
    {
      icon: <Smartphone className="w-10 h-10 text-android-green" />,
      title: 'Android Development',
      description: 'Building native Android applications using Kotlin, Jetpack Compose, and modern architectural patterns.'
    },
    {
      icon: <Code className="w-10 h-10 text-android-green" />,
      title: 'DSA Practice',
      description: 'Continuously improving problem-solving skills through daily practice of data structures and algorithms.'
    },
    {
      icon: <Database className="w-10 h-10 text-android-green" />,
      title: 'Backend Exploration',
      description: 'Expanding my skill set by exploring backend development with Go and API development.'
    },
    {
      icon: <Rocket className="w-10 h-10 text-android-green" />,
      title: 'Building Solutions',
      description: 'Creating tech projects from scratch that can solve real-world problems at scale.'
    }
  ];

  const codingProfiles = [
    {
      name: "Apps on Play Store",
      url: "https://play.google.com/store/apps/dev?id=7687986750641760892",
      icon: <Globe className="w-5 h-5" />
    },
    {
      name: "LeetCode",
      url: "https://leetcode.com/jemish_169/",
      icon: <Code className="w-5 h-5" />
    },
    {
      name: "GeeksForGeeks",
      url: "https://geeksforgeeks.org/user/jemish_169/",
      icon: <Code className="w-5 h-5" />
    },
    {
      name: "CodeChef",
      url: "https://www.codechef.com/users/jemish_1692",
      icon: <Code className="w-5 h-5" />
    },
    {
      name: "Codeforces",
      url: "https://codeforces.com/profile/jemish_169",
      icon: <Code className="w-5 h-5" />
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="section-padding">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
            About <span className="text-android-green">Me</span>
          </h2>
          <div className="w-24 h-1 bg-android-green mx-auto mb-10 rounded-full"></div>
          
          <div className="animate-on-scroll mb-12 text-gray-700">
            <p className="mb-4 text-lg">
              I am a passionate software developer who thrives on challenges, embraces learning from mistakes, and adapts quickly. My journey began with Android development fundamentals (Kotlin and XML) during my second year of Computer Engineering.
            </p>
            <p className="mb-4 text-lg">
              I've continuously expanded my skill set by reading tech blogs, watching tutorials, and most importantly, implementing what I learn through hands-on projects. With a strong foundation in data structures and algorithms, I have experience building and deploying applications that solve real-world problems.
            </p>
            <p className="text-lg font-medium">
              Currently, I'm focusing on expanding my knowledge in backend development with Golang, strengthening my DSA skills daily, and building scalable tech solutions from the ground up.
            </p>
          </div>
          
          <h3 className="text-2xl font-bold mb-8 text-center">What I'm Doing Right Now</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {WhatIDo.map((item, index) => (
              <div 
                key={index} 
                className="animate-on-scroll p-6 border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 bg-white"
              >
                <div className="mb-4">{item.icon}</div>
                <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
          
          <h3 className="text-2xl font-bold mb-6 text-center">My Skills</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 mb-16">
            {skills.map((skillGroup, index) => (
              <div 
                key={index} 
                className="animate-on-scroll border border-gray-100 rounded-lg p-5 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <h4 className="font-semibold text-xl mb-3 text-android-green">{skillGroup.category}</h4>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, idx) => (
                    <span 
                      key={idx} 
                      className="bg-android-green/5 text-android-dark px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <h3 className="text-2xl font-bold mb-6 text-center">Coding Profiles</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {codingProfiles.map((profile, index) => (
              <a 
                key={index}
                href={profile.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center px-4 py-3 bg-android-green/5 hover:bg-android-green/15 rounded-lg transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-full bg-android-green/10 flex items-center justify-center mr-3 group-hover:bg-android-green/20 transition-colors">
                  <span className="text-android-green">
                    {profile.icon}
                  </span>
                </div>
                <span className="font-medium">{profile.name}</span>
              </a>
              ))}
            </div>
          </div>
        </div>
    </section>
  );
};

export default About;
