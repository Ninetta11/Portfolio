import React, { Component } from "react";
import ProjectFeatured from "../components/ProjectFeatured";
import ProjectThumbnail from "../components/ProjectThumbnail";
import projects from '../data/projects.json';


class Portfolio extends Component {

    state = {
        projects
    }

    setFeatureProject = (name) => {
        this.state.projects.map((project) => {
            project.name === name ? project.featured = true : project.featured = false;
            this.setState({ projects });
        })
    }

    useFeatured = () => {
        const featured = this.state.projects.filter(project => project.featured);
        return featured
    }

    useNonFeatured = () => {
        const nonFeature = this.state.projects.filter(project => !project.featured);
        return nonFeature
    }

    render() {
        return (
            <article id="portfolio">
                <div className="row">
                    <h1>Portfolio</h1>
                </div>
                <div className="row row-cols-1 row-cols-lg-2">
                    {this.useFeatured().map(project => (
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
                        {this.useNonFeatured().map(project => (
                            <ProjectThumbnail
                                projectName={project.name}
                                imageSource={project.imageSource}
                                setFeatureProject={this.setFeatureProject}
                            />
                        ))}
                    </div>
                </div>

            </article>
        )
    }
}

export default Portfolio;