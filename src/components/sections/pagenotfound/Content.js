import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Content extends Component {
    render() {
        return (
            <section class="error-page">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-12">
                            <div class="error-page__inner">
                                <h2 class="error-page__title">404</h2>
                                <h3 class="error-page__tagline">Sorry We Can't Find That Page!</h3>
                                <p class="error-page__text">
                                    The page you are looking for was moved, removed, renamed or
                                    never existed.
                                </p>
                                <div className="view-moore-btn text-md-center mt-50">
                                    <Link to="/" className="main-btn">Back To Home</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Content;