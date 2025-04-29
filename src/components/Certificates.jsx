import './Certificates.css';

export default function Certificates() {
    const certificates = [
      {
        title: "Desarrollo Web",
        image: "/certificates/certificado-desarrollo-web.png",
        description: "Profundización en asincronismo, promesas y manipulación del DOM.",
      },
      {
        title: "Javascript",
        image: "/certificates/certificado-javascript.png",
        description: "Creación de componentes, hooks, rutas dinámicas y gestión de estado.",
      },
      {
        title: "React JS",
        image: "/certificates/certificado-react.png",
        description: "Principios de usabilidad, diseño responsive y herramientas de prototipado.",
      },
    ];
  
    return (
      <section className="container py-5 text-white">
        <h2 className="mb-4">Certificados</h2>
        <div className="row">
          {certificates.map((cert, index) => (
            <div key={index} className="col-md-4 mb-4 d-flex">
            <div className="bg-dark p-3 rounded certificado d-flex flex-column justify-content-between w-100">
              <div>
                <img src={cert.image} alt={cert.title} className="img-fluid rounded mb-3" />
                <h5>{cert.title}</h5>
                <p>{cert.description}</p>
              </div>
            </div>
          </div>
          ))}
        </div>
      </section>
    );
  }
  