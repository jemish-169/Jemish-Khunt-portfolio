import { ExternalLink, Github } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { featuredProjects, Project } from '@/data/projectsData';

const Projects = () => {
  const [currentProject, setCurrentProject] = useState<Project | null>(null);
  const [showAll, setShowAll] = useState(false);
  
  const visibleProjects = showAll ? featuredProjects : featuredProjects.slice(0, 6);

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="section-padding">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
          Featured <span className="text-android-green">Projects</span>
        </h2>
        <div className="w-24 h-1 bg-android-green mx-auto mb-10 rounded-full"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleProjects.map((project, index) => (
            <div
              key={index}
              className="animate-on-scroll project-card bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg hover:border-android-green hover:-translate-y-1 transition-all duration-300"
            >
              <div className="h-48 bg-android-green/5 flex items-center justify-center">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="h-16 w-auto object-contain rounded-[10px]"
                />
              </div>
              
              <div className="p-5">
                <h3 className="text-xl font-bold mb-2 text-android-dark">{project.title}</h3>
                <p className="text-gray-600 mb-3 line-clamp-2">{project.description[0]}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.slice(0, 3).map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-android-green/10 text-android-dark px-3 py-1 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 3 && (
                    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs">
                      +{project.techStack.length - 3}
                    </span>
                  )}
                </div>
                
                <div className="flex justify-between items-center">
                  <button
                    onClick={() => setCurrentProject(project)}
                    className="text-android-green font-medium hover:underline"
                  >
                    View Details
                  </button>
                  
                  <div className="flex space-x-3">
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 hover:text-android-green transition-colors"
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
                        className="text-gray-700 hover:text-android-green transition-colors"
                        aria-label="Play Store"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {featuredProjects.length > 6 && (
          <div className="flex justify-center mt-10">
            <Button
              onClick={() => setShowAll(!showAll)}
              variant="outline"
              className="border-android-green text-android-green hover:bg-android-green/5"
            >
              {showAll ? "Show Less" : `View All (${featuredProjects.length})`}
            </Button>
          </div>
        )}
        
        {/* Project Modal */}
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
                
                <h4 className="font-semibold text-lg mb-2">Key Features:</h4>
                <ul className="list-disc pl-5 mb-5">
                  {currentProject.description.map((feature, idx) => (
                    <li key={idx} className="text-gray-700 mb-1">{feature}</li>
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
                      View Code
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

export default Projects;
