import React, { Fragment, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '../common/Header/HolderHeader/Header'
import  LangAndMode  from '../common/bottom-nav/LangAndMode'
import { HolderFooter } from '../common/Footer/HolderFooter/HolderFooter'

const Root = () => {
    const [searchValue, setSearchValue] = useState()
  return (
    <>
    <Header />
    <LangAndMode />
    <Outlet />
    <HolderFooter />
    </>
  )
}

export { Root }