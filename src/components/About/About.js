import "./About.css";
import portray from "./portray.jpeg";

function About() {
  return (
    <div id="about" className="section">
      <p className="sectionTitle">ABOUT ME</p>
      <div className="intro">
        <div className="pic">
          <img src={portray} alt="portray" width="500" height="auto" />
        </div>
        <div className="text">
          <p>
            My name is Hsinyu Chen. I'm a data scientist and previous experience as an architect. I am trained in Python and SQL for handling data and modeling. Particularly interested in generative art and NLP.
          </p>
          <div className="button">
            <a href="resume-2023.pdf" download>
              <span>Resume</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
