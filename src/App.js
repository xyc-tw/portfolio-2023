import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';
import Navigation from "./components/Navigation/Navigation";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Resume from "./components/Resume/Resume";
import Footer from "./components/Footer/Footer";

class App extends Component {
  constructor() {
    super();
    this.state = {
      width: window.innerWidth,
      section: "home",
    };
  }

  componentDidMount() {
    this.resizeWindow();
    window.addEventListener("scroll", () => this.scrolltoSection());
  }

  resizeWindow() {
    window.addEventListener("resize", (e) => {
      this.setState({ width: window.innerWidth });
    });
  }

  scrolltoSection() {
    var scroll = window.pageYOffset;

    const sections = document.getElementsByClassName("section");
    for (let section of sections) {
      var sectionTop = section.offsetTop;
      var sectionHeight = section.offsetHeight;

      if (
        scroll > sectionTop - 50 &&
        scroll <= sectionTop + sectionHeight - 50
      ) {
        this.setState({ section: section.id });
      }
    }
    this.setNavi(this.state.section);
  }

  setNavi = (section) => {
    var navis = document.getElementsByClassName("navi");
    for (let nav of navis) {
      if (section != nav.getAttribute("href").substring(1)) {
        nav.classList.remove("active");
      } else nav.classList.add("active");
    }
  };

  render() {
    return (
      <div className="App">
        <h1 className="logo">xyc</h1>
        <Navigation width={this.state.width} section={this.state.section} />
        <Home />
        <About />
        <Projects />
        <Resume />
        <Footer />
      </div>
    );
  }
}

export default App;
