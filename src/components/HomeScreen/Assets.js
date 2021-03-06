import React from 'react';
// import leftImg from "../../assets/images/froup.svg";
// import rightImg from "../../assets/images/froup2.svg";
// import HeadImg from "../../assets/images/Group7.svg";
import Vid4 from "../../assets/images/BNB.svg";
import './index.css';

const HomeScreen = () => {
    return(
    <div className="banner banner-fs has-gfx tc-light __web-inspector-hide-shortcut__">
               
			    <div className="nk-block nk-block-header my-auto">
                    <div className="container ">
                        <div className="row align-items-center justify-content-center justify-content-lg-between gutter-vr-30px">
                            <div className="col-lg-6 order-lg-last">
                                <div className="banner-gfx banner-gfx-auto mt-small-30">
                                    <img src={Vid4} alt="header"/>
                                </div>
                            </div>
                            <div className="col-xl-5 col-lg-6 col-sm-10 text-left text-lg-left">
                                <div>
                                    <p className="blockHead"> Explore Binance Coin potentials</p>
                                </div>
                                <div className="banner-caption">
                                    <h1 className="title title-lg ttu">Earn Binance Coin</h1>
                                    <p className="lead">EOSIS is a protocol designed for fast and free blockchain applications. Learn how it works and earn EOS to try out for yourself.</p>
                                    <div className="cpn-action">
                                        <a className="btn" href="/">START COURSE</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                  
                </div>
                <div className="container">
                      <div className="row align-items-center justify-content-center justify-content-lg-between gutter-vr-30px" style={{paddingBottom:"50px"}}>
                        <div className="col-lg-3 col-sm-6 col-6">
                          <div className="cmc-price">
                          <h3>
                          4,337,145,658 USD 
                          </h3> 
                          <small>Market cap</small>
                          </div>
                        </div>

                        <div className="col-lg-3 col-sm-6 col-6">
                          <div className="cmc-price">
                          <h3>
                          223,725,920 USD 
                          </h3> 
                          <small>Volume(24h)</small>
                          </div>
                        </div>

                        <div className="col-lg-3 col-sm-6 col-6">
                          <div className="cmc-price">
                          <h3>
                          155,536,713 BNB 
                          </h3> 
                          <small>Cirulating supply</small>
                          </div>
                        </div>

                        <div className="col-lg-3 col-sm-6 col-6">
                          <div className="cmc-price">
                          <h3>
                          187,536,713 BNB
                          </h3> 
                          <small>Total supply</small>
                          </div>
                        </div>
                      </div>

                    </div>
            </div>
    )
}
export default HomeScreen;