import React from 'react';
import Header from '../components/Header/settings';
import Screen from '../components/HomeScreen/settings';
// import Videos from '../components/videosLayout/Assets';
// import AirDrop from '../components/Airdrop'

const Assets = () => {

    return (
        <div className="" style={{background: 'rgb(29, 101, 113)'}}>
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
    )
}

export default Assets