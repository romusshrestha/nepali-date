import React, { useState } from 'react'

export default function Tithi() {
    const [day,setDay] = useState('');
      const getData = async () => {
          const data = await import('../data/2081/1.json', { assert: { type: 'json' } });
      console.log(data.days.find((day) => day.e === '01')); 
      // Access the JSON content
      const days=data.days.find((day) => day.e === '01')
      setDay(days.t)
      }
      getData();
  return (
    <div className='text-blue-500'>
  
      <div>
       Tithi: {day}
      </div>
      
    </div>
  )
}
