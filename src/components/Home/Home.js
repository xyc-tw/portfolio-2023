import React, { Component } from "react";
import "./Home.css";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      shadow:
        "0.7px -6px 2px rgba(277, 6, 19, 0.5), -1px 11px 2px rgba(255, 237, 0, 0.5), 18px 0.9px 2px rgba(0, 159, 227, 0.5)",
    };
  }

  textEffect = (e) => {
    var name = document.getElementById("name");
    var positionName = name.getBoundingClientRect();
    var centerX = positionName.x + positionName.width / 2;
    var centerY = positionName.y + positionName.height / 2;
    var x = e.clientX;
    var y = e.clientY;
    var offsetX = x - centerX;
    var offsetY = y - centerY;
    this.setState({
      shadow:
        offsetY / 80 +
        "px " +
        offsetX / -36 +
        "px 2px rgba(277, 6, 19, 0.5)," +
        offsetY / -60 +
        "px " +
        offsetX / 20 +
        "px 2px rgba(255, 237, 0, 0.5)," +
        offsetX / 12 +
        "px " +
        offsetY / 70 +
        "px 2px rgba(0, 159, 227, 0.5)",
    });
  };

  render() {
    return (
      <div id="home" className="section">
        <div className="title">
          <p
            style={{
              fontSize: "calc(10px + 1vw)",
              color: "var(--color-focus-2)",
            }}
          >
            &nbsp;Hey, i'm
          </p>
          <p
            id="name"
            onMouseMove={this.textEffect}
            style={{
              fontWeight: "bold",
              textShadow: this.state.shadow,
              fontSize: "calc(30px + 5vw)",
              fontFamily: "Verdana",
              color: "var(--color-focus-2)",
            }}
          >
            Hsinyu&nbsp;Chen
          </p>
          <p
            style={{
              fontSize: "calc(12px + 2vw)",
              color: "var(--color-text)",
              fontWeight: "normal",
              letterSpacing:"4px",
            }}
          >Data Scientist
          </p>
        </div>
      </div>
    );
  }
}
export default Home;
