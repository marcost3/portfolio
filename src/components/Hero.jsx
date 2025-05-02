function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-content text-center d-flex flex-column justify-content-center align-items-center vh-100">
        <h1 className="text-white fs-1 fs-md-display-4 fs-lg-display-1 fade-in">
          Marcos Turcis<span className="cursor"></span>
        </h1>
        <h2 className="subtitle text-light-subtle fs-5 fs-md-4 fs-lg-4 mb-2 fade-in">Estudiante de Ingenieria Informatica</h2>
        <h2 className="subtitle text-light-subtle fs-5 fs-md-4 fade-in">Programador - Diseñador UX/UI</h2>

        <hr className="hero-divider my-3" />
        
        <div className="hero-buttons d-flex gap-4 mt-3">
          <a href="#contacto" className="btn btn-link text-white text-decoration-none px-3 py-2">
            Contacto
          </a>
          <a href="/CV/cv-marcos-turcis.pdf" download className="btn btn-link text-white text-decoration-none px-3 py-2">
            Descargar CV
          </a>
        </div>
      </div>
      
    </section>
  )
}

export default Hero
