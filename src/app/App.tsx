import React from "react"
import { Header } from "../components/common/Header/HolderHeader/Header.tsx"
import { HolderFooter } from "../components/common/Footer/HolderFooter/HolderFooter.tsx"
import { CourseList } from "../components/Course List/CourseListHolder/CourseList.tsx"
import { ContentLandingHolder } from "../components/Landing/Content Landing/ContentLandingHolder/ContentLandingHolder.tsx"

function App() {

  return (
    <>
        {/* Routers */}
      <CourseList />
    </>
  )
}

export default App 