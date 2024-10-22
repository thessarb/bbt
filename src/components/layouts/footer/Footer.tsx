import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="row">
        <div className="col-md-6 footer__developed-by body-small__semibold">
          Made with <i className="heart-icon" /> by 
          <a
            target="_blank"
            className="ms-1"
            rel="noreferrer"
          >
           Thommas Groupe
          </a>
          .
        </div>
      </div>
    </footer>
  );
};

export default Footer;
