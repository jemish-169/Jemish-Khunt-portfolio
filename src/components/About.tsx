
import { Code, Database, Smartphone, Rocket } from 'lucide-react';

const About = () => {
  const skills = [
    { 
      category: 'Android', 
      items: ['Kotlin', 'Jetpack Compose', 'XML', 'MVVM', 'MVP', 'Clean Architecture', 'Room', 'Retrofit', 'Coroutines', 'Dagger-Hilt'] 
    },
    { 
      category: 'Web', 
      items: ['React.js', 'HTML5', 'CSS3', 'Power Platform'] 
    },
    { 
      category: 'Backend', 
      items: ['Exploring Go', 'REST APIs', 'GraphQL', 'Supabase'] 
    },
    { 
      category: 'Other', 
      items: ['Git', 'Data Structures & Algorithms', 'Clean Architecture', 'Material Design'] 
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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
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
                      className="bg-android-green/10 text-android-dark px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
