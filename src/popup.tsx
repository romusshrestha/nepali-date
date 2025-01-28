import { useState } from "react";
import DateDisplay from "~features/date-display";

import "~style.css"

function IndexPopup() {
  
  return ( 
    <div className="flex items-center justify-center h-auto w-96 flex-col">
      <DateDisplay/>
    </div>
  )
}

export default IndexPopup
