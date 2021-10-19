import React, { useState, useEffect } from "react";
import "./Navbar.css";
import {Link} from "react-router-dom";

export default function Navbar() {
    const [toggleMenu, setToggleMenu] = useState(false);
    const [largeur, setLargeur] = useState(window.innerWidth);

    const toggleNav = () => {
        setToggleMenu(!toggleMenu)
    }

    useEffect(() => {

        const changeWidth = () => {
            setLargeur(window.innerWidth);
        }

        window.addEventListener('resize', changeWidth);

        return () => {
            window.removeEventListener('resize', changeWidth);
        }


    }, [])

    return (
        <nav>
            {(toggleMenu || largeur > 500) && (
                <ul className="liste">
                    <Link to="/">
                        <li className="items">Accueil</li>
                    </Link>
                    <Link to="/ecrire">
                        <li className="items">Écrire</li>
                    </Link>
                    <Link to="/contact">
                        <li className="items">Contact</li>
                    </Link>
                </ul>
            )}
            <a onClick={toggleNav} className="btn"><i className="uil uil-list-ul"/></a>
        </nav>
    );
}
