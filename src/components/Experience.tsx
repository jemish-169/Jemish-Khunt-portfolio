import { Briefcase } from 'lucide-react';
import {experiences} from '@/data/experienceData';

const Experience = () => {

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
                    {exp.duration}
                  </span>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Skills:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, idx) => (
                      <span 
                        key={idx} 
                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs"
                      >
                        {skill}
                      </span>
                    ))}
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
