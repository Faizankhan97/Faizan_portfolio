import "./project.css";

const Myprojects = () => {
  return (
    <section id="myprojects">
      <h5>My Recent Works</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
          </div>
          <h3>Fake API</h3>
          <small className="text-light">HTML | CSS | React JS</small>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/faizi20/fake_api"
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              Github
            </a>
            <a
              href="https://fake-api-five-gilt.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Visit Website
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
          </div>
          <h3>Basic Banking System</h3>
          <small className="text-light">HTML | CSS | JS</small>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/faizi20/Basic-Banking-System"
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              Github
            </a>
            <a
              href="https://faizi20.github.io/Basic-Banking-System/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Visit Website
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Myprojects;
