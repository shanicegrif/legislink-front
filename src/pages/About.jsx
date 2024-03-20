import React from "react";
import "./About.css"; 

const About = () => {
  return (
    <div className="About">
      <div className="description">
        Welcome, this is our YouTube clone project <strong>LEGISLink!</strong>.
        This app is created by <strong>Genesis Lara</strong>,{" "}
        <strong>Shanice Griffin</strong>, <strong>Sung Yi</strong>, and{" "}
        <strong>Tonesha Rose</strong>. 
      </div>
      <div className="cards">
        <div className="gl-card card"> 
          <h2>Genesis Lara</h2>
          <p>
            Growing up in the Bronx, I was never educated on who my current
            representatives and council people are. I did not have the
            privilege to be in the spaces that would allow me to make an
            informed decision on who to vote for. I hope my contributions to
            this application will bridge this gap especially in other
            underserved communities in New York.
          </p>
          <a href="https://github.com/gen329">GitHub</a>
        </div>
      </div>

      <div className="sc-card card"> 
        <h2>Shanice Griffin</h2>
        <p>Placeholder</p>
        <a href="https://github.com/shanicegrif">GitHub</a>
      </div>

      <div className="sy-card card"> 
        <h2>Sung Yi</h2>
        <p>Placeholder. </p> 
        <a href="https://github.com/dreamseekerfromn">GitHub</a>
      </div>


      <div className="tr-card card"> 
        <h2>Tonesha Rose</h2>
        <p>Placeholder. </p> 
        <a href="https://github.com/tonesharose31">GitHub</a>
      </div>
    </div>
  );
};

export default About;
