import React from 'react'
import { NavBarItems } from './NavBarItems/NavBarItems.tsx'
import { Profile } from './Profile/Profile.tsx'

const NavBar = () => {
    return (
        <div style={{width: '372px', height: '48px', display: "flex",}}>
            <Profile />
            <NavBarItems />
        </div>
    )
}

export {NavBar}