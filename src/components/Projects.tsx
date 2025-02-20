import React from "react"
import "./Projects.css"
import { Link } from 'react-router-dom';

// Import cover images for projects!
import beaverworks from "/pages/BeaverWorks/beaverworks.jpg";
import hackerfab from "/pages/HackerFab/hackerfab.png";
import chromolcd from "/pages/HackerFab/chromolcd.png";
import flowerautomata from "/pages/Automata/flowerautomata.jpg";
import firstrobotics from "/pages/FIRSTRobotics/firstrobotics.png";
import garcia from "/pages/Garcia/garcia.jpg";
import oldwebsite from "/pages/OldWebsite/oldwebsite.png";
import bs2 from "/pages/BlueStamp2/bluestamp2.jpg";
import bs1 from "/pages/BlueStamp1/bluestamp1.jpg";

const Projects: React.FC = () => {
    // List of dictionaries where each dictionary represents a project.
    // To add a new project, add another dictionary to the list with the
    // proper key-value pairs.
  const projects = [
    {
      title: "MIT Beaver Works",
      description:
        "Working as a teaching assistant at MIT Beaver Works for the Autonomous RACECAR course!",
      link: "/beaverworks", // Be careful not to include the .md!
      directoryPrefix: "/BeaverWorks",
        imageURL: beaverworks, // Name of the heading image
    },
    {
      title: "Hacker Fab",
      description:
        "Co-founding an MIT chapter of Hacker Fab to create a DIY nanofabrication machine.",
      link: "/hackerfab", // Be careful not to include the .md!
      directoryPrefix: "/HackerFab",
        imageURL: hackerfab, // Name of the heading image
    },
    {
      title: "ChromoLCD",
      description:
        "Creating a device for reprogramming photochromatic surfaces at the MIT Human Computer Interaction Engineering Lab!",
      link: "/chromolcd", // Be careful not to include the .md!
      directoryPrefix: "/ChromoLCD",
        imageURL: chromolcd, // Name of the heading image
    },
    {
      title: "Flower Automata",
      description:
        "Building a flower automata that simulates the opening and closing of petals.",
      link: "/automata", // Be careful not to include the .md!
      directoryPrefix: "/Automata",
        imageURL: flowerautomata, // Name of the heading image
    },
    {
      title: "NYC FIRST Robotics Internship",
      description:
        "Interning at the NYC FIRST STEM Center at Cornell Tech!",
      link: "/firstrobotics", // Be careful not to include the .md!
      directoryPrefix: "/FIRSTRobotics",
        imageURL: firstrobotics, // Name of the heading image
    },
    {
      title: "Garcia Summer Scholars",
      description:
        "Working at Stony Brook University on an integrated virtual reality, learning from demonstration pipeline.",
      link: "/garcia", // Be careful not to include the .md!
      directoryPrefix: "/Garcia",
      imageURL: garcia,
    },
    {
      title: "Old Website",
      description:
        "My old website, coded from scratch in JavaScript, CSS, and HTML.",
      link: "/oldwebsite", // Be careful not to include the .md!
      directoryPrefix: "/OldWebsite",
      imageURL: oldwebsite,
    },
    {
      title: "Light-Following, Line-Tracking Robot Car",
      description:
        "A BlueStamp Engineering project.",
      link: "/bluestamp2", // Be careful not to include the .md!
      directoryPrefix: "/BlueStamp2",
      imageURL: bs2,
    },
    {
      title: "Gesture-Controlled Robot Car",
      description:
        "A BlueStamp engineering project.",
      link: "/bluestamp1", // Be careful not to include the .md!
      directoryPrefix: "/BlueStamp1",
      imageURL: bs1,
    },
  ]

  return (
    <section id="projects" className="projects">
      {/* <ReactMarkdown
        children={markdownText}
      /> */}
      <div className="projects-content">
        <h2>My Projects</h2>
        <div className="project-grid">
          {projects.map((project, index) => (
            <Link to={project.directoryPrefix + project.link}> {/* Link to the correct project folder and markdown file! */}
            <div key={index} className="project-card">
              <img src={project.imageURL} alt={project.title} />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects