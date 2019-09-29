import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    return(
      
        <div className="header-main __web-inspector-hide-shortcut__">
        <link rel="stylesheet" href="../assets/css/vendor.bundle.css"/>
        <link rel="stylesheet" href="../assets/css/style.css"/>
        <link rel="stylesheet" href="../assets/css/azalea.css"/>
        <link rel="stylesheet" href="../assets/css/main.css"/>
        <link rel="stylesheet" href="../assets/css/theme.css"/>
				<div className="header-container container">
					<div className="header-wrap">
						
						<div className="header-logo logo">
							<Link to="/" className="logo-link">
								<h4>Earnathon</h4>
							</Link>
						</div>

						<div className="header-nav-toggle">
							<Link to="/" className="navbar-toggle" data-menu-toggle="header-menu">
                                <div className="toggle-line">
                                    <span></span>
                                </div>
                            </Link>
						</div>

						
						<div className="header-navbar" style={{display: "flex"}}>
							<nav className="header-menu" id="header-menu">
								<ul className="menu">
									
                                    <li className="menu-item has-sub">
										<Link className="menu-link nav-link menu-toggle" to="/">Category</Link>
										<ul className="menu-sub menu-drop">
                                              <li className="menu-item"><Link to="/">Blockchain<span className="badge badge-xs badge-info">New</span></Link></li>
													<li className="menu-item"><Link to="/">ICO<span className="badge badge-xs badge-info">New</span></Link></li> 
													<li className="menu-item"><Link to="/">Airdrops</Link></li> 
										</ul>
									</li>
									<li className="menu-item">
										<Link className="menu-link nav-link menu-toggle" to="/explore">Explore</Link>
									</li>
									<li className="menu-item ">
										<Link className="menu-link nav-link menu-toggle" to="/">About</Link>
										
									</li>

                                    <li className="menu-item ">
										<Link className="menu-link nav-link " to="/">Contact</Link>
									</li>
									
									
								</ul>
                                <ul className="menu-btns show-xs">
                                    <li><Link to="/" data-toggle="modal" data-target="#login-popup" className="bt-started"><span>Sign in</span></Link></li>
                                    <li><Link to="/" data-toggle="modal" data-target="#login-popup" className="bt-started"><span>Get Started</span></Link></li>

                                </ul>
								
							</nav>

						<div className="header-navbar-overlay"></div></div>
                        <ul className="menu-btns show-lg">
                            <li><Link to="/signin" style={{color: "#fff"}}>Sign in</Link></li>
                                    <li><Link to="/signup" className="bt-started"><span>Get Started</span></Link></li>
                                </ul>
					</div>                                                
				</div>
			</div>
            )
}
export default Header;