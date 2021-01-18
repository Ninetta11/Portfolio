import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavLinkHeader from '../NavLinkHeader';
import pages from '../../data/pages.json';
import './style.css';


class Header extends Component {

    state = {
        pages
    }

    setClass = (name) => {
        this.state.pages.map((page) => {
            if (page.link === name) {
                page.classState = "nav-link active";
                this.setState({ pages });
            }
            else {
                page.classState = "nav-link";
                this.setState({ pages });
            }
        })
    }

    render() {
        return (
            <header>
                <nav className="navbar navbar-expand-lg fixed-top navbar-dark">
                    <Link className="navbar-brand" id="home-link" to="/" >Nina Welsh</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
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