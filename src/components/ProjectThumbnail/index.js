import React, { useState } from 'react';
import { Button } from 'antd';
import Fade from 'react-reveal/Fade';
import './style.css';


function ProjectThumbnail({
    imageSource,
    projectName,
    projectLanguages,
    projectDescription,
    projectLink,
    showModal,
}) {
    const [isShown, setIsShown] = useState(false);

    return (
        <div className="col mb-4">
            <div className="card bg-light h-100"
                onMouseEnter={() => setIsShown(true)}
                onMouseLeave={() => setIsShown(false)}
                onClick={() => showModal(projectName, projectDescription, projectLink)}>
                {!isShown ?
                    <img src={process.env.PUBLIC_URL + imageSource} className="card-img-top"
                        alt={projectName}></img>
                    :
                    <Fade top>
                        <div className="card-overlay-container my-auto">
                            <h3 className="thumbnail-title">{projectName}</h3>
                            <p className="thumbnail-subtitle">{projectLanguages}</p>
                            <div className="text-center">
                                <Button type="primary" onClick={() => showModal(projectName, projectDescription, projectLink)}>
                                    Learn More
                                </Button>
                            </div>
                        </div>
                    </Fade>
                }
            </div>
        </div >
    )
};

export default ProjectThumbnail;