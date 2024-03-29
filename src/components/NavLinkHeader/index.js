import { Link } from "react-router-dom";

function NavLinkHeader({
    navLink,
    navText,
    classState,
    setClass
}) {
    return (
        <Link
            key={navText}
            className={classState}
            name={navLink}
            onClick={() => setClass(navLink)}
        >{navText}
        </Link>
    )
};

export default NavLinkHeader;