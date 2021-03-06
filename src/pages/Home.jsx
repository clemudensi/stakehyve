import React from 'react';
import Header from '../components/Header/Assets';
import Screen from '../components/HomeScreen';
// import Videos from '../components/videosLayout';
import AirDrop from '../components/Hyve';
// import How from '../components/getStarted';
import Footer from '../components/Footer';

const Home = ( ) => {

  return(
    <div className="bg-theme">
      <div className="nk-wrap has-ovm">
        <header className="nk-header page-header is-transparent is-sticky is-dark has-fixed" id="header">
          <Header/>
          <Screen/>
        </header>
        <main className="nk-pages tc-light">
          {/*<Videos/>*/}
          <AirDrop/>
          {/*<How/>*/}
        </main>
        <Footer/>
        
      </div>
    </div>
  );
};


export default Home;