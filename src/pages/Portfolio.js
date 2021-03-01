import React, { useState } from "react";
import ProjectFeatured from "../components/ProjectFeatured";
import ProjectThumbnail from "../components/ProjectThumbnail";
import projects from '../data/projects.json';
import './style.css';


function Portfolio() {

    const [state, setState] = useState({
        projects
    })

    const setFeatureProject = (name) => {
        state.projects.map((project) => {
            project.name === name ? project.featured = true : project.featured = false;
            setState({ projects });
        })
    }

    const useFeatured = () => {
        const featured = state.projects.filter(project => project.featured);
        return featured
    }

    const useNonFeatured = () => {
        const nonFeature = state.projects.filter(project => !project.featured);
        return nonFeature
    }

    return (
        <article id="portfolio">
            <div className="row">
                <h1>Portfolio</h1>
            </div>
            <div className="row row-cols-1 row-cols-lg-2">
                {useFeatured().map(project => (
                    <ProjectFeatured
                        projectName={project.name}
                        imageSource={project.imageSource}
                        projectDescription={project.description}
                        projectLanguages={project.languages}
                        deployedProjectLink={project.deployedProjectLink}
                        codeLink={project.codeLink}
                    />
                ))}
                <div id="inner" className="row row-cols-1 row-cols-lg-2">
                    {useNonFeatured().map(project => (
                        <ProjectThumbnail
                            projectName={project.name}
                            projectLanguages={project.languages}
                            imageSource={project.imageSource}
                            setFeatureProject={setFeatureProject}
                        />
                    ))}
                </div>
            </div>
        </article>
    )
}

export default Portfolio;