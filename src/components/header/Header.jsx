import "./header.css";
import ME from "../../assets/faizan.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Hello, Im</h5>
        <h1> Faizan Asad Khan</h1>
        <h5 className="text-light">Frontend Engineer</h5>
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contacts" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
