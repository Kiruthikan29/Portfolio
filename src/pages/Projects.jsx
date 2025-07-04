import React from 'react';

const projects = [
  {
    title: "Personal Portfolio",
    description: "A responsive personal portfolio website.",
    tech: ["React", "CSS"],
    link: "https://github.com/Kiruthikan29/Portfolio.git"
  },
  {
    title: "Chat App",
    description: "Real-time chat application with Socket.IO",
    tech: ["React", "Node.js", "MongoDB"],
    link: "https://github.com/Kiruthikan29/Chat-App.git"
  }
];

const Projects = () => (
  <section className="pro1">
    <h2 className="pro2">Projects</h2>
    <div className="pro3">
      {projects.map((project, index) => (
        <div key={index} className="pro4">
          <h3 className="pro5">{project.title}</h3>
          <p>{project.description}</p>
          <p className="pro6">Tech: {project.tech.join(", ")}</p>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="pro7"
          >
            View on GitHub
          </a>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;