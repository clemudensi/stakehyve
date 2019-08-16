import React from 'react';
import './footer.css';

const Footer = () => {
    const date = new Date();
    let currentDate = date.getFullYear();
 return(
    <footer className="nk-footer  has-ovm">
    <section className="section no-pdy section-contact bg-theme has-ovm">
    
        <div className="container">
       
            <div className="nk-block block-contact">
                <div className="row justify-content-center no-gutters">
                    <div className="col-lg-8">
                        <div className="subscribe-wrap bg-foot tc-light round">
                            <div className="section-head section-head-sm wide-auto-sm text-center">
                                <h1 className="title title-md">Get your free account tofay</h1>
                                <p className="text-white">Get started in crypto now made easy</p>
                            </div>
                            {/* <form action="#" className="field-inline field-inline-s2  bg-white shadow-soft"> */}
                                {/* <div className="field-wrap">
                                    <input className="input-solid" type="text" placeholder="Enter your email"/>
                                </div> */}
                                <div className="submit-wrap" style={{textAlign:"center"}}>
                                    <button className="btn btn-secondary">Signup Today start </button>
                                </div>
                            {/* </form> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="nk-ovm ovm-top ovm-h-50 bg-l"></div>
        
    </section>
   
    <section className="section section-footer section-l tc-light bg-theme padme-100">
    
        <div className="container">
       
            <div className="nk-block block-footer">
                <div className="row">
                    <div className="col-lg-2 col-sm-4 mb-4 mb-sm-0">
                        <div className="wgs wgs-menu">
                            <h6 className="wgs-title">Products</h6>
                            <div className="wgs-body">
                                <ul className="wgs-links">
                                    <li><a href="#">Courses</a></li>
                                    <li><a href="#">FAQ</a></li>
                                    <li><a href="#">Explore</a></li>
                                    <li><a href="#">Contact Us</a></li>
                                    <li><a href="#">Insights</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 col-sm-4 mb-4 mb-sm-0">
                        <div className="wgs wgs-menu">
                            <h6 className="wgs-title">Company</h6>
                            <div className="wgs-body">
                                <ul className="wgs-links">
                                    <li><a href="#">Terms &amp; Conditions</a></li>
                                    <li><a href="#">Privacy Policy</a></li>
                                    <li><a href="#">About us</a></li>
                                    {/* <li><a href="#">Whitepaper</a></li> */}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 col-sm-4 mb-4 mb-sm-0">
                        <div className="wgs wgs-menu">
                            <h6 className="wgs-title">Socials</h6>
                            <div className="wgs-body">
                                <ul className="wgs-links">
                                    <li><a href="#">Facebook</a></li>
                                    <li><a href="#">Instagram</a></li>
                                    <li><a href="#">Twitter</a></li>
                                    
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 mb-4 mb-lg-0 order-lg-first">
                        <div className="wgs wgs-text">
                            <div className="wgs-body">
                                <a href="./" className="wgs-logo">
                                    <h3>Earnathon</h3>
                                </a>
                                <p>Copyright © {currentDate} Earnathon. <br/> hello@earnathon.com</p>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </section>
    <div className="nk-ovm shape-b"></div>
</footer>
 )
}

export default Footer;