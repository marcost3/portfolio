import './ProjectSection.css'

const projects = [
  {
    title: 'Sitio Web de Car Wash',
    description: 'Landing page lavadero de autos, con informacion del local y turnero.',
    image: '/projects/project1.jpg',
    tech: ['HTML', 'SASS', 'JavaScript', 'Bootstrap', 'SEO Basico']
  },
  {
    title: 'E-commerce de Autos',
    description: 'Plataforma de venta de autos dinamica con carrito y checkout integrado.',
    image: '/projects/project2.jpg',
    tech: ['React', 'JSX', 'Firebase', 'Bootstrap']
  },
  {
    title: 'Portfolio de fotografo',
    description: 'Sitio personal de Marco, fotógrafo especializado en retratos industriales y urbanos.',
    image: '/projects/project3.jpg',
    tech: ['React', 'JSX', 'API`s']
  }
]

function ProjectSection() {
  return (
    <section className="projects py-5 bg-black text-white" id="projects">
      <div className="container">
        <h2 className="mb-4">Proyectos</h2>
        {projects.map((project, index) => (
          <div className="project-card mb-5" key={index}>
            <img
              className="project-image"
              src={project.image}
              alt={project.title}
            />
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
      </div>
    </section>
  )
}


export default ProjectSection
