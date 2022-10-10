import React from 'react'
import { Fade } from 'react-reveal'

import processbg1 from '../../../assets/img/illustration/work-in-process.png'

const processlist = [
    { icon: 'fal fa-coffee', number: '01', title: 'Have A Coffee', text: 'Doloremque laudantium totam raperiaeaqu ipsa quae ab illo inventore veritatis etquasi' },
    { icon: 'fal fa-coffee', number: '02', title: 'Meet With Advisors', text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantiumdoloremque' },
    { icon: 'fal fa-coffee', number: '03', title: 'Achieve Your Goals', text: 'Quis autem vel eum iure reprehenderit qui ieas voluptate velit esse quam nihil mole' },
]

const Workingprocess = (props) => {

    return (
        <section className="working-process-section grey-bg">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-6 col-md-10 order-lg-1 order-2">
                        <div className="process-text">
                            {/* Section Title */}
                            <div className="section-title left-border mb-30">
                                <span className="title-tag">Working Process</span>
                                <h2 className="title">How Dose We Works</h2>
                            </div>
                            <p>
                                Sedut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                                laudantium
                            </p>
                            {/* process-loop */}
                            <Fade bottom cascade>
                                <div className="process-loop">
                                    {processlist.map((item, i) => (
                                        <div key={i} className="single-process wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="400ms">
                                            <div className="icon">
                                                <i className={item.icon} />
                                                <span>{item.number}</span>
                                            </div>
                                            <div className="content">
                                                <h4>{item.title}</h4>
                                                <p>{item.text}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </Fade>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-10 order-lg-2 order-1">
                        <div className="process-video bg-img-c" style={{ backgroundImage: "url(" + processbg1 + ")" }}>
                        </div>
                    </div>
                </div>
            </div>
            <div className="working-circle" />
        </section>
    );
}

export default Workingprocess;
