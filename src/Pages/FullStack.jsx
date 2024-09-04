import React from 'react';
import Cards from '../Components/Cards';

const FullStack = ({data}) => {
    const fsddata=data.filter((ele)=>ele.head==="Full Stack Development")
    return (
        <>
            <h1>Full Stack Development</h1>
            {fsddata.map((element,index)=>{
                return(
                    <Cards element={element} index={index}/>
                )
            })}
        </>
    );
};

export default FullStack;