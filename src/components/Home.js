import React from "react";
import "../style/Home.css";
import logo from "../style/logo.png";
import multibook from "../components/multibook.png";

function Home() {
  return (
    <div className="container-fluid col-sm-10 col-md-10 col-lg-12 col-xl-12 " elevation={4}  style={{borderRadius:"0px",minHeight:"100vh"}}>
      <div className="gap">
        <div>
          <div className="Intro">
            <img
              src={logo}
              alt="Avatar"
              style={{ width: "300", height: "300", padding: "30px" }}
            />
            <p className="Data">
              "Under the Tree" is a story narrating initiative to relive
              childhood and Our lives by relating to stories by great writers of
              yesteryears.The objective is to rekindle the interest of reading
              and showcase the Indian authors work which gives rebirth to the
              tradition, culture,and way of life through experiential
              reading.Spiritual series that is rich in Indian ethos along with
              Management aspects increase positivity which is much needed
              always.
            </p>
            <p className="Data">
              In this fast paced,people are want of time to read books.Hence
              this initiative to make people listen to the essence of books
              through audio mode which they would have aspired to read or have
              read in their early days.
            </p>
            <p className="Data">
              When the digital medium is bombarding all of us with negative
              thoughts through non appropriate content, this is an initiative to
              kindle Optimism and showcase the richness of universal culture,
              tradition and good reads from the global diaspora.
            </p>
            <p className="Data">
              An idea of Mrs Ramya Vasudevan to share the audio stories amongst
              the friends and relatives in a small way has grown to be a big
              tree with 40000+ listeners.
            </p>
            <p className="Data">
              Listeners for "Under the Tree" are across the globe through
              WhatsApp, Telegram, Podcast , FB, YouTube etc., Children to Senior
              citizens are vivid listener's with diversifies range from CEOs,
              industrialists, senior defence and Police personal, academicians,
              HR personal, Film fraternity etc., This initiative reaches 5000
              plus individuals through Digital Medium, have crossed 48000
              streams in podcast.
            </p>
            <p className="Data">
              Children of Cerebral palsy have found to respond well to the
              stories of Mrs.Ramya. Many Senior Citizens go Comfortably to sleep
              after listening to the Stories. The response is overwhelming and
              we want to spread the same to a wider audience for the benefit of
              much more in the society.
            </p>
            <p className="Data">
              We would like to render this service to the society by taking this
              initiative to schools, colleges and corporate houses.
            </p>
            <p className="Data">
              People can join the "Under the Tree" Whatsapp group/telegram by
              sending a message to the mobile number at 9789062915.
            </p>
            {/* <img
              src={multibook}
              alt="Avatar"
              style={{
                width: "200px",
                height: "300px",
                objectFit: "cover",
                float: "right",
                padding: "10px",
                paddingRight: "10px",
              }}
            /> */}
            <p
              style={{
                textAlign: "right",
                marginRight: "0",
                fontFamily: 'Oleo Script Swash Caps',
                fontSize:"30px"
              }}
            >
              Listen and Share Stories <img
              src={multibook}
              alt="Avatar"
              style={{
                width: "200px",
                height: "300px",
                objectFit: "cover",
                float: "right",
                padding: "10px",
                paddingRight: "40px",
              }}
            />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
