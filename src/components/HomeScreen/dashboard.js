import React from 'react';
// import leftImg from "../../assets/images/froup.svg";
// import rightImg from "../../assets/images/froup2.svg";
// import HeadImg from "../../assets/images/Group7.svg";
import Vid4 from "../../assets/images/BNB.svg";
import './assets.css';

const HomeScreen = () => {
    return(
    <div className="banner banner-fs has-gfx tc-light __web-inspector-hide-shortcut__">
               {/* <div className="container">
               <div className="row" style={{float: "right"}}>
				<a href="" style={{float: "right !important", background: "rgb(0, 197, 127)"}} className="btn"><i className="ti ti-gift"> </i> Invite friends earn 200swx</a>
			</div> */}
               {/* </div> */}
			    <div className="nk-block nk-block-header my-auto">
                    <div className="container ">
                        <div className="row align-items-center justify-content-center justify-content-lg-between gutter-vr-30px">
                        {/* <div className=""> */}
                        <div className=" col col-lg-7 order-last">
                            <div className="money-bg">
                                <div className="head-money">
                                    <a>Active Courses</a>
                                    <a>More<span className="ti ti-angle-right"></span></a>
                                </div>
                                <table className="table ">
                                <tbody>
                                    <tr>
                                        <td className="table-head">Public Sale Starts</td>
                                        <td className="table-des">15th Nov 2018 12:00 GMT</td>
                                    </tr>
                                    <tr>
                                        <td className="table-head">Public Sale Ends</td>
                                        <td className="table-des">14th Dec 2018 12:00 GMT</td>
                                    </tr>
                                    <tr>
                                        <td className="table-head">Total Token Supply</td>
                                        <td className="table-des">500,000,000</td>
                                    </tr>
                                    <tr>
                                        <td className="table-head">Tokens Allocated for ICO</td>
                                        <td className="table-des">350,000,000</td>
                                    </tr>
                                    <tr>
                                        <td className="table-head">Hard Cap</td>
                                        <td className="table-des">$4.75m</td>
                                    </tr>
                                    <tr>
                                        <td className="table-head">Soft Cap</td>
                                        <td className="table-des">$1.75m</td>
                                    </tr>
                                    <tr>
                                        <td className="table-head">Token Value</td>
                                        <td className="table-des">1 ETH = 1,000 ICOX</td>
                                    </tr>
                                    <tr>
                                        <td className="table-head">Accepted</td>
                                        <td className="table-des">ETH, BTC</td>
                                    </tr>
                                </tbody>
                            </table>
                                <div className=" money-d">
                                  <div className="" style={{display: "flex"}}>
                                      <div className="col-md-4 col-lg-4">
                                        <div>
                                            <img src={Vid4} alt="vide" />
                                        </div>
 
                                      </div>
                                      <div className="col-md-5 col-lg-5">
                                        <div>
                                           <p>Video man</p>
                                        </div>
 
                                      </div>
                                      <div className="col-md-3 col-lg-3">
                                        <div>
                                            expores
                                        </div>
 
                                      </div>
                                  </div>

                                  
                                  
                                </div>
                                </div>
                               
                            </div>
                            
                            <div className=" col col-xl-4 col-lg-5 col-sm-10 text-left text-lg-left">
                                <div className="money-bg">
                                <div className="head-money">
                                    <a>Balance</a>
                                    <a>More<span className="ti ti-angle-right"></span></a>
                                </div>
                                <div className=" money-d">
                                     <p className="money-avail"><i>Available </i></p>
                                    <h1 className="title title-lg ttu balance">$10 USD</h1>
                                    <p className="lead"> wihdraw</p>
                                    {/* <div className="cpn-action">
                                        <a className="btn" href="/">START COURSE</a>
                                    </div> */}
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                  {/* </div> */}
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