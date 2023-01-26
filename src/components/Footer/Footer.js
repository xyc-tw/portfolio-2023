import "./Footer.css";

function Footer() {
  return (
    <div id="footer">
      <div className="footerContainer">
        <div>
          <a href="#home">
            <img src={process.env.PUBLIC_URL + '/arrow.svg'} alt="up" className="connectIcon"></img>
          </a>
        </div>
        <div>
          <a href="https://www.facebook.com/hsinyu.chen.18/" target="_blank">
            <img src={process.env.PUBLIC_URL + '/facebook.svg'} alt="facebook" className="connectIcon"></img>
          </a>
          <a
            href="https://www.linkedin.com/in/hsinyu-chen-4b43b489/"
            target="_blank"
          >
            <img src={process.env.PUBLIC_URL + '/linkedin.svg'} alt="linkedin" className="connectIcon"></img>
          </a>
          <a href="https://github.com/xyc-tw" target="_blank">
            <img src={process.env.PUBLIC_URL + '/github.svg'} alt="github" className="connectIcon"></img>
          </a>
        </div>
        <hr />
        <div className="copyRight">
          <p>© 2023 Hsinyu Chen</p>
        </div>
      </div>
    </div>
  );
}
export default Footer;
