import React from "react";
import profilePicture from "../../images/ProfilePicture.jpg";

const About: React.FC = () => {
  return (
    <section id="about">
      <div className="row profilePictureBody">
        <img className="profilePicture" src={profilePicture} alt="A sexy pic of Calin Biberea" />
      </div>
      <div className="row">
        <div className="columns aboutTextBody">
          <h2>About Me (In Short)</h2>

          <p>
            I&apos;m currently a student at Imperial College London. I&apos;m currently interested
            in machine learning, particularly how AI can be used to forecast bottlenecks and medical
            imaging (very different areas, but interesting nontheless). In my free time I love to
            discover new games and analyse their game mechanics (and exploits, hehe) while I try my
            best to reach 100% completition in them.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="six columns aboutTextBody">
          <div className="row">
            <div className="columns contactDetails">
              <h2>Contact Details</h2>
              <p className="address">
                <span>Calin Biberea</span>
                <br />
                <span>
                  College Court,
                  <br />
                  W6 9DZ
                </span>
                <br />
                <span>calinbiberea@gmail.com</span>
              </p>
            </div>
          </div>
        </div>
        <div className="six columns">
          <div className="columns download">
            <p>
              <a
                href="https://drive.google.com/file/d/1yDQQ9WE9T1svwjD-9J5_kj7GYdQpcZ1S/view?usp=sharing.com/"
                className="button"
              >
                <i className="fa fa-download" />
                Resume Link
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
