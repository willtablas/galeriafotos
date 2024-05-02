import Navbar from "./Navbar";
import Footer from "./footer"

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <form id="contact" action="" method="post">
          <h3>Información de Contacto</h3>
          <h4>Ponte en contacto conmigo para mas información</h4>

          <div className="info_personal">
            <span>Nombre: William</span>
            <span>Telefono: +504 111111111 </span>
            <span>Correo: willPhotos@gmail.com</span>
          </div>

          <fieldset>
            <input
              placeholder="Nombre"
              type="text"
              tabIndex="1"
              required
              autoFocus
            />
          </fieldset>
          <fieldset>
            <input
              placeholder="Correo"
              type="email"
              tabIndex="2"
              required
            />
          </fieldset>
          <fieldset>
            <input
              placeholder="Teléfono"
              type="tel"
              tabIndex="3"
              required
            />
          </fieldset>

          <fieldset>
            <textarea
              placeholder="Mensaje"
              tabIndex="5"
              required
            ></textarea>
          </fieldset>
          <fieldset>
            <button
              name="submit"
              type="submit"
              id="contact-submit"
              data-submit="...Sending"
            >
              Submit
            </button>
          </fieldset>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
