
import { useState } from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { minorProjects, Project } from '@/data/projectsData';

const MinorProjects = () => {
  const [currentProject, setCurrentProject] = useState<Project | null>(null);
  const [showAll, setShowAll] = useState(false);
  
  const visibleProjects = showAll ? minorProjects : minorProjects.slice(0, 3);

  return (
    <section id="minor-projects" className="py-20 bg-white">
      <div className="section-padding">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
          More <span className="text-android-green">Projects</span>
        </h2>
        <div className="w-24 h-1 bg-android-green mx-auto mb-6 rounded-full"></div>
        <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
          Additional projects I've built to explore various technologies and domains in mobile development.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {visibleProjects.map((project, index) => (
            <div
              key={index}
              className="animate-on-scroll bg-gray-50 rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md hover:border-android-green/30 transition-all duration-300"
            >
              <div className="p-5">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-android-dark">{project.title}</h3>
                  <div className="flex space-x-2">
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-android-green transition-colors"
                        aria-label="GitHub"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                    {project.links.playstore && (
                      <a
                        href={project.links.playstore}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-android-green transition-colors"
                        aria-label="Play Store"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 my-3">
                  {project.techStack.slice(0, 3).map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-android-green/10 text-android-dark px-2 py-1 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 3 && (
                    <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">
                      +{project.techStack.length - 3}
                    </span>
                  )}
                </div>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {project.description[0]}
                </p>
                
                <button
                  onClick={() => setCurrentProject(project)}
                  className="text-sm flex items-center text-android-green font-medium hover:underline"
                >
                  View Details
                  <ArrowRight className="ml-1 w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {minorProjects.length > 3 && (
          <div className="flex justify-center mt-10">
            <Button
              onClick={() => setShowAll(!showAll)}
              variant="outline"
              className="border-android-green text-android-green hover:bg-android-green/5"
            >
              {showAll ? "Show Less" : `View All (${minorProjects.length})`}
            </Button>
          </div>
        )}
        
        {currentProject && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-android-dark">{currentProject.title}</h3>
                  <button 
                    onClick={() => setCurrentProject(null)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    &times;
                  </button>
                </div>
                
                <div className="mb-5 flex flex-wrap gap-2">
                  {currentProject.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-android-green/10 text-android-dark px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <h4 className="font-semibold text-lg mb-2">Overview:</h4>
                <ul className="list-disc pl-5 mb-5">
                  {currentProject.description.map((desc, idx) => (
                    <li key={idx} className="text-gray-700 mb-2">{desc}</li>
                  ))}
                </ul>
                
                <div className="flex space-x-4">
                  {currentProject.links.github && (
                    <a
                      href={currentProject.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
                    >
                      <Github className="w-5 h-5 mr-2" />
                      View Project
                    </a>
                  )}
                  {currentProject.links.playstore && (
                    <a
                      href={currentProject.links.playstore}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center bg-android-green text-white px-4 py-2 rounded-lg hover:bg-android-green/90 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5 mr-2" />
                      View on Play Store
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default MinorProjects;
