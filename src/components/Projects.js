import React from "react";
import "../styles/Projects.css";
import PhotoSlider from "./PhotoSlider";
import website from "../images/website.png";
import website2 from "../images/website2.png";
import website3 from "../images/website3.png";
import website4 from "../images/website4.png";
import website5 from "../images/website5.png";

function Project() {
  const images = [website, website2, website3, website4, website5];
  return (
    <div className="header-image">
      <div className="screen">
        <div className="move-left">
          <h1>Projects</h1>
          <p>More coming soon...</p>
        </div>
        <h2>eCommerce Website</h2>
        <p>
          One of my notable projects is an eCommerce website that I designed and
          developed. This platform includes a comprehensive set of features such
          as product listings, checkout functionality, and login capabilities
          for both users and admins. Additionally, the website allows for
          seamless item management, giving admins the ability to alter products
          directly via the site.
          <p>
            This project was a testament to my technical skills and
            perseverance, requiring countless hours of research and hands-on
            coding. Through this experience, I deepened my understanding of
            full-stack development and honed my ability to deliver functional,
            user-friendly solutions.
          </p>
        </p>
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            window.location.href =
              "https://github.com/moragrac/bs-x-gm-website";
          }}
        >
          {" "}
          Github Code
        </button>
        <PhotoSlider images={images} />
      </div>
    </div>
  );
}

export default Project;
