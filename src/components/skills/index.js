import './index.css';

const Skills = () => {

  // Skills set
  let skills = [
    {icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" alt="html"/>, name: "HTML"},
    {icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" alt="css"/>, name: "CSS"},
    {icon: <i class="devicon-javascript-plain colored icon"></i>, name: "Javascript"},
    {icon: <i class="devicon-nodejs-plain colored"></i>, name: "NodeJS"},
    {icon: <i class="devicon-react-original-wordmark colored"></i>, name: "React"},
    {icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="python"/>, name: "Python"},
    {icon: <i class="devicon-php-plain colored"></i>, name: "PHP"},
    {icon: <i class="devicon-symfony-original-wordmark colored"></i>, name: "Symfony"},
    {icon: <i class="devicon-git-plain colored"></i>, name: "Git"},
    {icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" alt="linux"/>, name: "Linux"},
    {icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" alt="mysql"/>, name: "MySQL"},
    {icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb"/>, name: "MongoDB"},
  ];

  return (
    <div className="home">
      <section className="container">
        <h1>Skills</h1>

        <ul className="skills">
          {skills.map(skill => (
            <li key={skill.name}>
            {skill.icon}
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}

export default Skills;
