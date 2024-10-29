import React from 'react'
import style from '../../../../../Style/NavBarItems.module.css'
import { useGlobalState } from '../../../../../State/State';
import miniBasketImg from '../../../../../assets/Images/FigmaCourse.png';
import { NavLink } from 'react-router-dom'

const MiniBasket = () => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <>
        <NavLink to="/Student-Panel/Shopping-Basket" className={style.miniBasketHolder}  data-theme={darkMode ? "minibasket" : "lightMode"}>  
              <div  className={style.miniBasket}> 
                <div id="basMenu">
                  <h2> تعداد دوره در سبد:3 </h2>
                  <ul className={style.miniBasketItems}>
                    <li>
                      <img className={style.imgMiniBasket} src={miniBasketImg} />
                      <div className={style.titleAndPrice}>
                        <div className={style.title}>دوره فیگما</div>
                        <div className={style.price}>قیمت : 1,000,000</div>
                      </div>
                    </li>
                    <li>
                      <img className={style.imgMiniBasket} src={miniBasketImg} />
                      <div className={style.titleAndPrice}>
                        <div className={style.title}>دوره فیگما</div>
                        <div className={style.price}>قیمت : 1,000,000</div>
                      </div>
                    </li>
                    <li>
                      <img className={style.imgMiniBasket} src={miniBasketImg} />
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
    </>
  )
}

export {MiniBasket};