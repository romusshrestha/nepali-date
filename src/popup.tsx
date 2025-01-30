import { useEffect, useState } from "react";
import DateDisplay from "~features/date-display";
import getNepaliDate from "~libs/getNepaliDate";

import "~style.css"

function IndexPopup() {
  const [isHoliday,setIsHoliday] = useState<boolean>(false);
  useEffect(() => {
      const fetchData = async () => {
        try {
          const dateData = await getNepaliDate();
          if (dateData) {
            console.log("Date Data: ", dateData);
            setIsHoliday(dateData.singleDayData.h);
          }
        } catch (error) {
          console.error("Error fetching date data:", error)
        }
      }
      fetchData();
    }, [])
  return ( 
    <div className={`p-0.5 ${isHoliday?"bg-red-100":"bg-gradient-to-r from-emerald-100 to-green-100"}` }> 
      <DateDisplay isHoliday={isHoliday}/>
    </div>
  )
}

export default IndexPopup
