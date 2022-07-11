import './index.css';

const Header = () => {

  return (
    <header>
      <div className="header">
        <h1>Gerardo Palmieri</h1>

        <nav>
            <ul>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Resume</a></li>
            </ul>
        </nav>
      </div>

      <div className="me">
        <div>
          <h1>
            Hi, I'm
            <strong>Gerardo Palmieri</strong>
          </h1>
          <span>Full-stack Developer</span>
          <button>Contact me</button>
        </div>
      </div>
    </header>
  )

}

export default Header;
