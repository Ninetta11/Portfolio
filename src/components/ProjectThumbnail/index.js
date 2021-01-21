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
                    :
                    <Fade top>
                        <div className="card-overlay-container my-auto">
                            <h3 class="thumbnail-title">{projectName}</h3>
                            <p class="thumbnail-subtitle">{projectLanguages}</p>
                            <div className="text-center">
                                <button className="btn btn-info">
                                    <Link className="text-white" onClick={() => setFeatureProject(projectName)} to="/portfolio">Learn More</Link>
                                </button>
                            </div>
                        </div>
                    </Fade>
                }
            </div>
        </div >
    )
};

export default ProjectThumbnail;