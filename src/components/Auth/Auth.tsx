import React from 'react'
import  styleLogin  from "./Auth.module.css";
import  {TextWelcomeAuth}  from "./authItems/textWelcomeAuth";
import  {LaptopImgAuth}  from "./authItems/laptopImgAuth";
import  {LogoHolderAuth}  from "./authItems/LogoHolderAuth";
import { Outlet } from 'react-router-dom';

import { identifier } from '../../core/services/Functions/ThemeIdentifier';

const Auth = () => {
  
    return (
        <div data-theme={identifier("dark")} className={styleLogin.main}>
            <div data-theme={identifier("dark")} className={styleLogin.page}>
                <div data-theme={identifier("darkSmall")} className={styleLogin.page2}> 
                    <LogoHolderAuth />
                    <TextWelcomeAuth />
                    <LaptopImgAuth />
                </div>
                <div data-theme={identifier("dark")} className={styleLogin.right}>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export {Auth}