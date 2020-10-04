import React from 'react';
import Header from  '../components/Header/Assets';
import Screen from  '../components/HomeScreen/';
import Videos from  '../components/videosLayout/Assets';
import Footer from '../components/Footer';
// import '../assets/css/azalea.css'
// import '../assets/css/style.css'
// import '../assets/css/main.css'
// import '../assets/css/vendor.bundle.css'

const Assets = ( ) => {
  return(
    <div className="bg-theme">
      <div className="nk-wrap has-ovm">
        <header className="nk-header page-header is-transparent is-sticky is-dark has-fixed" id="header">
          <Header/>
          <Screen/>
        </header>
        <main className="nk-pages tc-light">
          <Videos/>
          {/*<AirDrop/>
                <How/> */}
        </main>
        <Footer/>
        
      </div>
    </div>
  );
};


export default Assets;