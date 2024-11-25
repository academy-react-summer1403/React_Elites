import React, { Fragment, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '../components/common/Header/HolderHeader/Header'
import { HolderFooter } from '../components/common/Footer/HolderFooter/HolderFooter'

const Root = () => {
    const [searchValue, setSearchValue] = useState()
  return (
    <>
    <Header/>
    <Outlet />
    <HolderFooter />
    </>
  )
}

export { Root }