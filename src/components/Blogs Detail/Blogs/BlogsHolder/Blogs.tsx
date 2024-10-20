import React from 'react'
import style from './Blogs.module.css'
import { BlogItems } from '../BlogsItems/BlogItemsHolder/BlogItems'
import BlogTitle from './BlogTitle'
import reactBlog from '../../../../assets/Images/reactBlog.png'
import figmaBlog from '../../../../assets/Images/figmaBlog.png'
import JSBlog from '../../../../assets/Images/JSBlog.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Blogs = () => {
    let data=[
        {image: JSBlog, title: "زبان جاوا اسکریپت در چه حوزه ای به کار میره؟", pub: "محمدحسین بحرالعلومی", views: "200", date: "22 اردیبهشت 1403"},
        {image: figmaBlog, title: "فیگما یا ادوبی ایکس‌دی؟", pub: "محمدحسین خلیل‌پور", views: "200", date: "20 اردیبهشت 1403"},
        {image: reactBlog, title: "فرق ری‌اکت با نکست جی‌اس چیست؟", pub: "محسن اسفندیاری", views: "229", date: "27 اردیبهشت 1403"}
    ]
    const Arrow = (props) => {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", background: "black" }}
            onClick={onClick}
          />
        );
      }
    
      var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <Arrow />,
        prevArrow: <Arrow />,
        responsive: [
          {
            breakpoint: 1406,
            settings: {
              slidesToShow: 2
            }
          },
          {
            breakpoint: 1066,
            settings: {
              slidesToShow: 2
            }
          },
          {
            breakpoint: 760,
            settings: {
              slidesToShow: 1
            }
          }
        ]
      };

  return (
    <div className={style.container}>
        <BlogTitle />
        <Slider className={style.slider}  {...settings} >
        {data.map((item, index) => {
            return(
                <BlogItems
                    key={index}
                    image={item.image}
                    title={item.title}
                    pub={item.pub}
                    views={item.views}
                    date={item.date}
                />
            )
        })}
        </Slider>
    </div>
  )
}

export {Blogs}