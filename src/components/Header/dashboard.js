import React from 'react';
import "./dash.css";
import {Link} from 'react-router-dom';

const Header = () => {
    return(
      
        <div className="header-main __web-inspector-hide-shortcut__">
        {/* <link rel="stylesheet" href="../assets/css/vendor.bundle.css"/>
        <link rel="stylesheet" href="../assets/css/style.css"/>
        <link rel="stylesheet" href="../assets/css/azalea.css"/>
        <link rel="stylesheet" href="../assets/css/main.css"/>
        <link rel="stylesheet" href="../assets/css/theme.css"/> */}
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
										<Link  className="menu-link nav-link menu-toggle" to="/"></Link>
										<ul className="menu-sub menu-drop">
                                              <li className="menu-item"><Link to="index-azalea.html"></Link></li>
													<li className="menu-item"><Link to="index-azalea-multi.html">ICO<span className="badge badge-xs badge-info">New</span></Link></li> 
													<li className="menu-item"><Link to="index-gentian.html">Logout</Link></li> 
										</ul>
									</li>
									<li className="menu-item">
										<Link  className="menu-link nav-link menu-toggle" to="/">Explore</Link>
									</li>
									<li className="menu-item ">
										<Link  className="menu-link nav-link menu-toggle" to="/">About</Link>
										
									</li>

                                    <li className="menu-item ">
										<Link  className="menu-link nav-link " to="/">Contact</Link>
									</li>
									
									
								</ul>
                                <ul className="menu-btns show-xs">
                                {/* <em ></em> */}
                                    <li><Link to="/" data-toggle="modal" data-target="#login-popup" className="bt-started"><span class="ti ti-search"></span></Link></li>
                                    <li><Link to="/" data-toggle="modal" data-target="#login-popup" className="bt-started"><span>Get Started</span></Link></li>

                                </ul>
								
							</nav>

						<div className="header-navbar-overlay"></div></div>
                        <ul className="menu-btns show-lg">
                            <li className="menu-d"><Link to="/" style={{color: "#fff"}}><em className="ti ti-bell"></em> </Link></li>
                            <li className="menu-d"><Link to="/" style={{color: "#fff"}}><em className="ti ti-settings"></em> </Link></li>
                            <li className="menu-item has-sub">
										<Link  className="menu-link nav-link menu-toggle" href="" > <span className="avatar-d">JP</span></Link>
										<ul className="menu-sub menu-drop">
                                              <li className="menu-item"><Link to="index-azalea.html">Blockchain<span className="badge badge-xs badge-info">New</span></Link></li>
													<li className="menu-item"><Link to="index-azalea-multi.html">ICO<span className="badge badge-xs badge-info">New</span></Link></li> 
													<li className="menu-item"><Link to="index-gentian.html">Airdrops</Link></li> 
										</ul>
									</li>
                            
                            {/* <li><Link to="/" style={{color: "#fff"}}><span className="avatar">ade</span> </Link></li> */}
                                </ul>
					</div>                                                
				</div>
			</div>
            )
}
export default Header;