import React from 'react';
import Cards from '../Components/Cards';

const All = ({data}) => {
    return (
        <div className='d-flex flex-wrap bg-light border p-3'>
            {data.map((element,index)=>{
                return (
                  <Cards element={element} index={index}/>
                )
            })}
        </div>
    );
};

export default All;