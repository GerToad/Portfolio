import './index.css';

const Projects = () => {

  let projects = [
    {name: "todo", image: require("../../assets/img/home2.png"), link:"https://github.com/GerToad/To-do-list"},
    {name: "beer-scraper", image: require("../../assets/img/beer-scraper.png"), link:"https://github.com/GerToad/beer-scrapper"},
  ]

  return(
    <div className="portfolio" id="projects">
      <section className="container">
        <h2>My Projects</h2>
        <p>A selection of my current work</p>

        <div className="projects">

          <ul className="project-item">
            {projects.map(project => (
              <li key={project.name}>
                <img src={project.image} alt={project.name}/>
                <a href={project.link} className="item-btn">GitHub</a>
              </li>
            ))}
          </ul>

        </div>
      </section>
    </div>
  )
}

export default Projects;
