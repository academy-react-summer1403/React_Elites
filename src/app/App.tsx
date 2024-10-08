import React from "react"
import { Header } from "../components/common/Header/HolderHeader/Header.tsx"
import { HolderFooter } from "../components/common/Footer/HolderFooter/HolderFooter.tsx"
import { CourseList } from "../components/Course List/CourseListHolder/CourseList.tsx"

function App() {

  return (
    <>
        {/* Routers */}
          <Header/>
          <CourseList />
          <HolderFooter />
    </>
  )
}

export default App 