import React, { useState } from 'react'
import style from "../../../../../Style/NavBarItems.module.css"
import { NavLink } from 'react-router-dom'
import { useGlobalState } from '../../../../../State/State';
import miniBasket from '../../../../../assets/Images/FigmaCourse.png';

const NavBarItems = () => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  const [isChecked, setIsChecked] = useState(false)
  const [isChecked2, setIsChecked2] = useState(false)
  const [isChecked3, setIsChecked3] = useState(false)
  const [isChecked4, setIsChecked4] = useState(false)
  const [isChecked5, setIsChecked5] = useState(false)
  return (
    <div className={style.container}>
        <NavLink to="/Student-Panel/Shopping-Basket" className={isChecked5 ? style.selected : style.items} data-theme={darkMode ? "darkNoBG" : "lightMode"}
          onClick={() => {
            setIsChecked(false);
            setIsChecked2(false);
            setIsChecked3(false);
            setIsChecked4(false);
            setIsChecked5(true);
          }}>  سبد خرید 
              <div  className={style.miniBasket}> 
                <div id="basMenu">
                  <h2> تعداد دوره در سبد:3 </h2>
                  <ul className={style.miniBasketItems}>
                    <li>
                      <img className={style.imgMiniBasket} src={miniBasket} />
                      <div className={style.titleAndPrice}>
                        <div className={style.title}>دوره فیگما</div>
                        <div className={style.price}>قیمت : 1,000,000</div>
                      </div>
                    </li>
                    <li>
                      <img className={style.imgMiniBasket} src={miniBasket} />
                      <div className={style.titleAndPrice}>
                        <div className={style.title}>دوره فیگما</div>
                        <div className={style.price}>قیمت : 1,000,000</div>
                      </div>
                    </li>
                    <li>
                      <img className={style.imgMiniBasket} src={miniBasket} />
                      <div className={style.titleAndPrice}>
                        <div className={style.title}>دوره فیگما</div>
                        <div className={style.price}>قیمت : 1,000,000</div>
                      </div>
                    </li>
                  </ul>
                  <div className={style.buttonHolder}>	
                    <NavLink className={style.button} to="/Student-Panel/Shopping-Basket"> نمایش سبد و پرداخت</NavLink>					
                  </div>				
                </div>
              </div>
        </NavLink>    
        <NavLink to="/about-We" className={isChecked ? style.selected : style.items} data-theme={darkMode ? "darkNoBG" : "lightMode"}
          onClick={() => {
            setIsChecked(true);
            setIsChecked2(false);
            setIsChecked3(false);
            setIsChecked4(false);
            setIsChecked5(false);
          }}
        > درباره ما </NavLink>
        <NavLink to="/Blogs-List" className={isChecked2 ? style.selected : style.items} data-theme={darkMode ? "darkNoBG" : "lightMode"}
        onClick={() => {
          setIsChecked(false);
          setIsChecked2(true);
          setIsChecked3(false);
          setIsChecked4(false);
          setIsChecked5(false);
        }}
        > بلاگ ها </NavLink>
        <NavLink to="/Courses-List" className={isChecked3 ? style.selected : style.items} data-theme={darkMode ? "darkNoBG" : "lightMode"}
                onClick={() => {
                  setIsChecked(false);
                  setIsChecked2(false);
                  setIsChecked3(true);
                  setIsChecked4(false);
                  setIsChecked5(false);
                }}> دوره ها</NavLink>
        <NavLink to="/" className={isChecked4 ? style.selected : style.items} data-theme={darkMode ? "darkNoBG" : "lightMode"}
                onClick={() => {
                  setIsChecked(false);
                  setIsChecked2(false);
                  setIsChecked3(false);
                  setIsChecked4(true);
                  setIsChecked5(false);
                }}>  خانه </NavLink>    
    </div>
  )
}

export {NavBarItems};