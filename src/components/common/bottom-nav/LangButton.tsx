import React from "react";
import style from "./LangButton.module.css";
import { useTranslation } from "react-i18next";

function ChangeLang() {
  const {
    i18n:{changeLanguage,language,dir}
  }=useTranslation();

  const onChangeLocale = (e: React.ChangeEvent<HTMLSelectElement>) => { 
    const { value } = e.target;
    changeLanguage(value);
  };
  return (
    <select className={style.Language} onChange={onChangeLocale} value={language}>
      <option value="fa">Persian</option>
      <option value="en">English </option>
      <option value="ar">Arabic </option>
    </select>
  )
}

export default ChangeLang;