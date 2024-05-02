import Navbar from "./Navbar";
import Footer from "./footer"

const Home = () => {
  return (
    <>
      <Navbar />
      <div id="videoWrapper">
        <video
          poster="https://res.cloudinary.com/dantiuvn2/image/upload/f_auto,q_auto/v1/willphotos/fondo"
          autoPlay
          muted
          loop
        >
          <source
            src="https://res.cloudinary.com/dantiuvn2/video/upload/v1714619792/willphotos/videoFondo.mp4"
            type="video/mp4"
          />
        </video>
        <div className="caption">
          <div className="contents">
            <h1>Galeria de Fotos</h1>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
