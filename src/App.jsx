import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Contacts from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Project from "./components/myproject/Project";

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Project />
      <Contacts />
      <Footer />
    </>
  );
};

export default App;
