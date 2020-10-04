import React from 'react';
// import leftImg from "../../assets/images/froup.svg";
// import rightImg from "../../assets/images/froup2.svg";
// import HeadImg from "../../assets/images/Group7.svg";
// import Vid4 from "../../assets/images/BNB.svg";
import leftImg from "../../assets/images/froup.svg";
import rightImg from "../../assets/images/froup2.svg";
// import './assets.css';
import Search from '../search';

const HomeScreen = () => {
    return(
        <div className="header-banner bg-theme has-ovm" id="explore">
				<div className="nk-banner">
				    <div className="banner banner-page">
				        <div className="banner-wrap">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-xl-6 col-lg-9">
                                        <div className="banner-caption cpn tc-light text-center">
                                            <div className="cpn-head">
                                                <h3 className="title ttu">All Assests To Earn</h3>
                                                <Search/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
				    </div>
                    <div className="left-bars"><img src={rightImg} alt="rightbars"/></div>
                <div className="right-bars"><img src={leftImg} alt="rightbars"/></div>
				</div>
                
			</div>

    )
}
export default HomeScreen;