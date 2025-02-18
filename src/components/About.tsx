import React from "react"
import "./About.css"
import profilephoto from "../assets/profilephoto.jpg"
import otherphoto from "../assets/otherphoto.jpg"

const About: React.FC = () => {
  return (
    <section id="about" className="about">
      <div className="about-content">
        <div className="about-image">
          <img src={profilephoto} alt="Your Name" />
          <div className="alternate-image">
            <img src={otherphoto} alt="Your Name" />
          </div>
        </div>
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            Hi there! My name is Eden, and I'm an undergraduate student at MIT pursuing a B.S. in electrical engineering and computer science. I love to play with robots and get others excited about engineering!
          </p>
          <p>
            I made this website in order to document and showcase my work, and it's been a fun coding project all on its own! I used React.js to make this website, with two main goals: create a website that (1) has an organized, concise codebase and (2) is easy to update and add new projects/features. I accomplished this by having all of my project pages be written in Markdown, which was definitely an interesting challenge to implement. Feel free to check out the code on GitHub to see more!
          </p>
          <p>
            Please feel free to reach out at ehen@mit.edu! I'd love to talk more about anything STEM-related. :)
          </p>
        </div>
      </div>
    </section>
  )
}

export default About