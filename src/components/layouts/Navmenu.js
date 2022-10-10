import React from 'react';
import { Link, useLocation } from 'react-router-dom'
import services from "../../helpers/serviceHelper"

const getService = (parentId) => {
    let generatedService = []
    for (let service of services) {
        generatedService.push({
            id: parseInt(parentId.toString() + service.id.toString()),
            link: service.url,
            linkText: service.name
        })
    }
    return generatedService
}

const navigationmenu = [
    {
        id: 1,
        link: "/",
        linkText: 'Home'
    },
    {
        id: 2,
        link: '/about',
        linkText: 'About us',
        child: false,
        submenu: [
            {
                id: 21,
                link: '/about',
                linkText: 'About Code On Us'
            },
            {
                id: 22,
                link: '/testimonials',
                linkText: 'Testimonial'
            },
        ]
    },
    {
        id: 3,
        link: '/services',
        linkText: 'Services',
        child: true,
        submenu: getService(3)
    },
    {
        id: 5,
        link: '/portfolio',
        linkText: 'Portfolio',
        child: false,
        submenu: [
            {
                id: 51,
                link: '/portfolio',
                linkText: 'Portfolio'
            },
            {
                id: 52,
                link: '/portfoliotwo',
                linkText: 'Portfolio Two'
            },
            {
                id: 53,
                link: '/portfoliodetail/Business Monitor',
                linkText: 'Portfolio Details'
            },
        ]
    },
    {
        id: 7,
        linkText: 'Contact',
        link: '/contact'
    }
]

const Navmenu = () => {

    const location = useLocation();

    const getNextSibling = (elem, selector) => {
        // Get the next sibling element
        var sibling = elem.nextElementSibling
        // If there's no selector, return the first sibling
        if (!selector) return sibling
        // If the sibling matches our selector, use it
        // If not, jump to the next sibling and continue the loop
        while (sibling) {
            if (sibling.matches(selector)) return sibling
            sibling = sibling.nextElementSibling
        }
    }

    const triggerChild = (e) => {
        let subMenu = ''
        subMenu = (getNextSibling(e.target, '.submenu') !== undefined) ? getNextSibling(e.target, '.submenu') : null
        if (subMenu !== null && subMenu !== undefined && subMenu !== '') {
            subMenu.classList = subMenu.classList.contains('d-block') ? 'submenu' : 'submenu d-block'
        }
    }
    return (
        <ul>
            {navigationmenu.length > 0 ? navigationmenu.map((item, i) => (
                <li key={i} className={`${item.child ? 'has-submemu' : ''} `} onClick={triggerChild}>
                    <Link className={location.pathname === item.link ? "active": ""} to={item.link}> {item.linkText} </Link>{item.child ? <span className="dd-trigger"><i className="fal fa-angle-down"></i></span> : <></>}
                    {item.child ?
                        <ul className="submenu" role="menu">
                            {item.submenu.map((sub_item, i) => (
                                <li key={i} className={`${sub_item.child ? 'has-submemu' : ''} `}>
                                    {sub_item.child ? <> <Link onClick={e => e.preventDefault()} to="/"> {sub_item.linkText} </Link> <span className="dd-trigger"><i className="fal fa-angle-down"></i></span> </> : <Link to={sub_item.link}> {sub_item.linkText} </Link>}
                                    {sub_item.submenu ?
                                        <ul className="submenu">
                                            {sub_item.submenu.map((third_item, i) => (
                                                <li key={i}><Link
                                                    to={third_item.link}>{third_item.linkText}</Link>
                                                </li>
                                            ))}
                                        </ul> : null}
                                </li>
                            ))}
                        </ul>
                        : null
                    }
                </li>
            )) : null}
        </ul>
    )
}

export default Navmenu;