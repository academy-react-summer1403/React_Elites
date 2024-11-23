import React, { useEffect, useState } from 'react'
import style from './Price.module.css'
import MultiRangeSlider from "multi-range-slider-react";
import { Sort } from '../../../../../../core/services/api/Sort';

const Price = ({maxValue, minValue, set_minValue, set_maxValue}) => {
  const [maxValueBining, setmaxValueBining] = useState()
  const [minValueBining, setminValueBining] = useState()

  const handleInput = (e) => {
    set_minValue(e.minValue);
    set_maxValue(e.maxValue);
  };

  const getMaxValue = async () => {
    let res = await Sort("Cost", "DESC")
    let res2 = await Sort("Cost", "ASC")
    setmaxValueBining(res.courseFilterDtos[0].cost)
    setminValueBining(res2.courseFilterDtos[0].cost)
  }

  useEffect(() => {
    getMaxValue()
  }, [])

  return (
    <>
      <div className={style.titlePrice} > قیمت</div>
      <div className={style.valueHolder}>
        <div className={style.value}>{maxValue}</div>
        <div className={style.fromTo}> تا</div>
        <div className={style.value} style={{marginLeft: "10px"}}>{minValue}</div>
        <div className={style.fromTo}> از</div>
      </div>
      <MultiRangeSlider
      ruler='false'
      style={{border: "none", boxShadow: "none", padding: "15px 10px"}}
			min={minValueBining}
			max={maxValueBining}
      thumbLeftColor='#3772FF'
      thumbRightColor='#3772FF'
      barInnerColor='#F1F1F1'
      barLeftColor='#F1F1F1'
      barRightColor='#F1F1F1'
      label='false'
			step={10000}
			minValue={minValue}
			maxValue={maxValue}
			onInput={(e) => {
				handleInput(e);
			}}
      className={style.priceInput}
		/>
    </>

  )
}

export {Price}