import './ProjectSection.css'

const projects = [
  {
    title: 'Sitio Web de Agencia Creativa',
    description: 'Landing page moderna para agencia de diseño UX/UI.',
    image: '/projects/project1.jpg',
    tech: ['HTML', 'SASS', 'JavaScript', 'Bootstrap']
  },
  {
    title: 'E-commerce de Autos',
    description: 'Plataforma de venta de autos con carrito y checkout integrado.',
    image: '/projects/project2.jpg',
    tech: ['React', 'Firebase', 'Bootstrap']
  },
  {
    title: 'Portfolio Personal',
    description: 'Sitio personal para mostrar proyectos como desarrollador y diseñador.',
    image: '/projects/project3.jpg',
    tech: ['React', 'CSS', 'Framer Motion']
  }
]

function ProjectSection() {
  return (
    <section className="projects">
      {projects.map((project, index) => (
        <div className="project-card" key={index}>
          <img className="project-image" src="https://placehold.co/600x400" /*{project.image}*/ alt={project.title} />
          <div className="project-details">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <ul className="tech-list">
              {project.tech.map((tech, i) => (
                <li key={i}>{tech}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </section>
  )
}

export default ProjectSection
