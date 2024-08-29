import React from "react";
import FooterData from "./FooterData";
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {FooterData.map((section, index) => (
            <section className="footer-section" key={index}>
              <h4 className="footer-title">{section.title}</h4>
              <ul className="footer-list">
                {section.data.map((subtopic, subIndex) => (
                  <li className="footer-list-item" key={subIndex}>
                    {subtopic.info}
                  </li>
                ))}
              </ul>
              {section.id === 4 && (
                <div className="news-letter">
                  <div className="input-group">
                    <input
                      type="text"
                      name="#"
                      id=""
                      placeholder="Enter your email..."
                    />
                  </div>
                  <input type="submit" value="SUBMIT" />
                </div>
              )}
            </section>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
