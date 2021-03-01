import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavLinkHeader from '../NavLinkHeader';
import pages from '../../data/pages.json'
import './style.css';


function Header() {

    const [state, setState] = useState({
        pages
    })

    const setClass = (name) => {
        state.pages.map((page) => {
            page.link === name ? page.classState = "nav-link active" : page.classState = "nav-link";
            setState({ pages });
        })
    }

    return (
        <header>
            <nav className="navbar navbar-expand-lg fixed-top navbar-dark">
                <Link
                    className="navbar-brand"
                    id="home-link"
                    name="home"
                    //onClick={() => setClass(this.name)}
                    to="/" >Nina Welsh
                    </Link>
                <button className="navbar-toggler" type="button"
                    data-toggle="collapse" data-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        {state.pages.map(page => (
                            <NavLinkHeader
                                navLink={page.link}
                                navText={page.name}
                                classState={page.classState}
                                setClass={setClass}
                            />
                        ))}
                    </div>
                </div>
            </nav>
        </header>
    )
};

export default Header;