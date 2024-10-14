import React from "react"
import { Header } from "../components/common/Header/HolderHeader/Header.tsx"
import { HolderFooter } from "../components/common/Footer/HolderFooter/HolderFooter.tsx"
import { LandingHolder } from "../components/Landing/A-LandingHolder/LandingHolder.tsx"
import { Login } from "../components/login/login.tsx"
import { ForgetPass } from "../components/forgetPassword/forgetPassword.tsx"
import { Blogs } from "../components/Landing/Content Landing/Blogs/BlogsHolder/Blogs.tsx"
import { BlogsList } from "../components/blogs/blogsList.tsx"
import { Payment } from "../components/Payment First Page/Payment Holder/Payment.tsx"

function App() {

  return (
    <>
      {/* Routers */}

      {/* <Header/> */}

      {/* <BlogsList /> */}
      {/* <LandingHolder /> */}
      {/* <Login /> */}
      {/* <ForgetPass /> */}
      <Payment />

      {/* <HolderFooter/> */}
    </>
  )
}

export default App 