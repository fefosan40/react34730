import { Fragment } from "react";
import { Link } from "react-router-dom";
import "./nav.css";
import CartWidget from "./Cart/CartWidget";

const NavBar = () => {
  return (
    <Fragment>
      <nav className="Nav">

        <Link to="/">
          Catalogo
        </Link>
        <Link to="/category/autos">Autos</Link>
        <Link to="/category/camionetas">Camionetas</Link>
        <Link to="/item/:id">
          Detalles del Producto
        </Link>
        <CartWidget />
      </nav>





    </Fragment>
  );
};

export default NavBar;