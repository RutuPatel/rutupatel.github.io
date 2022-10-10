import React from 'react'
import { Link } from 'react-router-dom'
import Fade from 'react-reveal/Fade';
import { projects } from '../../../helpers/projectHelper';

const Project = () => {
    return (
        <section className="project-section">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-7 col-md-8">
                        {/* Section Title */}
                        <div className="section-title left-border">
                            <span className="title-tag">Latest Project</span>
                            <h2 className="title">We Complate Much More Latest Project</h2>
                        </div>
                    </div>
                    <Fade right>
                        <div className="col-lg-5 col-md-4">
                            <div className="view-moore-btn text-md-right mt-30 mt-md-0">
                                <Link to="/portfolio" className="main-btn">View More Project</Link>
                            </div>
                        </div>
                    </Fade>
                </div>
                {/* Project Boxes */}
                <Fade bottom cascade>
                    <div className="row project-boxes mt-80 justify-content-center">
                        {projects.slice(0, 6).map((item, i) => (
                            <div key={i} className="col-lg-4 col-sm-6">
                                <div className="project-box">
                                    <div className="project-thumb">
                                        <div className="thumb bg-img-c" style={{ backgroundImage: "url(" + item.image + ")" }} />
                                    </div>
                                    <div className="project-desc text-center">
                                        <h4><Link to={item.url}>{item.name}</Link></h4>
                                        <p className="text-truncate">{item.description}</p>
                                        <Link to={item.url} className="project-link">
                                            <i className="fal fa-long-arrow-right" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </Fade>
            </div>
        </section>
    );
}

export default Project;