import { useState } from "react";
import { CountButton } from "~features/count-button"
import Tithi from "~features/tithi";

import "~style.css"

function IndexPopup() {
  
  return ( 
    <div className="flex items-center justify-center h-16 w-40 flex-col ">
      <CountButton />
      <Tithi/>
    </div>
  )
}

export default IndexPopup
