import React from 'react';
import Header from '../components/Header/home';
import Screen from '../components/HomeScreen/home';
// import Videos from '../components/videosLayout/Assets';
// import AirDrop from '../components/Hyve'

const Assets = () => {
  return (
    <div className="bg-theme">
      <div className="nk-wrap has-ovm">
        <header
          className="nk-header page-header is-transparent is-sticky is-dark has-fixed"
          id="header">
          <Header/>
                    
        </header>
        <main className="">
          <Screen/>
          {/* <Videos/> */}
          {/* <AirDrop/> */}
          {/* <How/> */}
        </main>
        {/* <Footer/> */}

      </div>
    </div>
  );
};

export default Assets;