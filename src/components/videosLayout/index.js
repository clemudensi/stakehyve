import React from 'react';
import './vids.css';
import Vid1 from '../../assets/images/eoslearn.svg';
import Vid5 from '../../assets/images/302.svg';
import Vid2 from '../../assets/images/EOSl.svg';
import Vid3 from '../../assets/images/Group3.svg';
import StellarIcon from '../../assets/images/Stellar.svg';
import Vid4 from '../../assets/images/BNB.svg';
import EOSIcon from '../../assets/images/EOS.svg';

const Videos = () => {

    return(
        <section className="section section-l" id="ecosystems">

            <div className="container">
                <div className="row justify-content-left text-left">
                    <div className="">
                        <div className="section-head section-head-s2">
                            <h2 className="title blockHead">ASSETS TO EARN</h2>
                            <p>Crypto aseets you can learn and earn from</p>
                        </div>
                    </div>
                </div>
            </div>
               
            <div className="container container-xxl">
                <div className="nk-block">
                    <div className="row align-items-center justify-content-center justify-content-xl-between gutter-vr-30px yala">
                        <div className="col-xxl-6 col-xl-6 col-lg-8">
                            <div className="" style={ { width: '380px' } }>
                                <img className="" src={ Vid4 } alt="video"/>
                                   
                            </div>
                        </div>
                        <div className="col-xxl-5 col-xl-6 col-lg-8">
                            <div className="nk-block-text adjs">
                                <div>
                                    <img src={ StellarIcon }  alt="stellar" className="icon-style"/>
                                </div>
                                <div style={ { marginTop: '12px' } }>
                                    <h3>Binance Coin</h3>
                                </div>
                                        
                                <div className="feature-text">
                                    <p>Stellar is a platform that connects banks, payment systems, and people. Learn how it works and you’ll earn XLM.</p>
                                </div>

                                <div className="text-center text-sm-left card-de">
                                    <a href="" className="btn">Start Course</a>
                                        Earn $100 XLM
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
                            <div className="" style={ { width: '380px' } }>
                                <img className="shadow rounded" src={ Vid2 } alt="vid" />
                                   
                            </div>
                        </div>
                        <div className="col-xxl-5 col-xl-6 col-lg-8">
                            <div className="nk-block-text adjs">
                                <div>
                                    <img src={ EOSIcon } alt="video2" className="icon-style"/>
                                </div>
                                <div style={ { marginTop: '11px' } }>
                                    <h3>Stellar Lumens</h3>
                                </div>
                                        
                                <div className="feature-text">
                                    <p  >Stellar is a platform that connects banks, payment systems, and people. Learn how it works and you’ll earn XLM.</p>
                                </div>

                                <div className="text-center text-sm-left card-de">
                                    <a href="#" className="btn">Start Course</a>
                                        Earn $100 XLM
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
                            <div className="" style={ { width: '380px' } }>
                                <img className="shadow rounded" src={ Vid5 } alt="vid"/>
                                   
                            </div>
                        </div>
                        <div className="col-xxl-5 col-xl-6 col-lg-8" >
                            <div className="nk-block-text adjs">
                                <div>
                                    <img src={ EOSIcon } alt="tell" className="icon-style"/>
                                </div>
                                <div style={ { marginTop: '11px' } }>
                                    <h3>EOS</h3>
                                </div>
                                        
                                <div className="feature-text">
                                    <p>Stellar is a platform that connects banks, payment systems, and people. Learn how it works and you’ll earn XLM.</p>
                                </div>

                                <div className="text-center text-sm-left card-de">
                                    <a href="#" className="btn">Begin Course</a>
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
                                <img className="shadow rounded" src={ Vid3 } alt="video"/>
                                   
                            </div>
                        </div>
                        <div className="col-xxl-5 col-xl-6 col-lg-8" >
                            <div className="nk-block-text adjs">
                                <div>
                                    <img src={ EOSIcon } alt="test" className="icon-style"/>
                                </div>
                                <div style={ { marginTop: '11px' } }>
                                    <h3>Stellar Lumens</h3>
                                </div>
                                        
                                <div className="feature-text" >
                                    <p>Stellar is a platform that connects banks, payment systems, and people. Learn how it works and you’ll earn XLM.</p>
                                </div>

                                <div className="text-center text-sm-left card-de">
                                    <a href="#" className="btn">Try Demo Free</a>
                                        Earn $100 XLM
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mtop">
                <div className="row justify-content-center text-center">
                    <div className="col-lg-6">
                        <div className="">
                            <a href="" className="btn-explore">Explore all assets</a>
                                
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Videos;