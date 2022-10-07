import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { categories } from '../../../helper/projectHelper'
import { projects } from '../../../helper/projectHelper'

const Blocks = () => {

    const [filterProject, setFilterProject] = useState(projects)

    const handleCategory = (name) => {
        let newFilterProjects = []
        if (name === "All Project") {
            newFilterProjects = projects
        } else {
            newFilterProjects = projects.filter(
                (project, i) => project.category.includes(name)
            )
        }

        const index = categories.map(function (e) { return e.name }).indexOf(name)
        if (index >= 0) {
            categories.forEach(item => {
                item.isActive = false
            })
            categories[index].isActive = true
        }
        setFilterProject(newFilterProjects)
    }

    const renderAll = filterProject.map((project, i) => (
        <div key={i} className="isotope-item col-lg-4 col-sm-6">
            <div className="project-box hover-style">
                <div className="project-thumb">
                    <div className="thumb bg-img-c" style={{ backgroundImage: "url(" + project.image + ")" }} />
                </div>
                <div className="project-desc text-center">
                    <h4><Link to={`/portfoliodetail/${project.name}`}>{project.name}</Link></h4>
                    <p>{project.description}</p>
                    <Link to={`/portfoliodetail/${project.name}`} className="project-link">
                        <i className="fal fa-long-arrow-right" />
                    </Link>
                </div>
            </div>
        </div>
    ))
    return (
        <section className="project-section">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-12 col-md-12">
                        <ul className="project-nav project-isotope-filter">
                            {categories.map(({ name, value, isActive }) => (
                                <li key={name} value={value} className={isActive === true ? 'active' : ''} onClick={() => handleCategory(name)}>{name}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                {/* Project Boxes */}
                <div className="row project-boxes project-isotope mt-60">
                    {renderAll}
                </div>
            </div>
        </section>
    );
}

export default Blocks;