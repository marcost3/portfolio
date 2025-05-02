import React from 'react';
import emailjs from 'emailjs-com';
import './ContactForm.css';

function ContactForm() {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_f02ghje',
      'template_y6rj6hb',
      e.target,
      'IqYVQSbRoM9_cpAZ9'
    ).then(
      () => alert('Mensaje enviado con éxito'),
      (error) => {
        console.error(error.text);
        alert('Error al enviar el mensaje');
      }
    );

    e.target.reset();
  };

  return (
    <section className="container py-5 text-white" id="contacto">
      <h2 className="mb-4">Contacto</h2>
      <form onSubmit={sendEmail}>
        <div className="mb-3">
          <input type="text" name="name" className="form-control" placeholder="Tu nombre" required />
        </div>
        <div className="mb-3">
          <input type="email" name="email" className="form-control" placeholder="Tu email" required />
        </div>
        <div className="mb-3">
          <input type="text" name="subject" className="form-control" placeholder="Asunto" required />
        </div>
        <div className="mb-3">
          <textarea name="message" rows="5" className="form-control" placeholder="Tu mensaje" required />
        </div>
        <button type="submit" className="btn btn-outline-light">Enviar</button>
      </form>
      <div className="text-center mt-4 text-white">
    <p>
        📧 <a href="mailto:turcismarcos@gmail.com" className="text-white text-decoration-none">turcismarcos@gmail.com</a>
    </p>
    </div>
    </section>
  );
}

export default ContactForm;
