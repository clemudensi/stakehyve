import React from 'react';
import EOSIcon from "../../assets/images/EOS.svg";
import './signup.css';

const Signup = () =>{
    return(
        <body class="nk-body body-wider bg-dark page-loaded chrome no-touch">
	<div class="nk-wrap">
    
        <main class="nk-pages nk-pages-centered bg-theme">
            <div class="ath-container">
                <div class="ath-header text-center">
                    <a href="./" class="ath-logo"><img src={EOSIcon} alt="logo"/></a>
                </div>
                <div class="ath-body">
                    <h5 class="ath-heading title">Create Your Account<small class="tc-default">Register and start earning!</small></h5>
                    <form action="./">
                        <div class="field-item">
                            <div class="field-wrap">
                                <input type="text" class="input-bordered" placeholder="Your Firstname"/>
                            </div>
                        </div>
                        <div class="field-item">
                            <div class="field-wrap">
                                <input type="text" class="input-bordered" placeholder="Your Lastname"/>
                            </div>
                        </div>
                        <div class="field-item">
                            <div class="field-wrap">
                                <input type="email" class="input-bordered" placeholder="Your Email"/>
                            </div>
                        </div>
                        <div class="field-item">
                            <div class="field-wrap">
                                <input type="password" class="input-bordered" placeholder="Password"/>
                            </div>
                        </div>
                        <div class="field-item">
                            <input class="input-checkbox" id="agree-term-2" type="checkbox"/>
                            <label htmlFor="agree-term-2">I agree to Earnathon <a href="#">Privacy Policy</a> &amp; <a href="#">Terms</a>.</label>
                        </div>
                        <button class="btn btn-primary btn-block btn-md">Create Account</button>
                    </form>
                    

                    
                </div>
                <div class="ath-note text-center tc-light">
                    Already have an account? <a href="page-login.html"> <strong>Sign in here</strong></a>
                </div>
            </div>
        </main>
    
	</div>


</body>

    )
}

export default Signup;