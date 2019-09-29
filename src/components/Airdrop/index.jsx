import React from 'react';
import "./airdrop.css";
import {Link} from "react-router-dom";
import Mask from "../../assets/images/MaskGroup3.svg";


const Airdrop = () => {
    return(
    <section className="section" id="mvp" style={{paddingTop: "30px",overflow: "hidden", background: 'rgb(23, 29, 35)'}}>

               
                {/* <div className="ard-2">
                    <img src="assets/images/MaskGroup6.svg"/>
                </div> */}
                <div className="ard-1"><img src={Mask} alt="mask"/></div>

                <div className="container container-xxl" style={{position: "relative"}}>
                    <div className="nk-block">
                        <div className="row align-items-center justify-content-center justify-content-xl-between gutter-vr-30px">

                            <div className="col-xxl-6 col-xl-6 col-lg-8">
                                <div className="nk-block-img nk-block-plx ">
                                    <img className="" src="assets/images/Layer11.svg" alt=""/>
                    
                                </div>
                            </div>
                            <div className="col-xxl-5 col-xl-6 col-lg-8">
                                <div className="nk-block-text">
                                    <div className="feature ">
                                        <h2 className="title title-xl" title="Advisors">Earnathon is redefining airdrop</h2>
                                        <div className="feature-text">
                                            <p style={{color: "white"}}>Pay Bounties to airdrop paricipants who learn about your project not just radomly paying bounties and expecting a blah blah blah</p>
                                        </div>
                                    </div>
                                    
                                    <div className="text-center text-sm-left" >
                                        <Link to="/Airdrop" className="btn">Learn More</Link>
                                    </div>
                                    {/* visibility: visible; animation-delay: 0.9s; */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                
            </section>
    )
}

export default Airdrop;