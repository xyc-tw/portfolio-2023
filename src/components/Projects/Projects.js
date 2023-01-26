import "./Projects.css";

import taiwanguide from "./images/taiwanguide.jpeg";
import transfer from "./images/style-transfer.jpeg";
import recommender from "./images/movie-recommender.jpeg";
import simu from "./images/simu.gif";
import arima from "./images/arima.png";

function Projects() {
  return (
    <div id="projects" className="section">
      <p className="sectionTitle">PROJECTS</p>
      <div className="project">
        <div className="text">
          <p className="projectTitle">Horror Manga<br></br> Style Transfer</p>
          <p>The project is based on the papers "Image Style Transfer Using Convolutional Neural Networks" and "Perceptual Losses for Real-Time Style Transfer and Super-Resolution" in 2016. The architecture contains 2 ANN models, one CNN model for style transfer and one pre-trained VGG19 model for calculating loss function. It's deployed in Render using Flask and p5.js.
          </p>
          <div className="buttons">
            {/* <div className="button">
              <a href="https://horror-manga-style-transfer.onrender.com/" target="_blank">
                <span>Live</span>
              </a>
            </div> */}
            <div className="button">
              <a href="https://github.com/xyc-tw/horror-manga-style-transfer" target="_blank">
                <span>Code</span>
              </a>
            </div>
          </div>
        </div>
        <div className="pic" options={{ max: 25 }}>
          <img
            src={transfer}
            alt="Horror Manga Style Transfer"
            className="projectPic"
          />
        </div>
      </div>
      <div className="project">
        <div className="text">
          <p className="projectTitle">Movie Recommender</p>
          <p>Movie recommender based on random, cosine similarity and NMF. 
             This project is built with Python and scikit-learn and deployed in Render.
          </p>
          <div className="buttons">
            <div className="button">
              <a href="https://movie-recommender-k8w2.onrender.com/" target="_blank">
                <span>Live</span>
              </a>
            </div>
            <div className="button">
              <a href="https://github.com/xyc-tw/movie-recommender" target="_blank">
                <span>Code</span>
              </a>
            </div>
          </div>
        </div>
        <div className="pic" options={{ max: 25 }}>
          <img
            src={recommender}
            alt="Movie Recommender"
            className="projectPic"
          />
        </div>
      </div>
      <div className="project">
        <div className="text">
          <p className="projectTitle">Supermarket Simulator</p>
          <p>The project is built with the Markov chain to simulate customer behavior in the supermarket. The result is rendered with OpenCV.
          </p>
          <div className="buttons">
            <div className="button">
              <a href="https://github.com/xyc-tw/supermarket-simulator" target="_blank">
                <span>Code</span>
              </a>
            </div>
          </div>
        </div>
        <div className="pic" options={{ max: 25 }}>
          <img
            src={simu}
            alt="Movie Recommender"
            className="projectPic"
          />
        </div>
      </div>
      <div className="project">
        <div className="text">
          <p className="projectTitle">Berlin Temperature Predictor</p>
          <p>Comparing AR-model, ARIMA, and Prophet in dealing with the time series problem.
          Considering the training time, the ARIMA model is fed with the monthly mean.
          </p>
          <div className="buttons">
            <div className="button">
              <a href="https://github.com/xyc-tw/berlin-temp-predictor" target="_blank">
                <span>Code</span>
              </a>
            </div>
          </div>
        </div>
        <div className="pic" options={{ max: 25 }}>
          <img
            src={arima}
            alt="Temperature Predictor"
            className="projectPic"
          />
        </div>
      </div>
      <div className="project">
        <div className="text">
          <p className="projectTitle">Taiwan Guide</p>
          <p>
            This is the final project from my web developing course in BTH. The
            website is assumed to represent the traveling agency that promotes
            the culture of Taiwan.
          </p>
          <div className="buttons">
            <div className="button">
              <a href="https://xyc-tw.github.io/taiwanguide/" target="_blank">
                <span>Live</span>
              </a>
            </div>
            <div className="button">
              <a href="https://github.com/xyc-tw/taiwanguide" target="_blank">
                <span>Code</span>
              </a>
            </div>
          </div>
        </div>
        <div className="pic" options={{ max: 25 }}>
          <img
            src={taiwanguide}
            alt="Taiwan Guide"
            className="projectPic"
          />
        </div>
      </div>
    </div>
  );
}
export default Projects;
