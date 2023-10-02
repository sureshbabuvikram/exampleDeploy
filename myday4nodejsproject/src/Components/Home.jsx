import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
    const[empData,setEmpData]=useState([])
    useEffect(()=>{
        fetchData();
    },[])

    const fetchData=async()=>{
        await axios.get("https://examplebackend-sn33.onrender.com/api/emp")
        .then(res=>setEmpData(res.data))
        .catch((err)=>{
            console.log(err);
        })
    }
    console.log(empData);


    return (
        <div>
            {empData.map((item,index)=>{
                return(
                    <>
                    <div key={index}>
                        <h2>{item.firstName}</h2>
                        <h2>{item.lastName}</h2>
                        <h2>{item.email}</h2>
                        <h2>{item.position}</h2>
                    </div>
                    </>
                )
            })}
        </div>
    );
};

export default Home;