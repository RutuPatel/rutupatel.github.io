import React from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import Fade from 'react-reveal/Fade';

import img2 from '../../../assets/img/banner/02.jpg'
import img3 from '../../../assets/img/banner/03.jpg'
import img4 from '../../../assets/img/banner/04.jpg'

const bannerslide = [
    { img: img2, title: "Take Great Idea To Growth Your  Business", text: 'Sedut perspiciatis unde omnis iste natus error sit voluptatem accusantium /n doloremque laudanti totam raperiaeaque ipsa quaeab', btntext: 'Get Started Now', btntext1: 'Our Services' },
    { img: img3, title: "Take Great Idea To Growth Your  Business", text: 'Sedut perspiciatis unde omnis iste natus error sit voluptatem accusantium /n doloremque laudanti totam raperiaeaque ipsa quaeab', btntext: 'Get Started Now', btntext1: 'Our Services' },
    { img: img4, title: "Take Great Idea To Growth Your  Business", text: 'Sedut perspiciatis unde omnis iste natus error sit voluptatem accusantium /n doloremque laudanti totam raperiaeaque ipsa quaeab', btntext: 'Get Started Now', btntext1: 'Our Services' },
]
const SampleNextArrow = (props) => {
    const { onClick } = props
    return (
        <button className="slick-arrow next-arrow" onClick={onClick}><i className="fal fa-long-arrow-right" /></button>
    )
}

const SamplePrevArrow = (props) => {
    const { onClick } = props
    return (
        <button className="slick-arrow prev-arrow" onClick={onClick}><i className="fal fa-long-arrow-left" /></button>
    )
}
function Banner(props) {
    const settings = {
        infinite: true,
        easing: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 500,
        arrows: true,
        fade: false,
        dots: false,
        swipe: true,
        adaptiveHeight: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [{
            breakpoint: 768,
            settings: {
                arrows: false
            }
        }],
    }

    return (
        <section className="banner-section banner-section-two">
            <Slider className="banner-slider" id="bannerSlider" {...settings}>
                {bannerslide.map((item, i) => (
                    <div key={i}>
                        <div className="single-banner" style={{ backgroundImage: "url(" + item.img + ")" }}>
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-10">
                                        <div className="banner-content text-center">
                                            <Fade top delay={600}>
                                                <h1>{item.title}</h1>
                                            </Fade>
                                            <Fade bottom delay={800}>
                                                <p>{item.text} </p>
                                            </Fade>
                                            <ul className="btn-wrap">
                                                <Fade left className="d-inline-block" delay={1000}>
                                                    <li>
                                                        <Link to="/careers" className="main-btn main-btn-4">{item.btntext}</Link>
                                                    </li>
                                                </Fade>
                                                <Fade right className="d-inline-block" delay={1200}>
                                                    <li>
                                                        <Link to="/service" className="main-btn main-btn-2">{item.btntext1}</Link>
                                                    </li>
                                                </Fade>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </section>
    );
}

export default Banner;