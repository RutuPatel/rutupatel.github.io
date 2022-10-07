import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Backtotop = () => {

    const [isVisible, setIsVisible] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    useEffect(() => {
        const toggleVisibility = () => {
            window.onscroll = function (ev) {
                if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 800)) {
                    setIsVisible(false);
                    return
                }
            }
            if (window.pageYOffset > 500) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);

        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <Link to="#" className={isVisible ? "back-to-top-button" : "d-none"} onClick={scrollToTop}><i className="far fa-angle-up" /></Link>
    )
}

export default Backtotop