import React from 'react';
// import "./hyve.css";
import {Link} from "react-router-dom";
import {Tabs, Icon} from 'antd';

const {TabPane} = Tabs;

const Airdrop = () => {
    return (
        <section
            className="section"
            id="mvp"
            style={{
            paddingTop: "30px",
            overflow: "inherit",
            background: 'rgb(29, 101, 113)'
        }}>

            {/* <div className="ard-2">
                    <img src="assets/images/MaskGroup6.svg"/>
                </div> */}
            {/* <div className="ard-1"><img src="assets/images/MaskGroup3.svg"/></div> */}

            <div
                className="container container-xxl"
                style={{
                position: "relative"
            }}>
                <div className="nk-block">
                    <div
                        className="row justify-content-center justify-content-xl-between gutter-vr-30px">

                        <div
                            className=" col col-xl-8 col-lg-8 col-sm-10 text-left text-lg-left col-12 offset-xl-2 offset-lg-2">
                            <div className="">
                                <Tabs defaultActiveKey="3">
                                    <TabPane tab={< span > <Icon type="apple"/>Tab 1 < /span>} key="1">
                                        Tab 1
                                    </TabPane>
                                    <TabPane tab={< span > <Icon type="android"/>Tab 2 < /span>} key="2">
                                        Tab 2
                                    </TabPane>

                                    <TabPane tab={< span > <Icon type="android"/>Tab 2 < /span>} key="2">
                                        Tab 2
                                    </TabPane>
                                </Tabs>

                            </div>
                        </div>
                        <div className=" col col-lg-7 order-last">
                            <div className="money-bg">
                                <div className="head-money">
                                    <Link>My Activities</Link>
                                    <Link>More<span className="ti ti-angle-right"></span>
                                    </Link>
                                </div>

                                <div class="subscribe-wrap bg-grad tc-light round">
                                    <div class="section-head section-head-sm wide-auto-sm text-center">
                                        <h4 class="title title-sm">Earn $10 DCH on referral</h4>
                                        <p class="text-white">refere a friend to earnathon and earn $10 DCH to jolly</p>
                                    </div>
                                    <form action="#" class="field-inline field-inline-s2  bg-white shadow-soft">
                                        <div class="field-wrap">
                                            <input class="input-solid" type="text" value="Earnathon.com/user/etydheydyehd"/>
                                        </div>
                                        <div class="">
                                            <button class="btn btn-secondary">Copy
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>

                        </div>
                        {/* <div className="col-xxl-5 col-xl-6 col-lg-8">
                                <div className="nk-block-text">
                                    <div className="feature ">
                                        <h2 className="title title-xl" title="Advisors">Earnathon is redefining airdrop</h2>
                                        <div className="feature-text">
                                            <p style={{color: "white"}}>Pay Bounties to airdrop paricipants who learn about your project not just radomly paying bounties and expecting a blah blah blah</p>
                                        </div>
                                    </div>

                                    <div className="text-center text-sm-left animated fadeInUp" >
                                        <Link to="/" className="btn">Learn More</Link>
                                    </div>

                                </div>
                            </div> */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Airdrop;