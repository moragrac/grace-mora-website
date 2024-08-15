import React from "react";
import "../styles/Home.css";
import photo from "../images/me.jpg";
import ReactRoundedImage from "react-rounded-image";

function Home() {
  return (
    <section id="home">
      <div className="page-image">
        <ReactRoundedImage
          image={photo}
          roundedColor="#321124"
          imageWidth="300"
          imageHeight="300"
          roundedSize="26"
          borderRadius="140"
        />
        <h1>HI, I'M GRACE</h1>
        <h2>Aspiring Project Manager.</h2>
      </div>
    </section>
  );
}

export default Home;
