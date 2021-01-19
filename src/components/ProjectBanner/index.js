import React, { Component } from 'react';
import ProjectThumbnail from '../ProjectThumbnail';
import projects from '../../data/projects.json';

class ProjectBanner extends Component {

    state = {
        projects
    }

    setFeatureProject = (name) => {
        this.state.projects.map((project) => {
            project.name === name ? project.featured = true : project.featured = false;
            this.setState({ projects });
        })
    }

    render() {
        return (
            <article id="portfolio">
                <div className="row">
                    <h1>Featured Projects</h1>
                </div>
                <div id="inner" className="row row-cols-1 row-cols-lg-3">
                    {this.state.projects.map(project =>
                        <ProjectThumbnail
                            projectName={project.name}
                            projectLanguages={project.languages}
                            imageSource={project.imageSource}
                            setFeatureProject={this.setFeatureProject}
                        />)}
                </div>
            </article >
        )
    }
};

export default ProjectBanner;