import { Fragment } from "react";
import { Outlet,Link } from "react-router-dom";
import { SunLogo } from "../../assets/soleil-motors.component";

const Navigation = () => {
    return (
        <Fragment>
        <nav className="navbar">
            <Link className="icon is-large" to="/"  >
                <SunLogo className="icon" />
            </Link>
            <div className="navbar-end ">
                <Link className="navbar-item" to="/Shop">Shop</Link>
            </div>
        </nav>
        <Outlet />
      </Fragment>
    );
}

export default Navigation;