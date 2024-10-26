import React from 'react'
import style from './Image.module.css'
import { NavLink } from 'react-router-dom'

const Image = ({image, id}) => {
  return (
    <NavLink to={"/Blogs-Detail/" +id} className={style.holderImage}>
          <img className={style.image} src={image} />
    </NavLink>
  )
}

export {Image}