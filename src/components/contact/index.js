import './index.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {

  const [tooltip, setTooltip] = useState("Copy to clipboard");

  const emailIcon = <FontAwesomeIcon icon={faEnvelope} />;
  const github = <FontAwesomeIcon icon={faGithub} />;
  const linkedIn = <FontAwesomeIcon icon={faLinkedin} />;
  const email = "gerardopalmierimondragon@gmail.com";

  const links = [
    {socialMedia: "linkedin", icon: linkedIn, url: "https://www.linkedin.com/in/gerardo-palmieri-mondrag%C3%B3n-486485203/"},
    {socialMedia: "github", icon: github, url: "https://github.com/GerToad/Gerardo-Palmieri-Mondragon"},
  ];

  function clicked (){
    navigator.clipboard.writeText(email);
    setTooltip("Email copied");
  }

  function out(){
    setTooltip("Copy to clipboard");
  }

  return(
    <div className="contact" id="contact">
        <section className="container">
          <h2>Contact</h2>
          <p>Let's work together</p>
          <div className="tooltip">
            <button onClick={clicked} onMouseOut={out} className="copy">
              <span className="tooltiptext">{tooltip}</span>
              {emailIcon}{email}
            </button>
          </div>

          <ul className="links">
            {links.map(link => (
              <li key={link.socialMedia}>
                <a href={link.url} className={link.socialMedia}>{link.icon}</a>
              </li>
            ))}
          </ul>
        </section>
    </div>
  )
}

export default Contact;
