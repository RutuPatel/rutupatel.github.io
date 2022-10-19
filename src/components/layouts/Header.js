import React, { Fragment, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Navmenu from './Navmenu';
import OffCanvas from './Offcanvas';
import logo from "../../assets/img/logo/codeonus4.jpg"
import logo2 from "../../assets/img/logo/codeonus2.jpg"  


const Headerthree = () => {

    const location = useLocation()

    const [state, setstate] = useState({
        togglemethod: false,
        classmethod: false,
        windowSize: "",
        stickyheader: 0,
        matches: window.matchMedia("(max-width: 992px)").matches
    })

    useEffect(() => {
        window.addEventListener("load", handleResize);
        window.addEventListener("resize", handleResize);
        window.addEventListener("scroll", handleScroll);
        window.matchMedia("(max-width: 992px)").addListener(handlerLoad);
        return () => {
            window.removeEventListener("load", handleResize);
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("scroll", handleScroll);
        }
    }, [])

    // Navigation
    const toggleClass = () => {
        setstate(prevState => ({
            ...prevState,
            togglemethod: !state.togglemethod
        }))
    }

    // Canvas
    const canvasToggle = () => {
        setstate(prevState => ({
            ...prevState,
            classmethod: !state.classmethod
        }))
    }

    const handleResize = () => {
        const windowWidthSize = window.innerWidth;
        const thumbWidth = (windowWidthSize < 992);
        setstate(prevState => ({
            ...prevState,
            windowWidthSize,
            thumbWidth
        }))
    }

    const handleScroll = () => {
        const windowHeightSize = window.scrollY;
        const stickyheader = (windowHeightSize > 110);
        setstate(prevState => ({
            ...prevState,
            stickyheader
        }))
    };

    const handlerLoad = (e) => {
        setstate(prevState => ({
            ...prevState,
            matches: e.matches
        }))
    }

    const mobileactive = state.matches ? 'breakpoint-on' : '';
    const smallmobileactive = state.matches ? 'd-none' : '';
    const stickyheader = state.stickyheader ? 'sticky-on' : '';
    const customerHeader = location.pathname !== "/" && stickyheader === "" ? "customHeader " : "";

    return (
        <Fragment>
            <header className={`${customerHeader}header-three sticky-header ${stickyheader}`}>
                {/* Header Menu  */}
                <div className="header-nav">
                    <div className="container container-1600">
                        <div className={`nav-container ${mobileactive}`}>
                            {/* Site Logo */}
                            <div className="site-logo">
                                <Link to="/"><img src={(location.pathname === "/" && stickyheader !== "sticky-on") ? logo : logo2} alt="Logo" /></Link>
                            </div>
                            {/* Main Menu */}
                            <div className={state.togglemethod === true ? 'nav-menu d-lg-flex align-items-center menu-on' : 'nav-menu d-lg-flex align-items-center'}>
                                {/* Navbar Close Icon */}
                                <div className="navbar-close" onClick={toggleClass}>
                                    <div className="cross-wrap"><span /><span /></div>
                                </div>
                                {/* Mneu Items */}
                                <div className="menu-items">
                                    <Navmenu />
                                </div>
                                {/* Pushed Item */}
                                <div className="nav-pushed-item" />
                            </div>
                            {/* Navbar Extra  */}
                            <div className="navbar-extra d-flex align-items-center">
                                {/* Social Link */}
                                <div className={`menu-social nav-push-item ${smallmobileactive}`}>
                                    <div className="menu-social-link">
                                        <Link to="#"><i className="fab fa-facebook-f" /></Link>
                                        <Link to="#"><i className="fab fa-twitter" /></Link>
                                        {/* <Link to="#"><i className="fab fa-instagram" /></Link> */}
                                        {/* <Link to="#"><i className="fab fa-behance" /></Link> */}
                                        {/* <Link to="#"><i className="fab fa-dribbble" /></Link> */}
                                        <Link to="#"><i className="fab fa-linkedin" /></Link>
                                        <Link to="#"><i className="fab fa-google" /></Link>
                                    </div>
                                </div>
                                {/* off canvas menu toggler*/}
                                <div className="offcanvas-toggler" onClick={canvasToggle}>
                                    <span><span /><span /><span /></span>
                                </div>
                                {/* Navbar Toggler */}
                                <div className={state.togglemethod === true ? 'navbar-toggler active' : 'navbar-toggler'} onClick={toggleClass}>
                                    <span /><span /><span />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div className={state.classmethod === true ? 'offcanvas-wrapper show-offcanvas' : 'offcanvas-wrapper'}>
                <div className={state.classmethod === true ? 'offcanvas-overly show-overly' : 'offcanvas-overly'} onClick={canvasToggle} />
                <div className="offcanvas-widget">
                    <Link to="#" className="offcanvas-close" onClick={canvasToggle} ><i className="fal fa-times" /></Link>
                    <OffCanvas />
                </div >
            </div >
        </Fragment>
    );
}

export default Headerthree;