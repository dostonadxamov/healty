import { NavLink } from "react-router-dom";
import logo from "../../public/images/logo.svg"
import hamburger from "../../public/images/icon-hamburger-menu.svg"
import { useState } from "react";


export default function Navbar() {

    const [open, setOpen] = useState(false);

    return (
        <div className="navbar__wrapper">
            <div className="container">
                <nav>
                    <div>
                        <img src={logo} alt="" />
                    </div>
                    <ul>
                        <li><NavLink to={"/"}>Home</NavLink></li>
                        <li><NavLink to={"/about"}>About</NavLink></li>
                        <li><NavLink to={"/recipes"}>Recipes</NavLink></li>
                    </ul>

                    <div>
                        <button className="button__style">Browse recipes</button>



                        <button className="select" onClick={() => setOpen(!open)}>
                            <img src={hamburger} alt="menu" />
                        </button>
                        {open && (
                            <div className="dropdown">
                                <NavLink to="/" onClick={() => setOpen(false)}>Home</NavLink>
                                <NavLink to="/about" onClick={() => setOpen(false)}>About</NavLink>
                                <NavLink to="/recipes" onClick={() => setOpen(false)}>Recipes</NavLink>
                            </div>
                        )}
                    </div>
                </nav>
            </div>
            <hr />
        </div>
    )
}
