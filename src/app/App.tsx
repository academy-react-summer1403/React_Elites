import React from "react"
import { Header } from "../components/common/Header/HolderHeader/Header.tsx"
import { HolderFooter } from "../components/common/Footer/HolderFooter/HolderFooter.tsx"
import { LandingHolder } from "../components/Landing/A-LandingHolder/LandingHolder.tsx"
import { Login } from "../components/login/login.tsx"
import { ForgetPass } from "../components/forgetPassword/forgetPassword.tsx"

function App() {

  return (
    <>
        {/* Routers */}
          {/* <Header/>
          <LandingHolder />
          <HolderFooter/> */}
          <Login />
          {/* <ForgetPass /> */}
    </>
  )
}

export default App 