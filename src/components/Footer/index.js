import React, { Component } from 'react';
import NavLinkFooter from '../NavLinkFooter';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

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
        text: " ninawelsh1@outlook.com",
        icon: faEnvelope,
        href: "mailto:ninawelsh1@outlook.com"
    },
    {
        text: " LinkedIn Profile",
        icon: faLinkedin,
        href: "https://www.linkedin.com/in/nina-welsh-b2407398"
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
                <ul className="nav flex-column align-items-center">
                    {this.state.personalDetails.map(detail => (
                        <NavLinkFooter
                            text={detail.text}
                            icon={detail.icon}
                            href={detail.href}
                        />
                    ))}
                    <br></br>
                </ul>
            </footer >
        )
    }
}
export default Footer;