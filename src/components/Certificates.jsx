import './Certificates.css';

export default function Certificates() {
  const certificates = [
    {
      title: "Carrera de Front-End",
      image: "/certificates/certificado-carrera.png",
      note: "Nota Promedio = 9.33",
      description: "",
    },
    {
      title: "Desarrollo Web",
      image: "/certificates/certificado-desarrollo-web.png",
      note: "Nota Final = 9",
      description: "HTML, CSS Avanzado, uso de Bootstrap, GitHub, SASS Avanzado, SEO básico.",
    },
    {
      title: "Javascript",
      image: "/certificates/certificado-javascript.png",
      note: "Nota Final = 9",
      description: "DOM, Storage, JSON, librerías externas, AJAX, Fetch, NodeJS.",
    },
    {
      title: "React JS",
      image: "/certificates/certificado-react.png",
      note: "Nota Final = 10",
      description: "JSX, promesas, asincronía, map, routing, API, Firebase.",
    },
  ];

  return (
    <section id="certificates" className="container py-5 text-white">
      <h2 className="mb-4">Certificados</h2>
      <div className="row">
        {certificates.map((cert, index) => (
          <div key={index} className="col-md-6 mb-4 d-flex">
            <div className="bg-dark p-4 rounded certificado d-flex flex-column justify-content-between w-100">
              <div>
                <img src={cert.image} alt={cert.title} className="img-fluid rounded mb-3" />
                <h5>{cert.title}</h5>
                <p className="mb-1"><strong>{cert.note}</strong></p>
                <p>{cert.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
