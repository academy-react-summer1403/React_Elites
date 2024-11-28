import style from "./../../../../../Style/studentPanel.module.css";
import { useGlobalState } from "../../../../../State/State";
import { NavLink } from "react-router-dom";
import ApexCharts from 'apexcharts'
import Chart from 'react-apexcharts'


const MiddleStatusDashboard = ({percentage}) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');


  const options = {
    chart: {
      height: 350,
    },
    fill: {
      type: 'solid',
    },
    stroke: {
      lineCap: "round",
    },
    colors: ["#fce803"],
    plotOptions: {
      radialBar: {
        hollow: {
          margin: 15,
          size: "65%",
        },
       
        dataLabels: {
          name: {
            show: false,
            offsetY: -10,
            color: "#888",
            fontSize: "13px"
          },
          value: {
            color: "#111",
            fontSize: "30px",
            show: true
          }
        }
      }
    } 
  },
  series = [Number(percentage)]

  return (


    <div className={style.middleStatusDashboard}>
      <div>
        <Chart series={series} options={options} data-theme={darkMode ? "darkNoBG" : "lightMode"} />
      </div>
    </div>
  )
}

export { MiddleStatusDashboard }