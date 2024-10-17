import React, { Fragment, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { LandingHolder } from '../Landing/A-LandingHolder/LandingHolder'

const Root = () => {
    const [searchValue, setSearchValue] = useState()
  return (
    <Fragment>
        <Outlet context={[searchValue, setSearchValue]}/>
        <LandingHolder />

    </Fragment>
  )
}

export { Root }