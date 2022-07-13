import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {

const emailIcon = <FontAwesomeIcon icon={faEnvelope} />;
const github = <FontAwesomeIcon icon={faGithub} />;
const linkedIn = <FontAwesomeIcon icon={faLinkedin} />;
const email = "theyayo47@gmail.com";

const links = [
  {socilMedia: "linkedin", icon: linkedIn, url: "https://www.linkedin.com/in/gerardo-palmieri-mondrag%C3%B3n-486485203/"},
  {socilMedia: "github", icon: github, url: "https://github.com/GerToad/Gerardo-Palmieri-Mondragon"},
];

  return(
    <div className="contact">
        <section className="container">
          <h2>Contact</h2>
          <p>Let's work together</p>
          <button onClick={() => {navigator.clipboard.writeText(email)}} className="copy">{emailIcon} {email} </button>

          <ul className="links">
            {links.map(link => (
              <li key={link.socialMedia}>
                <a href={link.url} className={link.socilMedia}>{link.icon}</a>
              </li>
            ))}
          </ul>
        </section>
    </div>
  )
}

export default Contact;
