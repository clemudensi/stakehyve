import React from 'react';
import leftImg from "../../assets/images/froup.svg";
import rightImg from "../../assets/images/froup2.svg";
import HeadImg from "../../assets/images/Group7.svg";
import startup from '../../assets/images/startup.svg';
import wallet from '../../assets/images/wallet.svg';
import edit from '../../assets/images/edit.svg';
import {Link} from 'react-router-dom';
import "./index.css";

const HomeScreen = () => {
    return (
        <div
            className="banner banner-fs has-gfx tc-light __web-inspector-hide-shortcut__">

            <div className="nk-block nk-block-header my-auto">
                <div className="container ">
                    <div className="hero-announcement">
                        <Link to="https://cryptotvplus.com" className="hero-announcement__content">
                            <span className="badge2 hero-announcement__badge">News</span>
                            <span role="img" aria-label="sheep">🎉</span>
                            New Course Added : Learn About Desmond Elliot →
                        </Link>
                    </div>
                    <div
                        className="row align-items-center justify-content-center justify-content-lg-between gutter-vr-30px">
                        <div className="col-lg-6 order-lg-last">
                            <div className="banner-gfx banner-gfx-auto mt-small-30">
                                <img src={HeadImg} alt="header"/>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-6 col-sm-10 text-left text-lg-left">
                            <div>
                                <p className="blockHead">
                                    Explore Blockchain Potentials</p>
                            </div>
                            <div className="banner-caption">
                                <h1 className="title title-lg ttu">Learn about crypto and earn tokens</h1>
                                <p className="lead">Discover how specific crypto currencies work - and get a bit
                                    of each to tryout yourself
                                </p>
                                <div className="cpn-action">
                                    <Link to="/signup" className="btn light-blue">
                                        <span>GET STARTED ITS FREE</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="left-bars"><img src={rightImg} alt="rightbars"/></div>
            <div className="right-bars"><img src={leftImg} alt="leftbars"/></div>

            <div className="nk-block nk-block-actions">
                <div
                    className="container"
                    style={{
                    marginBottom: "30px"
                }}>
                    <div className="row gutter-vr-40px align-items-center">
                        <div
                            className="col-md-6 d-flex justify-content-center justify-content-sm-start">

                            <ul
                                className="btn-grp btn-grp-break justify-content-center justify-content-sm-start gutter-vr-20px">
                                <li>
                                    <Link
                                        to="https://www.youtube.com/watch?v=SSo_EIwHSd4"
                                        className="link link-break video-popup">
                                        <em className="icon-circle icon-border icon-animation fas fa-play"></em>
                                        <span>How it Works</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/" className="link link-break">
                                        <em className="icon-circle icon-border far fa-lightbulb"></em>
                                        <span>Why buy Tokens now?</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>

            <section className="section bg-theme section-l">

                <div className="container">
                    {/* <h3 className="text-center title">Why use earnathon</h3> */}
                    <div className="nk-block nk-block-features mgb-m30 text-center">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="feature feature-block">
                                    <div className="feature-icon dot margin-auto">
                                    <img src={edit} alt="flag"></img>
                                    </div>
                                    <div className="feature-text">
                                        <h5 className="title title-sm">Laern About Crypto</h5>
                                        <p className="fix-pad">Tempore, cum soluta nobis est eligendi optiocum que nihil
                                            maxime placeat facere possimus.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="feature feature-block">
                                    <div className="feature-icon dot margin-auto">
                                    <img src={wallet} alt="flag"></img>
                                    </div>
                                    <div className="feature-text">
                                        <h5 className="title title-sm">Earn Crypto</h5>
                                        <p className="fix-pad">Placeat facere possimus, omnis voluptas assum enda est, omnis dolor repellendus.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="feature feature-block">
                                    <div className="feature-icon dot margin-auto ">
                                        <img src={startup} alt="flag"></img>
                                    </div>
                                    <div className="feature-text">
                                        <h5 className="title title-sm">Promote your brand</h5>
                                        <p className="fix-pad">Nam libero tempore, cum soluta nobis est optio cumque
                                            nihil impedit quo minus id quod.</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </section>

        </div>
    )
}
export default HomeScreen;