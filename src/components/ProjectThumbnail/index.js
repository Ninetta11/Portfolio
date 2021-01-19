import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Fade from 'react-reveal/Fade';
import './style.css';


function ProjectThumbnail({
    imageSource,
    projectName,
    projectLanguages,
    setFeatureProject
}) {
    const [isShown, setIsShown] = useState(false);

    return (
        <div className="col mb-4">
            <div className="card bg-light h-100"
                onMouseEnter={() => setIsShown(true)}
                onMouseLeave={() => setIsShown(false)}
                onClick={() => setFeatureProject(projectName)}
                to="/portfolio">
                {!isShown ?
                    <img src={imageSource} className="card-img-top"
                        alt={projectName}></img>
                    : <Fade top>
                        <div className="card-img-overlay text-center">
                            <h3>{projectName}</h3>
                            <h6>{projectLanguages}</h6>
                            <button className="btn btn-outline-info"
                            >
                                <Link onClick={() => setFeatureProject(projectName)} to="/portfolio">Learn More</Link>
                            </button>
                        </div>
                    </Fade>
                }
            </div>
        </div >
    )
};

export default ProjectThumbnail;