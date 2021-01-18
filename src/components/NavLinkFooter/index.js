import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function NavLinkFooter({
    text,
    icon,
    href
}) {
    return (
        <li className="nav-item">
            <a className="nav-link text-white" href={href}>
                <FontAwesomeIcon icon={icon} /> {text}</a>
        </li>)
};

export default NavLinkFooter;