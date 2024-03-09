import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
// import Myprojects from "./components/myprojects/Myprojects";
import Contacts from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      {/* <Myprojects /> */}
      <Contacts />
      <Footer />
    </>
  );
};

export default App;
