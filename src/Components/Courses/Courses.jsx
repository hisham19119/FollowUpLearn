import React from 'react'
import "./Courses.css"
import { Allteachers } from '../../Teachers';




const Courses = () => {
return (
    <div className='co-container'>
        <div className='co-wrapper'>
            <div className='co-head'>
                <h1 className='co-h1'>المساقات التعليمية</h1>
            </div>
            <div className='co-car'>
                <div className='co-car-teachers'>
                {Allteachers.map((teacher)=>(
                    <div className='co-each-cart' key={teacher.id}>
                        <div className='co-each-img'>
                            <img href="#" src={teacher.img} rel='teacher'  />
                        </div>
                        <div className='co-each-body'>
                            <div className='co-each-title'><h1>{teacher.nickName}</h1> <h1>{teacher.name}</h1></div>
                            <div className='co-each-para'><p>في مادة  </p></div>
                            <div className='co-each-btn'><button>{teacher.subject} </button></div>
                        </div>
                    </div>
                ))}
                </div>
            </div>
        </div>
    </div>
)
}

export default Courses




