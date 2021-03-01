import PortGrocer from '../components/ProjectArticles/PortGrocer';
import Geonbae from '../components/ProjectArticles/Geonbae';
import './style.css';


function Achievements() {
    return (
        <article id="achievements">
            <div className="row">
                <div className="col-md-12 text-right">
                    <h1>Achievements</h1>
                </div>
            </div>
            <div className="row row-cols-1 row-cols-lg-2">
                <div className="col mb-4">
                    <PortGrocer />
                </div>

                <div className="col mb-4">
                    <Geonbae />
                </div>
            </div>
        </article >
    )
}

export default Achievements;