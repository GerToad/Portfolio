import './index.css';
import { Link } from 'react-scroll';
import Pdf from '../../assets/CV.pdf';

const Header = () => {

  return (
    <header>
      <div className="header">
        <Link to="intro" spy={true} smooth={true} offset={-100} duration={500}>
          Gerardo Palmieri Mondragón
        </Link>

        <nav>
            <ul>
                <li>
                  <Link to="about" spy={true} smooth={true} offset={-100} duration={500} activeClass="active">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="projects" spy={true} smooth={true} offset={-100} duration={500} activeClass="active">
                    Projects
                  </Link>
                </li>
                <li>
                  <a href={Pdf} without="true" rel="noopener noreferrer" target="_blank">
                    <button trailingicon="picture_as_pdf" label="Resume">
                      Resume
                    </button>
                  </a>
                </li>
            </ul>
        </nav>
      </div>
    </header>
  )

}

export default Header;
