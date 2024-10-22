import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {Root} from './components/root/Root.tsx'
import {Login} from './components/login/login.tsx'
import {LoginPage2} from './components/Login Page2/login.tsx'
import {ForgetPass} from './components/forgetPassword/forgetPassword.tsx'
import {ForgetPassPage2} from './components/forgetPassword page2/forgetPassword.tsx'

import {StudentPanel} from './components/studentPanel/studentCurse-Blog/studentPanel.tsx'
import {ImageForm} from './components/studentPanel/studentProfilePage/ImagesPage/Image.tsx'
import {InformationForm} from './components/studentPanel/studentProfilePage/InformationPage/InformationForm.tsx'
import {LinkForm} from './components/studentPanel/studentProfilePage/LinkPage/link.tsx'
import {LocationForm} from './components/studentPanel/studentProfilePage/locationPage/location.tsx'
import {BlogsList} from './components/blogs/blogsList.tsx'
import { CourseList } from './components/Course List/CourseListHolder/CourseList.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import "./app/App.css"
import { CourseDetail } from './components/Course Detail/CourseDetailHolder/CourseDetail.tsx'
import { ErrorPage404 } from './components/Error 404/Error404.tsx'
import { ErrorPage } from './components/Error Page/ErrorPage.tsx'
import { LandingHolder } from './components/Landing/A-LandingHolder/LandingHolder.tsx'
import { Register } from './components/register/register.tsx'
import { BlogsDetail } from './components/Blogs Detail/CourseDetailHolder/Blogs.tsx'
import { Payment } from './components/Payment First Page/Payment Holder/Payment.tsx'
import { PaymentGateway } from './components/Payment Gateway/PaymentGateway.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children:[
      {
        path: "/",
        element: <LandingHolder />,
        errorElement: <ErrorPage />
      },
      {
        path: "/Blogs-List",
        element: <BlogsList />,
        errorElement: <ErrorPage />
      },
      {
        path: "/Courses-List",
        element: <CourseList />,
        errorElement: <ErrorPage />
      }, 
      {
        path: "/Course-Detail",
        element: <CourseDetail />,
        errorElement: <ErrorPage />
      }, 
      {
        path: "/Blogs-Detail",
        element: <BlogsDetail />,
        errorElement: <ErrorPage />
      },
    ]
  },
  {
        path: "*",
        element: <ErrorPage404 />
  },
  {
    path: "/Login",
    element: <Login />,
    errorElement: <ErrorPage />
  },
  {
    path: "/Login-Page2",
    element: <LoginPage2 />,
    errorElement: <ErrorPage />
  },
  {
    path: "/Register",
    element: <Register />,
    errorElement: <ErrorPage />
  },
  {
    path: "/Forget-Password",
    element: <ForgetPass />,
    errorElement: <ErrorPage />
  },
  {
    path: "/Forget-Password-Page2",
    element: <ForgetPassPage2 />,
    errorElement: <ErrorPage />
  },

  {
    path: "/Student-Panel-Course",
    element: <StudentPanel />,
    errorElement: <ErrorPage />
  }, 
  {
    path: "/Image",
    element: <ImageForm />,
    errorElement: <ErrorPage />
  },
  {
    path: "/Information",
    element: <InformationForm />,
    errorElement: <ErrorPage />
  }, 
  {
    path: "/Link",
    element: <LinkForm />,
    errorElement: <ErrorPage />
  },
  {
    path: "/Location",
    element: <LocationForm />,
    errorElement: <ErrorPage />
  }, 
  {
    path: "/Shopping-Basket",
    element: <Payment />,
    errorElement: <ErrorPage />
  },
  {
    path: "/Payment-Gateway",
    element: <PaymentGateway />,
    errorElement: <ErrorPage />
  }

])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
