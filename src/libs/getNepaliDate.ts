import { adToBs } from "@sbmdkl/nepali-date-converter";
import { log } from "console";

export default  function getNepaliDate() {
    try {

        const today = new Date();
        today.getDate();
        console.log(today.toString());
        const year= today.getFullYear().toString();
        const month= (today.getMonth()+1).toString();
        const date= today.getDate().toString();
        const adDate= `${year}-${month}-${date}`;
        console.log(today.getMonth().toString());

        const adToBsDate = adToBs(adDate);
        console.log("here:", adToBsDate);
        console.log(adToBsDate);
        const bsDate = adToBsDate.toString().split("-");
        console.log(bsDate);
        return {bsDate,year,month,date,adDate};
        
        
    } catch (e) {
        console.log(e.message);
    }
}
