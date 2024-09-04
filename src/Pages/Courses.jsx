import React from 'react';
import Cards from '../Components/Cards';

const Courses = ({data}) => {
    const course= data.filter((ele)=>ele.head==="Courses")
    return (
        <>
            <h1>Courses</h1>
            {course.map((element,index)=>{
                return(
                    <Cards element={element} index={index}/>
                )
            })}
        </>
    );
};

export default Courses;