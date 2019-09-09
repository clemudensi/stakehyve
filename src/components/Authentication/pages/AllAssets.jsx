import React from 'react';
import Header from '../../Header/allAssets';
import Screen from '../../HomeScreen/allAssets';
import Videos from '../../videosLayout';
import AirDrop from '../../Airdrop';
import How from '../../getStarted';
import Footer from '../../Footer';

const Home = ( ) => {


  return(
    <div className="bg-theme">
      <div className="nk-wrap has-ovm">
        <header className="nk-header page-header is-transparent is-sticky is-dark has-fixed" id="header">
          <Header/>
          <Screen/>
        </header>
        <main className="nk-pages tc-light">
          {/* <Videos/>
                <AirDrop/>
                <How/> */}
        </main>
        {/* <Footer/> */}
        
      </div>
    </div>
  );
};


export default Home;