import React from 'react';
import Sign from '../../assets/images/Signup.svg';
import Quiz from '../../assets/images/quiz.svg';
import Watch from '../../assets/images/watchvideo.svg';
import Earn from '../../assets/images/EarnToken.svg';

const How = () =>{
  return(
    <section className="section section-l" id="docs">

      <div className="container">
        <div className="row justify-content-left text-left">
          <div className="">
            <div className="section-head section-head-s2">
              <h2 className="title  blockHead" >How to get started</h2>
              <p>its extremely easy to get started</p>
            </div>
          </div>
        </div>
      </div>
      <style type="text/css">

      </style>
      <div className="container container-xxl">
        <div className="nk-block">
          <div className="row gutter-vr-50px">
            <div className="col-sm-6 col-lg-3">
              <div className=" card2">
                <div className="doc-photo doc-shape ">
                  <img src={ Sign } alt="s"/>
                </div>
                <div className="doc-text">
                  <h5 className="doc-title title-sm mb-3">Sign up for an Earnathon account</h5>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="card2">
                <div className="doc-photo doc-shape ">
                  <img src={ Watch } alt="s"/>
                </div>
                <div className="doc-text">
                  <h5 className="doc-title title-sm">Watch videos of token to earn</h5>
                                
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="card2">
                <div className="doc-photo doc-shape ">
                  <img src={ Quiz } alt="s"/>
                </div>
                <div className="doc-text">
                  <h5 className="doc-title title-sm">Take a quiz to qualify for earning</h5>
                                
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="card2">
                <div className="doc-photo doc-shape ">
                  <img src={ Earn } alt="t"/>
                </div>
                <div className="doc-text">
                  <h5 className="doc-title title-sm">Earn token directly to your wallet</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};
export default How;