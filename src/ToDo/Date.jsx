import React, { useEffect, useState } from 'react'

function Date() {
    const [dateTime, setDateTime] = useState('');

    useEffect(()=>{
        const now = new Date();
        const formattedDate = now.toLocalDateString();
        const formattedTime = now.toLocalTimeString();

        setDateTime(`${formattedDate} - ${formattedTime}`);
    },[])


  return (
    <h1>{dateTime}</h1>
  )
}

export default Date