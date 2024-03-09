import "./about.css";
import myImage from "../../assets/faizan.png";
import { GiGraduateCap } from "react-icons/gi";
import { BsBookmarkStar } from "react-icons/bs";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={myImage} alt="Me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <GiGraduateCap className="about__icon" />
              <h5>Degree</h5>
              <small>
                Bachelor of Science in Computer Science <br />
                <i>Iqra University</i>
              </small>
            </article>

            <article className="about__card">
              <BsBookmarkStar className="about__icon" />
              <h5>Current GPA</h5>
              <small>2.7</small>
            </article>
          </div>
          <p>
            Passionate frontend developer with 3 years of experience crafting
            user-focused web applications. Proficient in HTML, CSS, and
            JavaScript, with expertise in modern frameworks. Dedicated to
            creating intuitive and visually appealing interfaces. Excited to
            continue pushing boundaries in frontend development.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
