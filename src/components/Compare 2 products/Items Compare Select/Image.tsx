import style from "../../../Style/Compare.module.css";
import { useTranslation } from 'react-i18next';
import { Search } from './Serach';
import React, { useEffect, useState } from 'react'
import SearchModal from "./searchModal";

const Image = ({Image, Image2}) => {

  const [searchValue, setSearchValue] = useState("")
  const [isSearched, setIsSearched] = useState(false)

  return (
    <div className={style.Images}>
      <img className={style.imageProgramming} src={Image && Image.slice(0, 4) == "https" && Image !== null ? Image : 'https://classapi.sepehracademy.ir///Pictures//Course//blank-thumbnail_4031a67c-6002-4004-baf7-c0840ebed86f.jpg'} />
      <SearchModal />
    </div>
  )
}

export { Image }