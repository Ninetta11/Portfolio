import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavLinkHeader from '../NavLinkHeader';
import './style.css';

const pages = [
    {
        name: "Portfolio",
        link: "portfolio",
        classState: "nav-link"
    },
    {
        name: "Achievements",
        link: "achievements",
        classState: "nav-link"
    },
    {
        name: "About",
        link: "about",
        classState: "nav-link"
    }
]

class Header extends Component {

    state = {
        pages
    }

    setClass = (name) => {
        this.state.pages.map((page) => {
            page.link === name ? page.classState = "nav-link active" : page.classState = "nav-link";
            this.setState({ pages });
        })
    }

    render() {
        return (
            <header>
                <nav className="navbar navbar-expand-lg fixed-top navbar-dark">
                    <Link
                        className="navbar-brand"
                        id="home-link"
                        name="home"
                        onClick={() => this.setClass(this.name)}
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
                            {this.state.pages.map(page => (
                                <NavLinkHeader
                                    navLink={page.link}
                                    navText={page.name}
                                    classState={page.classState}
                                    setClass={this.setClass}
                                />
                            ))}
                        </div>
                    </div>
                </nav>
            </header>
        )
    }
};

export default Header;