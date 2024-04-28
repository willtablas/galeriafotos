import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="nav">
      <div className="share-list">
        
          <a className="fb-h" href="https://www.facebook.com/?locale=es_LA" onClick="return fbs_click()" target="_blank">
            <img src="https://img.icons8.com/material-rounded/96/000000/facebook-f.png" />
            
          </a>
        

        
        <a className="tw-h" href="https://twitter.com/?lang=es" onClick="return fbs_click()" target="_blank">
          <img src="https://img.icons8.com/material-rounded/96/000000/twitter-squared.png" />
        </a>
        
        
        
          <a className="pi-h" href="https://www.instagram.com/" onClick="return fbs_click()" target="_blank">
          <img src="https://img.icons8.com/material-rounded/24/instagram-new.png" />
        </a>

        
        
      </div>
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
