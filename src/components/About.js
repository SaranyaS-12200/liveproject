import React from "react";
import "../style/About.css";
import  Image from "./Image.png"

function About() {
  return (
  <div className="container-fluid col-md-8 ">
    <div className="pagelook">
    <div className="bg">
      <div className="title">
        <img src = {Image} alt="Avatar"  style={{width:"300", height:"300",padding:"30px"}}  />
        <div className="gap">
        <h1 className="heading">RAMYA VASUDEVAN</h1>
        <h2 className="miniheading">CEO-iTransz Academy & Foundation</h2>
        </div>
      </div>
      <div className="pagelook1">
      <div className="pagelook">
        <p className="Alignlook">
          Motivating, enthusiastic leaner driven to inspire students to pursue
          academic and personal excellence.
        </p>
        <p className="Alignlook">
          Consistently strive to create a challenging and engaging learning
          environment in which students become life long scholors and learners.
        </p>
        <p className="Alignlook">
          A Passionate Story teller & Serial Entrepreneur.
        </p>
        <p className="Alignlook">
          Her experience ranges in being consultant to educational institutions,
          start-egize BTL and ATL activities for corporates and has mentored and
          continuing to do so to hundreds of students.
        </p>
        <p className="Alignlook">
          Her passion is in corporate Social responsibility and manages the
          activities of various temples in INDIA.
        </p>
      </div>
      <div className="pagelook">
        <h1 className="subheading">Other Experiences</h1>
        <p className="Alignlook">
          Events @ Corporate Houses and Business Establishment's:
        </p>
        <p className="Alignlook">
          -Promotions, product launches, conferences, workshops,concerts.In
          house promotions.
        </p>
        <p className="Alignlook">
          Conducted workshops on short films making,documentary,ad
          creation,Media Presentation.
        </p>
        <p className="Alignlook">
          Have Narrated 1000 + Stories.700 + stories placed in all Govt
          Libraries in Chennai.
        </p>
        <p className="Alignlook">Under the Tree Podcast has 48000+ listeners</p>
      </div>
      </div>
    </div>
    </div>
    </div>
  );
}

export default About;
