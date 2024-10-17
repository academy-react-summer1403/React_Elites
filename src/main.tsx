import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {Root} from './components/root/Root.tsx'
import {Login} from './components/login/login.tsx'
import {ForgetPass} from './components/forgetPassword/forgetPassword.tsx'
import {StudentPanel} from './components/studentPanel/studentCurse-Blog/studentPanel.tsx'
import {ImageForm} from './components/studentPanel/studentProfilePage/ImagesPage/Image.tsx'
import {InformationForm} from './components/studentPanel/studentProfilePage/InformationPage/InformationForm.tsx'
import {LinkForm} from './components/studentPanel/studentProfilePage/LinkPage/link.tsx'
import {LocationForm} from './components/studentPanel/studentProfilePage/locationPage/location.tsx'
import {LandingHolder} from './components/Landing/A-LandingHolder/LandingHolder.tsx'
import {BlogsList} from './components/blogs/blogsList.tsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import "./app/App.css"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children:[

      {
        path: "/Login",
        element: <Login />,
      },
      {
        path: "/ForgetPass",
        element: <ForgetPass />,
      },
      {
        path: "/BlogsList",
        element: <BlogsList />,
      },
      {
        path: "/StudentPanelCurse",
        element: <StudentPanel />,
      }, 
      {
        path: "/ImageForm",
        element: <ImageForm />,
      },
      {
        path: "/InformationForm",
        element: <InformationForm />,
      }, 
      {
        path: "/LinkForm",
        element: <LinkForm />,
      },
      {
        path: "/LocationForm",
        element: <LocationForm />,
      }, 
    ]
  },

])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
