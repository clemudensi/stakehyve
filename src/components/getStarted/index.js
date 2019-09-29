import React from 'react';
import Sign from '../../assets/images/Signup.svg';
import Quiz from '../../assets/images/quiz.svg';
import Watch from '../../assets/images/watchvideo.svg';
import Earn from '../../assets/images/EarnToken.svg';



const How = () =>{
    return(
        <section class="section section-l" id="docs">

        <div class="container">
            <div class="row justify-content-left text-left">
                <div class="">
                    <div class="section-head section-head-s2">
                        <h2 class="title  blockHead" >How to get started</h2>
                        <p>its extremely easy to get started</p>
                    </div>
                </div>
            </div>
        </div>
        <style type="text/css">

        </style>
        <div class="container container-xxl">
            <div class="nk-block">
                <div class="row gutter-vr-50px">
                    <div class="col-sm-6 col-lg-3">
                        <div class=" card2">
                            <div class="doc-photo doc-shape ">
                                <img src={Sign} alt="s"/>
                            </div>
                            <div class="doc-text">
                                <h5 class="doc-title title-sm mb-3">Sign up for an Earnathon account</h5>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-lg-3">
                        <div class="card2">
                            <div class="doc-photo doc-shape ">
                                <img src={Watch} alt="s"/>
                            </div>
                            <div class="doc-text">
                                <h5 class="doc-title title-sm">Watch videos of token to earn</h5>
                                
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-lg-3">
                        <div class="card2">
                            <div class="doc-photo doc-shape ">
                                <img src={Quiz} alt="s"/>
                            </div>
                            <div class="doc-text">
                                <h5 class="doc-title title-sm">Take a quiz to qualify for earning</h5>
                                
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-lg-3">
                        <div class="card2">
                            <div class="doc-photo doc-shape ">
                                <img src={Earn} alt="t"/>
                            </div>
                            <div class="doc-text">
                                <h5 class="doc-title title-sm">Earn token directly to your wallet</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>
    )
}
export default How;