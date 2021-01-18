import React, { Component } from 'react';
import ProjectThumbnail from '../ProjectThumbnail';
import projects from '../../data/projects.json';

class ProjectBanner extends Component {

    state = {
        projects
    }

    setFeatureProject = (name) => {
        console.log(name);
        this.state.projects.map((project) => {
            if (project.name === name) {
                project.featured = true;
                console.log(project);
                this.setState({ projects });
            }
            else {
                project.featured = false;
                console.log(project);
                this.setState({ projects });
            }
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
                            imageSource={project.imageSource}
                            setFeatureProject={this.setFeatureProject}
                        />)}
                </div>
            </article >
        )
    }
};

export default ProjectBanner;