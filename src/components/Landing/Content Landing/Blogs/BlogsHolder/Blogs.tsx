import React, { useEffect, useState } from 'react'
import style from './Blogs.module.css'
import { BlogItems } from '../BlogsItems/BlogItemsHolder/BlogItems'
import BlogTitle from './BlogTitle'
import { Button } from './Button'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Blogs = ({topBlogs}) => {

    const ArrowRight = (props) => {
      const { className, onClick } = props;
      return (
        <div
          className={`${style.arrowRight} ${className}`}
          onClick={onClick}
        />
      );
    }
  
    const ArrowLeft = (props) => {
      const { className, onClick } = props;
      return (
        <div
          className={`${style.arrowLeft} ${className}`}
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
    nextArrow: <ArrowRight />,
    prevArrow: <ArrowLeft />,
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
        <Slider  className={style.slider} {...settings} >
          {topBlogs.map((item, index) => {
              return(
                <BlogItems
                    key={index}
                    id={item.id}
                    image={item.currentImageAddressTumb}
                    title={item.title}
                    pub={item.addUserFullName}
                    views={item.currentView}
                    date={item.insertDate}
                />
              )
          })}
        </Slider>
        <Button />
    </div>
  )
}

export {Blogs}