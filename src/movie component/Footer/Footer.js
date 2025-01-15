

import React from 'react';
import "./Footer.css"

const Footer = () => {
    return (
        <>
            <footer className="bg-body-tertiary text-center">
                <div className="container p-4 pb-0">
                    <section className="mb-4">
                        <a
                            data-mdb-ripple-init
                            className="btn text-white btn-floating m-1"
                            style={{ backgroundColor: '#3b5998' }}
                            href="https://www.facebook.com/share/19m4RLSsyH/"
                            role="button"
                        >
                            <i className="fab fa-facebook-f"></i>
                        </a>

                        <a
                            data-mdb-ripple-init
                            className="btn text-white btn-floating m-1"
                            style={{ backgroundColor: '#55acee' }}
                            href="https://x.com/RanitJod?t=KHWzIjv-2UBb0bqn00MCww&s=08"
                            role="button"
                        >
                            <i className="fab fa-twitter"></i>
                        </a>

                        <a
                            data-mdb-ripple-init
                            className="btn text-white btn-floating m-1"
                            style={{ backgroundColor: '#dd4b39' }}
                            href=""
                            role="button"
                        >
                            <i className="fab fa-google"></i>
                        </a>

                        <a
                            data-mdb-ripple-init
                            className="btn text-white btn-floating m-1"
                            style={{ backgroundColor: '#ac2bac' }}
                            href="https://www.instagram.com/ig_ranit25?igsh=OTlrcmt4MjFjb2dq"
                            role="button"
                        >
                            <i className="fab fa-instagram"></i>
                        </a>

                        <a
                            data-mdb-ripple-init
                            className="btn text-white btn-floating m-1"
                            style={{ backgroundColor: '#0082ca' }}
                            href="https://www.linkedin.com/in/ranit-saha-710656341?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                            role="button"
                        >
                            <i className="fab fa-linkedin-in"></i>
                        </a>

                        <a
                            data-mdb-ripple-init
                            className="btn text-white btn-floating m-1"
                            style={{ backgroundColor: '#333333' }}
                            href="https://github.com/Ranit2op"
                            role="button"
                        >
                            <i className="fab fa-github"></i>
                        </a>
                    </section>
                </div>

                <div
                    className="text-center p-3"
                    style={{ backgroundColor: 'rgb(168, 165, 165)' }}
                >
                    © 2025 Copyright:
                    <a className="text-body" href="https://myaccount.google.com/u/1/?hl=en_GB&utm_source=OGB&utm_medium=act&gar=WzEyMF0&nlr=1/">
                       Ranits708@gmail.com
                    </a>
                </div>
            </footer>
        </>
    );
};

export default Footer;


