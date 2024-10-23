import "./Home.scss";

import TopNavbar from "../../components/TopNavbar/TopNavbar";
import LeftNavbar from "../../components/LeftNavbar/LeftNavbar";

import Summary from "./Summary/Summary";
import Projects from "./Projects/Projects";
import TechnicalSkills from "./TechnicalSkills/TechnicalSkills";
import AboutMe from "./AboutMe/AboutMe";
import Contact from "./Contact/Contact";
import Resume from "./Resume/Resume";

export default function Home() {
  return (
    <div id="home-page">
      <LeftNavbar />
      <div className="content-container">
        <TopNavbar />
        <div className="content">
          <div className="section-1" id="home">
            <p>Full stack Web Devlopment Expert</p>
          </div>
          <div className="section-2" id="summary">
            <Summary />
          </div>
          <div className="section-3" id="projects">
            <Projects />
          </div>
          <div className="section-4" id="technical-skills">
            <TechnicalSkills />
          </div>
          <div className="section-5" id="about-me">
            <AboutMe />
          </div>
          <div className="section-6" id="contact">
            <Contact />
          </div>
          <div className="section-7" id="resume">
            <Resume />
          </div>
        </div>
      </div>
    </div>
  );
}
