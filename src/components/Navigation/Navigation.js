import "./Navigation.css";

function Nevigation(props) {
  return (
    <div className="naviContainer">
      {props.width > 700 ? (
        <div className="textNav">
          <a href="#home" className="active navi">
            Home
          </a>
          <a href="#about" className="navi">
            About
          </a>
          <a href="#projects" className="navi">
            Projects
          </a>
          <a href="#resume" className="navi">
            Resume
          </a>
        </div>
      ) : (
        <div className="dotNav">
          <ul>
            <li>
              {" "}
              <a href="#home" className="active navi" />
            </li>
            <li>
              {" "}
              <a href="#about" className="navi" />
            </li>
            <li>
              {" "}
              <a href="#projects" className="navi" />
            </li>
            <li>
              {" "}
              <a href="#resume" className="navi" />
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
export default Nevigation;
