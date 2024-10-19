import React, { Fragment, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { LandingHolder } from '../Landing/A-LandingHolder/LandingHolder'
import { Header } from '../common/Header/HolderHeader/Header'
import { HolderFooter } from '../common/Footer/HolderFooter/HolderFooter'

const Root = () => {
    const [searchValue, setSearchValue] = useState()
  return (
    <>
    <Header />
        <Outlet />
    <HolderFooter />
    </>
  )
}

export { Root }