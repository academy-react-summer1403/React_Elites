import React from 'react'
import  styleLogin  from "./Auth.module.css";
import  {TextWelcomeAuth}  from "./authItems/textWelcomeAuth";
import  {LaptopImgAuth}  from "./authItems/laptopImgAuth";
import  {LogoHolderAuth}  from "./authItems/LogoHolderAuth";
import { Outlet } from 'react-router-dom';
import { useGlobalState } from '../../State/State';

const Auth = () => {
    const [darkMode, setDarkMode] = useGlobalState('DarkMode');
    return (
        <div data-theme={darkMode ? "dark" : "lightMode"} className={styleLogin.main}>
            <div data-theme={darkMode ? "dark" : "lightMode"} className={styleLogin.page}>
                <div data-theme={darkMode ? "darkSmall" : "lightMode"} className={styleLogin.page2}> 
                    <LogoHolderAuth />
                    <TextWelcomeAuth />
                    <LaptopImgAuth />
                </div>
                <div data-theme={darkMode ? "dark" : "lightMode"} className={styleLogin.right}>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export {Auth}