import React from 'react';
import leftImg from "../../assets/images/froup.svg";
import rightImg from "../../assets/images/froup2.svg";
import HeadImg from "../../assets/images/Group7.svg";

const HomeScreen = () => {
    return(
    <div className="banner banner-fs has-gfx tc-light __web-inspector-hide-shortcut__">
               
            
			    <div className="nk-block nk-block-header my-auto">
                    <div className="container ">
                        <div className="row align-items-center justify-content-center justify-content-lg-between gutter-vr-30px">
                            <div className="col-lg-6 order-lg-last">
                                <div className="banner-gfx banner-gfx-auto mt-small-30">
                                    <img src={HeadImg} alt="header"/>
                                </div>
                            </div>
                            <div className="col-xl-5 col-lg-6 col-sm-10 text-left text-lg-left">
                                <div>
                                    <p className="blockHead"> Explore Blockchain Potentials</p>
                                </div>
                                <div className="banner-caption">
                                    <h1 className="title title-lg ttu">Learn about crypto and earn tokens</h1>
                                    <p className="lead">Discover how specific crypto currencies work - and get a bit of each to tryout yourself </p>
                                    <div className="cpn-action">
                                        <a className="btn" href="#">GET STARTED ITS FREE</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                

                <div className="left-bars"><img src={rightImg} alt="rightbars"/></div>
                <div className="right-bars"><img src={leftImg} alt="rightbars"/></div>
                
                

                
                <div className="nk-block nk-block-actions">
                    <div className="container" style={{marginBottom: "30px"}}>
                        <div className="row gutter-vr-40px align-items-center">                            
                            <div className="col-md-6 d-flex justify-content-center justify-content-sm-start">
                                
                                <ul className="btn-grp btn-grp-break justify-content-center justify-content-sm-start gutter-vr-20px">
                                    <li><a href="https://www.youtube.com/watch?v=SSo_EIwHSd4" className="link link-break video-popup"><em className="icon-circle icon-border icon-animation fas fa-play"></em><span>How it Works</span></a></li>
                                    <li><a href="#" className="link link-break"><em className="icon-circle icon-border far fa-lightbulb"></em><span>Why buy Tokens now?</span></a></li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
                
            </div>
    )
}
export default HomeScreen;