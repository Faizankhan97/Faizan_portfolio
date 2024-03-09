import "./footer.css";
import { BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer__logo">
        Faizan Khan
      </a>
      <ul className="permalinks">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://github.com/faizi20">
          <BsGithub />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Faizan Khan. All rightts reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
