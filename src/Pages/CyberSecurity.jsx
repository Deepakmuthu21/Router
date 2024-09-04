import React from 'react';
import Cards from '../Components/Cards';

const CyberSecurity = ({data}) => {
    const cybersecurity=data.filter((ele)=>ele.head==="Cyber Security")
    return (
        <>
            <h1>Cyber Security</h1>
            {cybersecurity.map((element,index)=>{
                return(
                    <Cards element={element} index={index}/>
                )
            })}

        </>
    );
};

export default CyberSecurity;