import React from 'react';

const Header = () => {
    return(
        <div className="header-main __web-inspector-hide-shortcut__">
            <div className="header-container container">
                <div className="header-wrap">
						
                    <div className="header-logo logo">
                        <a href="./" className="logo-link">
                            <h4>Earnathon</h4>
                        </a>
                    </div>

                    <div className="header-nav-toggle">
                        <a href="#" className="navbar-toggle" data-menu-toggle="header-menu">
                            <div className="toggle-line">
                                <span></span>
                            </div>
                        </a>
                    </div>
						
                    <div className="header-navbar" style={ { display: 'flex' } }>
                        <nav className="header-menu" id="header-menu">
                            <ul className="menu">
									
                                <li className="menu-item has-sub">
                                    <a className="menu-link nav-link menu-toggle" href="#">Category</a>
                                    <ul className="menu-sub menu-drop">
                                        <li className="menu-item"><a href="index-azalea.html">Blockchain<span className="badge badge-xs badge-info">New</span></a></li>
                                        <li className="menu-item"><a href="index-azalea-multi.html">ICO<span className="badge badge-xs badge-info">New</span></a></li> 
                                        <li className="menu-item"><a href="index-gentian.html">Airdrops</a></li> 
                                    </ul>
                                </li>
                                <li className="menu-item">
                                    <a className="menu-link nav-link menu-toggle" href="#">Explore</a>
                                </li>
                                <li className="menu-item ">
                                    <a className="menu-link nav-link menu-toggle" href="#">About</a>
										
                                </li>

                                <li className="menu-item ">
                                    <a className="menu-link nav-link " href="#">Contact</a>
                                </li>
									
                            </ul>
                            <ul className="menu-btns show-xs">
                                <li><a href="#" data-toggle="modal" data-target="#login-popup" className="bt-started"><span>Sign in</span></a></li>
                                <li><a href="#" data-toggle="modal" data-target="#login-popup" className="bt-started"><span>Get Started</span></a></li>

                            </ul>
								
                        </nav>

                        <div className="header-navbar-overlay"></div></div>
                    <ul className="menu-btns show-lg">
                        <li><a href="" style={ { color: '#fff' } }>Sign in</a></li>
                        <li><a href="#" className="bt-started"><span>Get Started</span></a></li>
                    </ul>
                </div>                                                
            </div>
        </div>
            )
}
export default Header;