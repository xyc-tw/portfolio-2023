import "./Resume.css";
import python from "./logos/python.png";
import numpy from "./logos/numpy.png";
import pandas from "./logos/pandas.png";
import matplotlib from "./logos/matplotlib.png";
import seaborn from "./logos/seaborn.png";
import sklearn from "./logos/sklearn.png";
import tensorflow from "./logos/tensorflow.png";

import docker from "./logos/docker.png";
import flask from "./logos/flask.png";

import mySQL from "./logos/mySQL.png";
import postgres from "./logos/postgres.png";
import mongodb from "./logos/mongodb.png";


import html from "./logos/html.png";
import css from "./logos/css.png";
import js from "./logos/js.png";
import p5js from "./logos/p5js.png";
import react from "./logos/react.png";

import java from "./logos/java.png";

import php from "./logos/php.png";
import laravel from "./logos/laravel.png";

import ps from "./logos/photoshop.png";
import illu from "./logos/illustrator.png";
import inDesign from "./logos/inDesign.png";

function Resume() {
  return (
    <div id="resume" className="section">
      <p className="sectionTitle">RESUME</p>
      <div className="table">
        <hr />
        <p className="subTitle">Education</p>
        <div class="item">
          <p class="time">2022.09 - 2022.12</p>
          <p>Data Science Bootcamp, SPICED Academy, Berlin, Germany</p>
        </div>
        <div class="item">
          <p class="time">2019.10 -</p>
          <p>Medieninformatik Online &#40;B.Sc.&#41;, BHT, Berlin, Germany</p>
        </div>
        <div class="item">
          <p class="time">2002.09 - 2006.06</p>
          <p>Bachelor of Architecture degree, NCKU, Tainan, Taiwan</p>
        </div>
        <hr />
        <p className="subTitle">Professional practices</p>
        <div class="item">
          <p class="time">2015.06 - 2022.06</p>
          <p>Klaus Roth Architekten , Berlin, Germany</p>
        </div>
        <div class="item">
          <p class="time">2012.12 - 2014.02</p>
          <p>Cellulose Design Company, ChongQing, China</p>
        </div>
        <div class="item">
          <p class="time">2011.06 - 2012.09</p>
          <p>JCW Architects, Taichung, Taiwan</p>
        </div>
        <div class="item">
          <p class="time">2006.09 - 2008.10</p>
          <p>J.C.Yang Architect & Associates, Taipei, Taiwan</p>
        </div>
        <hr />
        <p className="subTitle">Skills</p>
        <div className="skills">
          <img src={python} alt="python" className="skill" />
          <img src={numpy} alt="numpy" className="skill" />
          <img src={pandas} alt="pandas" className="skill" />
          <img src={matplotlib} alt="matplotlib" className="skill" />
          <img src={seaborn} alt="seaborn" className="skill" />
          <img src={sklearn} alt="sklearn" className="skill" />
          <img src={tensorflow} alt="tensorflow" className="skill" />
          <img src={docker} alt="docker" className="skill" />
          <img src={flask} alt="flask" className="skill" />


          <img src={mySQL} alt="MySQL" className="skill" />
          <img src={postgres} alt="postgres" className="skill" />
          <img src={mongodb} alt="mongoDB" className="skill" />


          <img src={html} alt="HTML" className="skill" />
          <img src={css} alt="CSS" className="skill" />
          <img src={js} alt="JavaScript" className="skill" />
          <img src={p5js} alt="p5js" className="skill" />
          <img src={react} alt="React" className="skill" />

          <img src={java} alt="Java" className="skill" />
         
          <img src={php} alt="PHP" className="skill" />
          <img src={laravel} alt="Laravel" className="skill" />
          <img src={ps} alt="Photoshop" className="skill" />
          <img src={illu} alt="Illustrator" className="skill" />
          <img src={inDesign} alt="InDesign" className="skill" />
        </div>
      </div>
    </div>
  );
}
export default Resume;
