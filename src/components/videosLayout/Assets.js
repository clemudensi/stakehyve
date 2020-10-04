import React from 'react';
import "./vids.css";
// import Vid1 from "../../assets/images/eoslearn.svg";
import Vid5 from "../../assets/images/302.svg";
import Vid2 from "../../assets/images/EOSl.svg";
import Vid3 from "../../assets/images/Group3.svg";
// import StellarIcon from "../../assets/images/Stellar.svg";
import Vid4 from "../../assets/images/Phone.svg";
import {Link} from "react-router-dom";

import "./assets.css";


const AssetsVideo = () => {

    return(
        <section className="section section-l" style={{
            overflow: "relative"
        }}>

                <div className="container">
                    <div className="row justify-content-left text-left">
                        <div className="">
                            <div className="section-head section-head-s2">
                                <h2 className="title blockHead">BINANCE LESSONS</h2>
                                <p>Watch and Learn about Binance and the Binance Coin ecosystem</p>
                            </div>
                        </div>
                    </div>
                </div>

               
                   <div className="container container-xxl">
                    <div className="nk-block">
                        <div className="row align-items-center justify-content-center justify-content-xl-between gutter-vr-30px yala">
                            <div className="col-xxl-6 col-xl-6 col-lg-8">
                                <div className="" style={{width: "380px"}}>
                                    <img className="" src={Vid4} alt="video"/>
                                   
                                </div>
                            </div>
                            <div className="col-xxl-5 col-xl-6 col-lg-8">
                                <div className="nk-block-text adjs">
                                        <div>
                                            <span className="lessons">Lesson 1</span>
                                        </div>
                                        <div style={{marginTop: "12px"}}>
                                            <h3>Binance Coin</h3>
                                        </div>
                                        
                                        <div className="feature-text">
                                            <p>Stellar is a platform that connects banks, payment systems, and people. Learn how it works and you’ll earn XLM.</p>
                                        </div>

                                    <div className="text-center text-sm-left card-de">
                                        <Link href="" className="btn">Earn $1 BNB</Link>
                                        2 minutes
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
              
                    <div className="container container-xxl" >
                    <div className="nk-block">
                        <div className="row align-items-center justify-content-center justify-content-xl-between gutter-vr-30px yala">
                            <div className="col-xxl-6 col-xl-6 col-lg-8">
                                <div className="" style={{width: "380px"}}>
                                     <img className="shadow rounded" src={Vid2} alt="vid" />
                                   
                                </div>
                            </div>
                            <div className="col-xxl-5 col-xl-6 col-lg-8">
                                <div className="nk-block-text adjs">
                                        <div>
                                        <span className="lessons">Lesson </span>
                                        </div>
                                        <div style={{marginTop: "11px"}}>
                                            <h3>Binance Labs</h3>
                                        </div>
                                        
                                        <div className="feature-text">
                                            <p  >Stellar is a platform that connects banks, payment systems, and people. Learn how it works and you’ll earn XLM.</p>
                                        </div>

                                    <div className="text-center text-sm-left card-de">
                                        <Link to="/" className="btn">Earn $5 BNB</Link>
                                        3 minutes
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
              
                    <div className="container container-xxl" >
                    <div className="nk-block">
                        <div className="row align-items-center justify-content-center justify-content-xl-between gutter-vr-30px yala">
                            <div className="col-xxl-6 col-xl-6 col-lg-8">
                                <div className="" style={{width: "380px"}}>
                                    <img className="shadow rounded" src={Vid5} alt="vid"/>
                                   
                                </div>
                            </div>
                            <div className="col-xxl-5 col-xl-6 col-lg-8" >
                                <div className="nk-block-text adjs">
                                        <div>
                                        <span className="lessons">Lesson 1</span>
                                        </div>
                                        <div style={{marginTop: "11px"}}>
                                            <h3>Binance Charity</h3>
                                        </div>
                                        
                                        <div className="feature-text">
                                            <p>Stellar is a platform that connects banks, payment systems, and people. Learn how it works and you’ll earn XLM.</p>
                                        </div>

                                    <div className="text-center text-sm-left card-de">
                                        <Link to="/" className="btn">Begin Course</Link>
                                        Earn $100 XLM
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                  <div className="container container-xxl">
                    <div className="nk-block">
                        <div className="row align-items-center justify-content-center justify-content-xl-between gutter-vr-30px yala">
                            <div className="col-xxl-6 col-xl-6 col-lg-8">
                                <div className=" " >
                                    <img className="shadow rounded" src={Vid3} alt="video"/>
                                   
                                </div>
                            </div>
                            <div className="col-xxl-5 col-xl-6 col-lg-8" >
                                <div className="nk-block-text adjs">
                                        <div>
                                        <span className="lessons">Lesson 3</span>
                                        </div>
                                        <div style={{marginTop: "11px"}}>
                                            <h3>Binance Dex</h3>
                                        </div>
                                        
                                        <div className="feature-text" >
                                            <p>Stellar is a platform that connects banks, payment systems, and people. Learn how it works and you’ll earn XLM.</p>
                                        </div>

                                    <div className="text-center text-sm-left card-de">
                                        <Link to="/" className="btn">Earn $20 BNB</Link>
                                        3 minutes
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="ard-4"><img src="assets/images/MaskGroup6.svg"/></div> */}
             

      </section>
    )
}

export default AssetsVideo;