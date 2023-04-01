import React, { Component } from 'react';
import { Button, Modal } from 'antd';
import ProjectThumbnail from '../ProjectThumbnail';
import projects from '../../data/projects.json';


class ProjectBanner extends Component {

    state = {
        projects,
        isModalOpen: false,
        modalTitle: '',
        modalDescription: '',
        modalHref: ''
    }

    showModal = (title, description, link) => {
        this.setState({ ...this.state, isModalOpen: true, modalTitle: title, modalDescription: description, modalHref: link })
    };

    hideModal = () => {
        this.setState({ ...this.state, isModalOpen: false })
    };

    render() {
        return (
            <div>
                <Modal
                    title={this.state.modalTitle}
                    visible={this.state.isModalOpen}
                    onCancel={this.hideModal}
                    footer={[<Button key="cancel" href={this.state.modalHref}>Visit Website</Button>]} >
                    <p>{this.state.modalDescription}</p>
                </Modal>
                <article id="portfolio">
                    <div className="row">
                        <h1>Work Projects</h1>
                    </div>
                    <div id="inner" className="row row-cols-1 row-cols-lg-3">
                        {projects.workProjects.map(project =>
                            <ProjectThumbnail
                                projectName={project.name}
                                projectLanguages={project.languages}
                                projectDescription={project.description}
                                projectLink={project.projectLink}
                                imageSource={project.imageSource}
                                showModal={this.showModal}
                            />)}
                    </div>
                </article >
                <article id="portfolio">
                    <div className="row">
                        <h1>Personal Projects</h1>
                    </div>
                    <div id="inner" className="row row-cols-1 row-cols-lg-3">
                        {projects.personalProjects.map(project =>
                            <ProjectThumbnail
                                projectName={project.name}
                                projectLanguages={project.languages}
                                projectDescription={project.description}
                                projectLink={project.projectLink}
                                imageSource={project.imageSource}
                                showModal={this.showModal}
                            />)}
                    </div>
                </article >
            </div >
        )
    }
};

export default ProjectBanner;