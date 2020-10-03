import React from 'react';
import './hyve.css';
import {Link} from 'react-router-dom';
// import Mask from '../../assets/images/MaskGroup3.svg';


const Airdrop = () => {
  return(
    <section className="section" id="mvp" style={{paddingTop: '30px',overflow: 'hidden'}}>
      {/* <div className="ard-2">
                    <img src="assets/images/MaskGroup6.svg"/>
                </div> */}
      {/*<div className="ard-1"><img src={Mask} alt="mask"/></div>*/}

      <div className="container container-xxl" style={{position: 'relative'}}>
        <div className="nk-block">
          <div className="row align-items-center justify-content-center justify-content-xl-between gutter-vr-30px">

            <div className="col-xxl-6 col-xl-6 col-lg-8">
              <div className="nk-block-img nk-block-plx ">
                <img className="" src="https://www.flaticon.com/svg/static/icons/svg/2883/2883845.svg" alt=""/>
                    
              </div>
            </div>
            <div className="col-xxl-5 col-xl-6 col-lg-8">
              <div className="nk-block-text">
                <div className="feature ">
                  <h2 className="title title-xl" title="Advisors">Stakehyve is rewarding betting expertise</h2>
                  <div className="feature-text">
                    <p style={{color: 'white'}}>Share valuable tips earn points, climb up the ladder. Stakehyve rewards  betting brilliance.</p>
                  </div>
                </div>
                                    
                <div className="text-center text-sm-left" >
                  <Link to="/Airdrop" className="btn">Learn More</Link>
                </div>
                {/* visibility: visible; animation-delay: 0.9s; */}
              </div>
            </div>
          </div>
        </div>
      </div>
                
    </section>
  );
};

export default Airdrop;