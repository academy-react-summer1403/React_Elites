import React from 'react'
import  styleLogin  from "./Auth.module.css";
import  {TextWelcomeAuth}  from "./authItems/textWelcomeAuth";
import  {LaptopImgAuth}  from "./authItems/laptopImgAuth";
import  {LogoHolderAuth}  from "./authItems/LogoHolderAuth";
import { Outlet } from 'react-router-dom';

const Auth = () => {
    return (
        <div className={styleLogin.main}>
            <div className={styleLogin.page}>
                <div className={styleLogin.page2}> 
                    <LogoHolderAuth />
                    <TextWelcomeAuth />
                    <LaptopImgAuth />
                </div>
                <div className={styleLogin.right}>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export {Auth}