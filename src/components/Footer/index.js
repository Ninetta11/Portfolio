import React, { Component } from 'react';
import NavLinkFooter from '../NavLinkFooter';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import './style.css';

const personalDetails = [
    {
        text: " Melbourne, Australia",
        icon: faMapMarkerAlt,
        href: ""
    },
    {
        text: " 0418 947 922",
        icon: faPhone,
        href: "tel://+61418947922"
    },
    {
        text: " ninabergman2025@gmail.com",
        icon: faEnvelope,
        href: "mailto:ninabergman2025@gmail.com"
    },
    {
        text: " LinkedIn Profile",
        icon: faLinkedin,
        href: "https://www.linkedin.com/in/nina-bergman-b2407398"
    },
    {
        text: " Github",
        icon: faGithub,
        href: "https://github.com/Ninetta11"
    }
]

class Footer extends Component {

    state = {
        personalDetails
    }

    render() {
        return (
            <footer className="position-sticky">
                <div className="row row-cols-1">
                    <ul className="nav flex-column align-items-center">
                        {this.state.personalDetails.map(detail => (
                            <NavLinkFooter
                                key={detail.text}
                                text={detail.text}
                                icon={detail.icon}
                                href={detail.href}
                            />
                        ))}
                    </ul>
                </div>
            </footer >
        )
    }
}
export default Footer;