import React from "react";
import { Link } from "react-router-dom";
import './payment.css';
const DetailProduct = () =>{
    
    return(
           <div classname="login-page">
            
                <div classname="login-background">
                    <img src="https://pngimg.com/uploads/groot/groot_PNG26.png" alt="foodie"/>
                </div>
            
                <div classname="login-form">
                    <div classname="logo-container">
                        <img src="https://pngimg.com/uploads/groot/groot_PNG26.png" alt="logo"/>
                    </div>
                
                    <form action="">
                        <h1 class="login-heading">Sign In</h1>
                        <div class="input-fields">
                            <input type="text" placeholder="Username"/> 
                        </div>
                        <div class="input-fields">
                            <input type="password" placeholder="Password"/>
                        </div>
                        <div class="input-fields">
                            <button type="submit" class="login-button">LOGIN</button>
                        </div>
                        <span class="forgot-password">Forgot Password?</span>
                        <a href="#">Click Here</a>
                    </form>
                </div> 
            
            </div>
        )
}

export default DetailProduct;