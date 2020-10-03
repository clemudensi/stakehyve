import React from 'react';
import leftImg from '../../assets/images/froup.svg';
import rightImg from '../../assets/images/froup2.svg';
// import HeadImg from '../../assets/images/Group7.svg';
import startup from '../../assets/images/startup.svg';
import wallet from '../../assets/images/wallet.svg';
import edit from '../../assets/images/edit.svg';
import {Link} from 'react-router-dom';
import './index.css';

const HomeScreen = () => {
  return (
    <div
      className="banner banner-fs has-gfx tc-light __web-inspector-hide-shortcut__">

      <div className="nk-block nk-block-header my-auto">
        <div className="container ">

          <div
            className="row align-items-center justify-content-center justify-content-lg-between gutter-vr-30px">
            <div className="col-lg-6 order-lg-last">
              <div className="banner-gfx banner-gfx-auto mt-small-30">
                <img src="https://www.flaticon.com/svg/static/icons/svg/1232/1232342.svg" alt="header"/>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6 col-sm-10 text-left text-lg-left">
              <div>
                <p className="blockHead">A Betting Community</p>
              </div>
              <div className="banner-caption">
                <h1 className="title title-lg ttu">Interact and learn from a community of experts</h1>
                <p className="lead">Every correct odd counts, Increase your odds of winning significantly</p>
                <div className="cpn-action">
                  <Link to="/signup" className="btn">
                    <span>GET STARTED ITS FREE</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="left-bars"><img src="https://www.flaticon.com/svg/static/icons/svg/827/827265.svg" alt="rightbars"/></div>
      <div className="right-bars"><img src="https://www.flaticon.com/svg/static/icons/svg/827/827265.svg" alt="leftbars"/></div>

      <div className="nk-block nk-block-actions">
        <div
          className="container"
          style={{
            marginBottom: '30px'
          }}>
          <div className="row gutter-vr-40px align-items-center">
            <div
              className="col-md-6 d-flex justify-content-center justify-content-sm-start">

              {/*<ul*/}
              {/*  className="btn-grp btn-grp-break justify-content-center justify-content-sm-start gutter-vr-20px">*/}
              {/*  <li>*/}
              {/*    <Link*/}
              {/*      to="https://www.youtube.com/watch?v=SSo_EIwHSd4"*/}
              {/*      className="link link-break video-popup">*/}
              {/*      <em className="icon-circle icon-border icon-animation fas fa-play"></em>*/}
              {/*      <span>How it Works</span>*/}
              {/*    </Link>*/}
              {/*  </li>*/}
              {/*  <li>*/}
              {/*    <Link to="/" className="link link-break">*/}
              {/*      <em className="icon-circle icon-border far fa-lightbulb"></em>*/}
              {/*      <span>Why buy Tokens now?</span>*/}
              {/*    </Link>*/}
              {/*  </li>*/}
              {/*</ul>*/}
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
                    <h5 className="title title-sm">A community for all</h5>
                    <p className="fix-pad">StakeHyve creates a community of bettors because everyone can be a winner with the right community.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="feature feature-block">
                  <div className="feature-icon dot margin-auto">
                    <img src={wallet} alt="flag"></img>
                  </div>
                  <div className="feature-text">
                    <h5 className="title title-sm">Earn Points</h5>
                    <p className="fix-pad">Get points reward and bonuses for correct predictions. Excellence is rewarded in StakeHyve
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
                    <h5 className="title title-sm">Climb the ladder</h5>
                    <p className="fix-pad">Predict correctly and climb up the leadership board, where you gain more visibility.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </section>

    </div>
  );
};
export default HomeScreen;