import React from 'react'
import style from './style.module.css'
import { NavLink } from 'react-router-dom'

const Image = (props) => {
  return (
    <NavLink to={"/Blogs-Detail/" +props.id} className={style.holderImage}>
          <img className={style.imageProgramming} src={props.image} />
    </NavLink>
  )
}

export {Image}