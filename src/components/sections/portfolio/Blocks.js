import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import services from '../../../helpers/serviceHelper'
import { projects } from '../../../helpers/projectHelper'

let categories = [
    ...[{
        id: 0,
        name: "All",
        isActive: true
    }],
    ...services
]

const Blocks = () => {

    const [filterProject, setFilterProject] = useState(projects)
    const [searchkeyword, setsearchkeyword] = useState("")

    const handleCategory = (name) => {
        let newFilterProjects = []
        if (name === "All") {
            newFilterProjects = projects
        } else {
            newFilterProjects = projects.filter((project, i) => project.category === name)
        }
        const index = categories.findIndex(item => item.name === name)
        if (index >= 0) {
            categories.forEach(item => {
                item.isActive = false
            })
            categories[index].isActive = true
        }
        setFilterProject(newFilterProjects)
    }

    const searchProject = (value) => {
        let newFilterProjects = projects
        if (value.trim() !== "") {
            newFilterProjects = projects.filter(project => project.name.toLowerCase().includes(value.toLowerCase()))
        }
        setFilterProject(newFilterProjects)
    }

    const handleSearch = (event) => {
        let searchkeyword = event.target.value
        setsearchkeyword(searchkeyword)
        searchProject(searchkeyword)
    }

    const renderAll = filterProject.map((project, i) => (
        <div key={i} className="col-lg-4 col-md-6 col-12" >
            <div className="latest-post-box-two">
                <div className="post-thumb-wrap">
                    <div className="post-thumb bg-img-c" style={{ backgroundImage: "url(" + project.image + ")" }}>
                    </div>
                    <span className="post-date"><i className="far fa-calendar-alt" />{project.projectdate}</span>
                </div>
                <div className="post-desc">
                    <h3 className="title">
                        <Link to={project.url} state={{ projectId: project.id }}>{project.name}</Link>
                    </h3>
                    <p className="truncate">{project.description}</p>
                    <Link to={project.url} state={{ projectId: project.id }} className="post-link">
                        Learn More<i className="far fa-long-arrow-right" />
                    </Link>
                </div>
            </div>
        </div>
    ))

    return (
        <section className="project-section">
            <div className="container">
                <div className="sidebar">
                    <div className="widget search-widget">
                        <form onSubmit={e => e.preventDefault()}>
                            <input
                                onChange={handleSearch}
                                value={searchkeyword}
                                type="text"
                                placeholder="Search Project"
                            />
                            <button><i className="fas fa-search"></i></button>
                        </form>
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col-lg-12 col-md-12">
                        <ul className="project-nav project-isotope-filter">
                            {categories.map(({ name, isActive }, i) => (
                                <li key={i} className={isActive === true ? 'active' : ''} onClick={() => handleCategory(name)}>{name}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                {/* Project Boxes */}
                <div className="latest-post-loop row mt-50">
                    {renderAll}
                </div >
            </div>
        </section>
    );
}

export default Blocks;