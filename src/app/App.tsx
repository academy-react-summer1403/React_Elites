import React from "react"
import { Header } from "../components/common/Header/HolderHeader/Header.tsx"
import { HolderFooter } from "../components/common/Footer/HolderFooter/HolderFooter.tsx"
import { LandingHolder } from "../components/Landing/A-LandingHolder/LandingHolder.tsx"
import { Login } from "../components/login/login.tsx"
import { ForgetPass } from "../components/forgetPassword/forgetPassword.tsx"
import { Blogs } from "../components/Landing/Content Landing/Blogs/BlogsHolder/Blogs.tsx"
import { BlogsList } from "../components/blogs/blogsList.tsx"
import { Dashboard } from "../components/dashboard/dashboard.tsx"

function App() {

  return (
    <>
      {/* Routers */}
      {/*Header/>*/}
      <Dashboard /> 
      {/* <BlogsList /> */}
      {/* <LandingHolder /> */}
     {/* <Login />
      {/* ForgetPass /> */}

     {/* HolderFooter*/}
    </>
  )
}

export default App 