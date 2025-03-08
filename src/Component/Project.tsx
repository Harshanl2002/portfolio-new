import React from "react";
import ccmc from "../assets/ccmc.png";
import blog from "../assets/Logo-circle.png";
import folder from "../assets/folder.jpg";
import tasks from "../assets/tasks.jpg";
import weather from "../assets/weather.webp"
import tictactoe from "../assets/tictactoe.jpeg"

const projects = [
  {
    title: "TNStartUp Municipality Web App",
    description:
      "Developed modules for coordination and task management using React, Node.js, and MySQL.",
    image: ccmc,
    isVisitable: false,
  },
  {
    title: "Blog Application (MERN Stack)",
    description:
      "Built a full-stack blog platform with authentication, optimized for scalability and performance.",
    image: blog,
    link: "https://github.com/Harshanl2002/BlogApp",
    isVisitable: true,
  },
  {
    title: "File Organizer App",
    description:
      "Developed a desktop application using Node.js, Electron.js, and React to organize files efficiently.",
    image: folder,
    link: "https://github.com/Harshanl2002/fileOrganizer",
    isVisitable: true,
  },
  {
    title: "To-Do App (MEAN Stack)",
    description: "A simple to-do app with CRUD operations for tasks.",
    image: tasks,
    link: "https://github.com/Harshanl2002/TODO-angular",
    isVisitable: true,
  },
  {
    title: "Weather App",
    description:
      "A weather forecasting app using React and OpenWeatherMap API.",
    image: weather,
    link: "https://github.com/Harshanl2002/weatherapps",
    isVisitable: true,
  },
  {
    title: "Tic-Tac-Toe Game",
    description: "A simple Tic-Tac-Toe game built with Angular.",
    image: tictactoe,
    link: "https://github.com/Harshanl2002/tictactoe",
    isVisitable: true,
  },
];

const Projects: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center p-6 w-[90vw] mx-auto md:w-4xl pb-[10vh]" id={'project'}>
      <h2 className="text-4xl font-bold text-gray-800 my-6">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-6xl mt-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#ffffff96] p-3 shadow-lg flex flex-col justify-between items-center rounded-2xl overflow-hidden hover:scale-105 transition-transform"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-48 h-48  object-contain"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              {project.isVisitable ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 font-semibold hover:underline"
                >
                  View Project →
                </a>
              ) : (
                <p className="text-grey-100 font-semibold">View Project →</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
