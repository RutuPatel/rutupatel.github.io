import React, { useState, useEffect } from 'react'
import { Fade } from 'react-reveal'
import { useNavigate, useLocation } from 'react-router-dom'
import thumb from '../../../assets/img/portfoliodetail/project-big-img.jpg'

import { projects } from '../../../helpers/projectHelper'

const Details = () => {
    const location = useLocation()
    const { projectId } = location.state
    const navigate = useNavigate();
    const [project, setproject] = useState({})

    useEffect(() => {
        const project = projects.find(item => item.id === projectId)
        setproject(project)
    }, [projectId])

    const getPreviousProject = (dataItem) => {
        const currentIndex = projects.findIndex(item => item.id === dataItem.id)
        const project = projects[currentIndex - 1]
        navigate(project.url, { state: { projectId: project.id } })
    }

    const getNextProject = (dataItem) => {
        const currentIndex = projects.findIndex(item => item.id === dataItem.id)
        const project = projects[currentIndex + 1]
        navigate(project.url, { state: { projectId: project.id } });
    }

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
                                    <Fade right cascade>
                                        <div className="row justify-content-center">
                                            {project.galleryimages.map((item, i) => (
                                                <div key={i} className="col-md-4 col-sm-6 text-center">
                                                    <img src={item.img} alt="" />
                                                </div>
                                            ))}
                                        </div>
                                    </Fade>
                                </div>
                            </div>
                        }
                    </div>
                    <div className="d-flex border-top py-4 border-bottom mt-50">
                        <div className="mr-auto p-2">
                            <button
                                disabled={projects[0].url === project.url}
                                onClick={() => getPreviousProject(project)}
                                className='previous-next-button'
                            >
                                <i className='far fa-arrow-left pr-3'></i>Previous
                            </button>
                        </div>
                        <div className="p-2">
                            <button
                                disabled={projects[projects.length - 1].url === project.url}
                                onClick={() => getNextProject(project)} className='previous-next-button'>
                                Next<i className='far fa-arrow-right pl-3'></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Details;