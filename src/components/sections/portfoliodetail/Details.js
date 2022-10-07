import React from 'react'
import { useParams } from 'react-router-dom'
import thumb from '../../../assets/img/details/project-big-img.jpg'

import { projects } from '../../../helper/projectHelper'

const Details = () => {
    const { portfolio: projectName } = useParams()
    const project = projects.find(item => item.name === projectName)
    return (
        <section className="project-details section-gap">
            <div className="container">
                <div className="project-thumb">
                    <img src={thumb} alt="" />
                </div>
                <div className="project-content mt-60">
                    <div className="row">
                        <div className="col-lg-8 order-2 order-lg-2">
                            <div className="content">
                                <h2>{project.name}</h2>
                                <p>
                                    {project.description}
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 order-1 order-lg-2">
                            <div className="details">
                                <ul>
                                    <li>
                                        <h3>Project Name</h3>
                                        <p>{project.name}</p>
                                    </li>
                                    <li>
                                        <h3>Clients Name</h3>
                                        <p>Logan Parkinson</p>
                                    </li>
                                    <li>
                                        <h3>Project Date</h3>
                                        <p>25 Aug 2020</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {
                            project.galleryimages &&
                            <div className="col-12 order-3">
                                <div className="thumbs">
                                    <div className="row justify-content-center">
                                        {project.galleryimages.map((item, i) => (
                                            <div key={i} className="col-md-4 col-sm-6 text-center">
                                                <img src={item.img} alt="" />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Details;