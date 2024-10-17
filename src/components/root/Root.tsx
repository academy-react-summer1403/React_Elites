import React, { Fragment, useState } from 'react'
import { Outlet } from 'react-router-dom'

const Root = () => {
    const [searchValue, setSearchValue] = useState()
  return (
    <Fragment>
        <Outlet context={[searchValue, setSearchValue]}/>
    </Fragment>
  )
}

export { Root }