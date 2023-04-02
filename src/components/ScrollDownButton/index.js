import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import "./style.css";
import Scroll from 'react-scroll';
const scroll = Scroll.animateScroll;


function ScrollDownButton({x,y}) {
    return (
        <a
            className="scrollDownButton d-flex justify-content-center"
            onClick={() => scroll.scrollTo(x,y)} >
            <FontAwesomeIcon icon={faChevronDown} size="4x" />
        </a>
    )
};

export default ScrollDownButton;