import React from 'react';
// import "./airdrop.css";
import {Link} from "react-router-dom";
// import Vid4 from "../../assets/images/BNB.svg";
import Vid4 from "../../assets/images/EOS.svg";
// import {Link} from "react-router-dom";

const Airdrop = () => {
    return (
        <section
        className="section"
        id="mvp"
        style={{
        paddingTop: "30px",
        overflow: "inherit",
        background: '#16161b'
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

                    <div className=" col col-xl-4 col-lg-5 col-sm-10 text-left text-lg-left col-12">
                        <div className="">
                            <div>

                                <div className=" money-d">
                                    <div className="head-money">
                                        <Link to="/wallet">Balance</Link>
                                        {/* <Link>More<span className="ti ti-angle-right"></span></Link> */}
                                    </div>
                                    <p className="money-avail">
                                        <i>Available
                                        </i>
                                    </p>
                                    <h1 className="title title-lg ttu balance">$10 USD</h1>
                                    <p className=" explore-vid">
                                        wihdraw<span>→</span>
                                    </p>
                                    {/* <div className="cpn-action">
                                        <Link className="btn" href="/">START COURSE</Link>
                                    </div> */}
                                </div>
                            </div>

                            <div
                                className="container-xxl"
                                style={{
                                marginTop: '30px'
                            }}>
                                <div className="money-d ">
                                    <div className="head-money">
                                        <Link to="/home/courses">Active Courses</Link>
                                        {/* <Link>More<span className="ti ti-angle-right"></span></Link> */}
                                    </div>
                                    <div className="earned">
                                        <h5>Aug 23</h5>
                                        <h6>Completed Quiz</h6>
                                        <p>Earned $2 EOS</p>
                                    </div>

                                    <div className="earned">
                                        <h5>Aug 23</h5>
                                        <h6>Completed Quiz</h6>
                                        <p>Earned $2 EOS</p>
                                    </div>

                                    <div className="earned">
                                        <h5>Aug 23</h5>
                                        <h6>Completed Quiz</h6>
                                        <p>Earned $3 xxML</p>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                    <div className=" col col-lg-7 order-last">
                        <div className="money-bg">
                            <div className="head-money">
                                <Link>My Activities</Link>
                                <Link>More<span className="ti ti-angle-right"></span>
                                </Link>
                            </div>
                            <table className="table ">
                                <tbody>
                                    <tr>
                                        <td className="table-head vid-head">
                                            <p><img src={Vid4} alt="eos"/></p>
                                            <span>EOS POS</span>
                                        </td>
                                        <td className="table-des">15th Nov 2018 12:00 GMT</td>
                                        <td className="explore-vid">Explore
                                            <span>→</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="table-head vid-head">
                                            <p><img src={Vid4} alt="eos"/></p>
                                            <span>EOS noise</span>
                                        </td>
                                        <td className="table-des">15th Nov 2018 12:00 GMT</td>
                                        <td className="explore-vid">Explore
                                            <span>→</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="table-head vid-head">
                                            <p><img src={Vid4} alt="eos"/></p>
                                            <span>EOS haha</span>
                                        </td>
                                        <td className="table-des">15th Nov 2018 12:00 GMT</td>
                                        <td className="explore-vid">Explore
                                            <span>→</span>
                                        </td>

                                    </tr>
                                    <tr>
                                        <td className="table-head vid-head">
                                            <p><img src={Vid4} alt="eos"/></p>
                                            <span>Public Sale Starts</span>
                                        </td>
                                        <td className="table-des">15th Nov 2018 12:00 GMT</td>
                                        <td className="explore-vid">Explore
                                            <span>→</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="table-head vid-head">
                                            <p><img src={Vid4} alt="eos"/></p>
                                            <span>Public Sale Starts</span>
                                        </td>
                                        <td className="table-des">15th Nov 2018 12:00 GMT</td>
                                        <td className="explore-vid">Explore
                                            <span>→</span>
                                        </td>
                                    </tr>

                                </tbody>
                            </table>

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
    </div> </section>
    )
}

export default Airdrop;