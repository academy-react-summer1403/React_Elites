import React from 'react'
import  styleLogin  from "./../Auth.module.css";
import { Outlet } from 'react-router-dom';

const TextWelcomeAuth = () => {
    return (
        <div className={styleLogin.textWelcome}>
            <h1 className="text-black text-right font-DannaBold text-3xl w-full">شروع یک ماجراجویی</h1>
            <h1 className="mt-2 text-base items-right text-gray-500 font-DannaDemiBold w-full text-right">هر دوره ای که بخوای رو به راحتی پیدا کن و یاد بگیر</h1>
        </div>
    )
}

export {TextWelcomeAuth}