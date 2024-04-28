import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="https://www.facebook.com/?locale=es_LA" target="_blank" className="site-title">
      <div className="share-list">
          <a className="fb-h" onClick="return fbs_click()" target="_blank">
            <img src="https://img.icons8.com/material-rounded/96/000000/facebook-f.png" />
          </a>
        </div>
        WillPhotos
        
      </Link>
      <ul>
        <CustomLink to="/alimentos">Alimentos</CustomLink>
        <CustomLink to="/productos">Productos</CustomLink>
        <CustomLink to="/retrato">Retratos</CustomLink>
        <CustomLink to="/contacto">Contacto</CustomLink>
      </ul>
    </nav>
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
