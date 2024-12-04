// ** React Imports
import { Fragment, useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { getCourseById } from '../../../core/services/api/courseById'
import { dateConvertor } from '../../../core/services/Functions/DateMiladi'

// ** Table columns 

export const columnPayment = [
    {
    name: 'دوره',
    minWidth: '100px',
    cell: row => {
      const [course, setCourse] = useState([])
      const courseDetail = async () => {
        let res = await getCourseById(row.courseId)
        setCourse(res)
      }
      useEffect(() => {
        courseDetail()
      }, [])
      
      return (
        <div>
          <div>
            <img width={80} height={80} src={row.imageAdress && row.imageAdress.slice(0, 4) != "https" ? row.imageAdress : "https://classapi.sepehracademy.ir///Pictures//Course//blank-thumbnail_4031a67c-6002-4004-baf7-c0840ebed86f.jpg"}/>
            <h6 className='DannaM'>{course.title}</h6>
          </div>
        </div>
      )
    }
    },
    {
      name: 'مبلغ',
      minWidth: '100px',
      cell: row => {
        
        return (
          <div>
            <div>
              <h6 className='DannaM'>{row.paid}</h6>
            </div>
          </div>
        )
      }
      },
      {
        name: 'تاریخ',
        minWidth: '100px',
        cell: row => {
          
          return (
            <div>
              <div>
                <h6 className='DannaM'>{(dateConvertor(row.insertDate))}</h6>
              </div>
            </div>
          )
        }
        },
        {
          name: 'عملیات',
          minWidth: '100px',
          cell: row => {
            return (
              <div>
                <div>
                  <h6 className='DannaM'>مشاهده رسید</h6>
                </div>
              </div>
            )
          }
          },
]