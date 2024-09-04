import React from 'react';
import Cards from '../Components/Cards';

const All = ({data}) => {
    return (
        <div>
            {data.map((element,index)=>{
                return (
                  <Cards element={element} index={index}/>
                )
            })}
        </div>
    );
};

export default All;