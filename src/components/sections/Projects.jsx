import user_info from "../../data/user_info.js";
import Project from "../Project.jsx";

function Projects() {
  return (
    <section id="projects" className="py-4 px-6 lg:px-16">
      {/* Section Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-100">
          My Projects
        </h2>
        <p className="mt-3 text-zinc-600 dark:text-zinc-400 text-base md:text-lg">
          A selection of projects I’ve built using modern web technologies.
        </p>
      </div>

      {/* Project Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
        {user_info.projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            github={project.github}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
