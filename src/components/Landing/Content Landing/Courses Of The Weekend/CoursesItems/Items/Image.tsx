import React from 'react'
import style from './style.module.css'
import { NavLink } from 'react-router-dom'

const Image = ({id, image}) => {
  return (
    <NavLink to={"/Course-Detail/" +id} className={style.holderImage}>
          <img className={style.imageProgramming} src={image ? image : 'https://classapi.sepehracademy.ir///Pictures//Course//blank-thumbnail_4031a67c-6002-4004-baf7-c0840ebed86f.jpg'} />
    </NavLink>
  )
}

export {Image}