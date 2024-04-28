import Contacto from './pages/contacto'
import Galeria from './pages/galeria'
import Productos from './pages/productos';
import Retrato from './pages/retrato';
//import Navbar from "./pages/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import "./App.css";
import "./assets/css/main.css"

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Galeria />} />
            <Route path="contacto" element={<Contacto />} />
            <Route path="productos" element={<Productos />} />
            <Route path="alimentos" element={<Galeria />} />
            <Route path="retrato" element={<Retrato />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
