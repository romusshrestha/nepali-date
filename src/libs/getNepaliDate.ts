import { adToBs } from "@sbmdkl/nepali-date-converter";
import { log } from "console";

export default async function getNepaliDate() {
    try {

        const today = new Date();
        today.getDate();
        console.log(today.toString());
        const year= today.getFullYear().toString();
        const month= today.getMonth().toString()+1;
        const date= today.getDate().toString();
        const adDate= `${year}-${month}-${date}`;

        const adToBsDate = await adToBs(adDate);
        console.log("here:", adToBsDate);
        console.log(adToBsDate);
        const bsDate = adToBsDate.toString().split("-");
        console.log(bsDate);
        return bsDate;
        
        
    } catch (e) {
        console.log(e.message);
    }
}
