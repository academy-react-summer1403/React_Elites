import style from "./../../../../../Style/studentPanel.module.css";
import { useGlobalState } from "../../../../../State/State";
import { NavLink } from "react-router-dom";
import Chart from 'react-apexcharts'


const MiddleStatusDashboard = ({options,series}) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');

  return (

  
      <Chart options={options} label={false} series={series} type='radialBar'/>
  )
}

export { MiddleStatusDashboard }