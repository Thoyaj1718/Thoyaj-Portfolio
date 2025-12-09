import React from "react";
import Kickass from "../assets/Kickass.png";
import Portfolio from "../assets/Portfolio.png";
import Todo from "../assets/Todo.png";
import Quiz from "../assets/Quiz-tutorial.png"
import Shop from "../assets/ShopX.png"
import bird from "../assets/Flappy-bird.png"

const projects = [
  {
    id: 1,
    name: "High-Energy-Action-Films",
    stack: "Frontend Development",
    image: Kickass,
    live: "https://thoyaj1718.github.io/High-Energy-Action-Films/",
    code: "",
  },
  {
    id: 2,
    name: "Thoyaj-Portfolio",
    stack: "Frontend Development",
    image: Portfolio,
    live: "https://github.com/thoyaj1718",
    code: "",
  },
  {
    id: 3,
    name: "Quiz-Tutorial",
    stack: "Frontend Development",
    image: Quiz,
    live: "https://thoyaj-quiz-tutorials.netlify.app/",
    code: "",
  },
  {
    id: 4,
    name: "TODO APP",
    stack: "Web Development",
    image: Todo,
    live: "https://to-do-app-ef897.web.app/",
    code: "",
  },
  {
    id: 5,
    name: "ShopX",
    stack: "Web Development",
    image: Shop,
    live: "https://shopxbythoyaj.netlify.app/",
    code: "",
  },
  {
    id: 6,
    name: "Flappy-Bird",
    stack: "Web Game",
    image: bird,
    live: "https://flappybirdbythoyaj.netlify.app/",
    code: "https://github.com/Thoyaj1718/Flappy-Bird",
  },
];

const Projects = () => {
  return (
    <div className="bg-black text-white py-20" id="project">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-gray-800 p-6 rounded-lg hover:shadow-lg 
            transform transition-transform duration-300 hover:scale-105">
              <img src={project.image} alt={project.name} className="rounded-lg mb-4 
              w-full h-48 object-cover" />
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-400 mb-4">{project.stack}</p>
              <a href={project.live} className="inline-block bg-gradient-to-r 
              from-green-400 to-blue-500 text-white px-4 py-2 rounded-full" target="_blank" 
              rel="noopener noreferrer">Visit</a>
              
              <a href={project.code} className="inline-block bg-gradient-to-r 
              from-green-400 to-blue-500 text-white px-4 py-2 rounded-full" target="_blank" 
              rel="noopener noreferrer">code</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
