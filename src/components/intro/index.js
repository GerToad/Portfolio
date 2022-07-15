import './index.css';
import { Link } from 'react-scroll';

const Intro = () => {

  return(
      <div className="me" id="intro">
        <div>
          <h1>
            Hi, I'm
            <strong>Gerardo Palmieri Mondragón</strong>
          </h1>
          <span>Full-stack Developer</span>
          <Link to="contact" spy={true} smooth={true}
              offset={50} duration={500}>
            Contact me
          </Link>
        </div>
      </div>
  )
}

export default Intro;
