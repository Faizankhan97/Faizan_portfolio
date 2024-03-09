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
            Im a <b>Computer Science gradute</b> at the Iqra University. Im an
            enthusiastic and driven Computer Science student seeking a
            challenging internship opportunity to apply and expand my technical
            skills. With a strong academic foundation in software engineering
            and hands-on experience in various programming languages, I am eager
            to contribute to innovative projects and learn from experienced
            professionals in the industry. I am a quick learner who is always
            ready to face challenges.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
