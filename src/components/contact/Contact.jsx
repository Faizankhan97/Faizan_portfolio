import "./contact.css";

const Contact = () => {

  return (
    <section id="contact">
      <h5>Get in touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <h4>Email</h4>
            <h5>faizikhan753@gmail.com</h5>
            <a href="mailto:faizikhan753@gmail.com">Send a message</a>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Contact;
