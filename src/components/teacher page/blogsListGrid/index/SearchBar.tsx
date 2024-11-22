import React from 'react'
import { useGlobalState } from '../../../../State/State';
import style from '../../../../Style/teacher.module.css'
import { useTranslation } from 'react-i18next';
import { SearchBarInput } from './SearchInput';

const SearchBar = ({setSearchValue}) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  const { t } = useTranslation();
  return (
    <div className={style.inputHolder}>
      <h1>{t("filter")}</h1>
      <div>
        <h2>{t("search")}</h2>
        <SearchBarInput  setSearchValue={setSearchValue} />
      </div>  
    </div>
  )
}

export { SearchBar }