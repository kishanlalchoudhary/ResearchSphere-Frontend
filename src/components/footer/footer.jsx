import Logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="footer lg:px-20 px-10 py-10 bg-base-200 text-base-content">
      <div>
        <img src={Logo} style={{ width: "50px" }}></img>
        <p>
          Research Spherere <br />
          Empowering Curiosity,
          <br />
          Igniting Discoveries
        </p>
      </div>
      <div>
        <span className="footer-title">Services</span>
        <a className="link link-hover">Help Designing</a>
      </div>
      <div>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
      </div>
      <div>
        <span className="footer-title">Legal</span>
        <a className="link link-hover">Terms of use</a>
      </div>
    </footer>
  );
};

export default Footer;
