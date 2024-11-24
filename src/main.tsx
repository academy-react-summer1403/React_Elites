import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {Root} from './components/root/Root.tsx'
import {Login} from './components/login/login.tsx'
import {LoginPage2} from './components/Login Page2/login.tsx'
import {ForgetPass} from './components/forgetPassword/forgetPassword.tsx'
import {ForgetPassPage2} from './components/forgetPassword page2/forgetPassword.tsx'
import {TeacherPage} from './components/teacher page/teacherPage.tsx'
import {AboutWe} from './components/aboutWe/aboutWe.tsx'
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
import LangAndMode from './components/common/bottom-nav/LangAndMode.tsx'
import "./i18n.ts"
import { CourseDetail } from './components/Course Detail/CourseDetailHolder/CourseDetail.tsx'
import { ErrorPage404 } from './components/Error 404/Error404.tsx'
import { ErrorPage } from './components/Error Page/ErrorPage.tsx'
import { LandingHolder } from './components/Landing/A-LandingHolder/LandingHolder.tsx'
import { Register } from './components/register/register.tsx'
import { RegisterPage2 } from './components/register Page2/register.tsx'
import { RegisterPage3 } from './components/register Page3/register.tsx'
import { BlogsDetail } from './components/Blogs Detail/BlogDetailHolder/Blogs.tsx'
import { Payment } from './components/Payment First Page/Payment Holder/Payment.tsx'
import { PaymentGateway } from './components/Payment Gateway/PaymentGateway.tsx'
import { StudentPayment } from './components/studentPanel/Student Payment/StudentPayment.tsx'
import { StudentMyCourse } from './components/studentPanel/studentCurse-Blog/My Courses/StudentMyCourse.tsx'
import { StudentMyReserve } from './components/studentPanel/studentCurse-Blog/My Reserve/StudentMyReserve.tsx'
import { StudentMyFavCourses } from './components/studentPanel/studentCurse-Blog/Fav Courses/StudentMyFavCourses.tsx'
import { Auth } from './components/Auth/Auth.tsx'
import { StudentMyFavBlogs } from './components/studentPanel/studentCurse-Blog/Fav Blogs/StudentMyFavBlogs.tsx'
import { StudentDashboard } from './components/studentPanel/dashboard/dashboard.tsx'
import { Compare } from './components/Compare 2 products/Compare.tsx'
import { CompareSelect } from './components/Compare 2 products/Compare select.tsx'

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
        path: "/Course-Detail/:id",
        element: <CourseDetail />,
        errorElement: <ErrorPage />
      }, 
      {
        path: "/Blogs-Detail/:id",
        element: <BlogsDetail />,
        errorElement: <ErrorPage />
      },
      {
        path: "/teacher-page",
        element: <TeacherPage />,
        errorElement: <ErrorPage />
      },
      {
        path: "/about-we",
        element: <AboutWe />,
        errorElement: <ErrorPage />
      },
      {
        path: "/Compare-products",
        element: <Compare />,
        errorElement: <ErrorPage />
      },
      {
        path: "/Compare-products-select",
        element: <CompareSelect />,
        errorElement: <ErrorPage />
      },
    ]
  },
  { 
    path: "/auth",
    element: <Auth />,
    errorElement: <ErrorPage />,
    children:[
      {
        path: "/auth/Login",
        element: <Login />,
        errorElement: <ErrorPage />
      },
      {
        path: "/auth/Login-Page2",
        element: <LoginPage2 />,
        errorElement: <ErrorPage />
      },
      {
        path: "/auth/Register",
        element: <Register />,
        errorElement: <ErrorPage />
      },
      {
        path: "/auth/Register-Page2",
        element: <RegisterPage2 />,
        errorElement: <ErrorPage />
      },
      {
        path: "/auth/Register-Page3",
        element: <RegisterPage3 />,
        errorElement: <ErrorPage />
      },
      {
        path: "/auth/Forget-Password",
        element: <ForgetPass />,
        errorElement: <ErrorPage />
      },
      {
        path: "/auth/Forget-Password-Page2",
        element: <ForgetPassPage2 />,
        errorElement: <ErrorPage />
      },
    ]
  },
  {
    path: "/Student-Panel",
    element: <StudentPanel />,
    errorElement: <ErrorPage />,
    children:[
      {
        path: "/Student-Panel/My-Courses",
        element: <StudentMyCourse />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/Student-Panel/Information",
        element: <InformationForm />,
        errorElement: <ErrorPage />
      }, 
      {
        path: "/Student-Panel/Image",
        element: <ImageForm />,
        errorElement: <ErrorPage />
      },
      {
        path: "/Student-Panel/Link",
        element: <LinkForm />,
        errorElement: <ErrorPage />
      },
      {
        path: "/Student-Panel/changePassword",
        element: <LinkForm />,
        errorElement: <ErrorPage />
      },
      {
        path: "/Student-Panel/Location",
        element: <LocationForm />,
        errorElement: <ErrorPage />
      }, 
      {
        path: "/Student-Panel/Shopping-Basket",
        element: <StudentPayment />,
        errorElement: <ErrorPage />
      },
      {
        path: "/Student-Panel/My-Reserve",
        element: <StudentMyReserve />,
        errorElement: <ErrorPage />
      },
      {
        path: "/Student-Panel/Fav-Courses",
        element: <StudentMyFavCourses />,
        errorElement: <ErrorPage />
      },
      {
        path: "/Student-Panel/Fav-Blogs",
        element: <StudentMyFavBlogs />,
        errorElement: <ErrorPage />
      },
      {
        path: "/Student-Panel/dashboard",
        element: <StudentDashboard />,
        errorElement: <ErrorPage />
      },
    ]
  },
  {
    path: "/Payment-Gateway",
    element: <PaymentGateway />,
    errorElement: <ErrorPage />
  },
  {
    path: "*",
    element: <ErrorPage404 />
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LangAndMode />
    <RouterProvider router={router} />
  </StrictMode>,
)
