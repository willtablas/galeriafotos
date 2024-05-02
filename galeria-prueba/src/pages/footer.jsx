import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container row">
        <div className="footer-col">
          <h4>Enlaces Rapidos</h4>
          <ul>
            <li>
                <CustomLink to="/alimentos">Alimentos</CustomLink>
            </li>
            <li>
                <CustomLink to="/productos">Productos</CustomLink>
            </li>
            <li>
                <CustomLink to="/retrato">Retratos</CustomLink>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Sígueme</h4>
          <div className="social-links">
            <a href="https://www.facebook.com/?locale=es_LA" target="_blank">
              <i className="fa-brands fa-facebook-f" ></i>
            </a>
            <a href="https://twitter.com/?lang=es" target="_blank">
              <i className="fa-brands fa-x-twitter"></i>
            </a>
            <a href="https://www.instagram.com/" target="_blank">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  
    return (
      <li className={isActive ? "active" : ""}>
        <Link to={to} {...props}>
          {children}
        </Link>
      </li>
    );
  }