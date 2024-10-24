import React from 'react'
import style from './style.module.css'
import NoImage from '../../../../../../../../assets/Images/NoImage.png'

const Image = (props) => {
  return (
    <img className={style.imageProgramming} src={props.image ? props.image : 'https://classapi.sepehracademy.ir///Pictures//Course//blank-thumbnail_4031a67c-6002-4004-baf7-c0840ebed86f.jpg'} />
  )
}

export {Image}