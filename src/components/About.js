import React from "react";
import "../styles/About.css";

function About() {
  return (
    <div className="split-screen">
      <div className="left-pane">
        <h1>About Me</h1>
      </div>
      <div className="right-pane">
        <h2>
          My name is Grace Mora, and I'm a 24-year-old from Michigan. I
          graduated from Michigan State University in 2023 with a Bachelor's
          Degree in Computer Science, alongside a cognate in Psychology. In my
          free time, I enjoy camping, practicing yoga, and spending quality time
          with my cat, Noodle.
        </h2>
        <h2>
          I designed and developed this website from the ground up, driven by my
          passion for creativity and technology. As I look to the future, I’m
          excited to pursue a career in project management, where I can combine
          my love for learning with my dedication to hard work. I hope you enjoy
          exploring my page!
        </h2>
      </div>
    </div>
  );
}

export default About;
