import React from 'react';
import Cards from '../Components/Cards';

const DataScience = ({data}) => {
    const datascience=data.filter((ele)=>ele.head==="Data Science")
    return (
        <>
            <h1>Data Science</h1>
            {datascience.map((element,index)=>{
                return(
                    <Cards element={element} index={index}/>
                )
            })}
        </>
    );
};

export default DataScience;