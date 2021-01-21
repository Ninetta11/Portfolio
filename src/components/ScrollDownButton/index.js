import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import "./style.css";
import Scroll from 'react-scroll';
const scroll = Scroll.animateScroll;


function ScrollDownButton() {
    return (
        <a
            className="scrollDownButton d-flex justify-content-center"
            onClick={() => scroll.scrollToBottom()} >
            <FontAwesomeIcon icon={faChevronDown} size="4x" />
        </a>
    )
};

export default ScrollDownButton;