import { adToBs } from "@sbmdkl/nepali-date-converter";
import getNepaliDay from "./getNepaliDay";
import getBsMonth from "./getBsMonth";
import getData from "./getData";

export default async function getNepaliDate() {
    try {


        const today = new Date();

        // date for AD calendar
        const enYear = today.getFullYear().toString();
        const enMonth = (today.getMonth() + 1).toString();
        const enDate = today.getDate().toString();
        const adDate = `${enYear}-${enMonth}-${enDate}`;

        // date for BS calendar from package
        const adToBsDate = adToBs(adDate);
        const bsDate = adToBsDate.toString().split("-");
        const [bsYear, bsMonth, bsDay] = bsDate;
        const nepaliDay = getNepaliDay();
        const nepaliMonth = getBsMonth(bsMonth);

        // get english month in string ; eg: Janurary
        const englishMonth = today.toLocaleDateString("en-US", { month: "long" });

        // fetch tithi, holidays and events fromapi
        const {singleDayData, bratabandhaData, marriageData} = await getData(
            today.getDate().toString().padStart(2, "0"),
            bsMonth,
            bsYear
        )

        return { 
            bsDate, 
            enYear, 
            enMonth, 
            enDate, 
            englishMonth, 
            nepaliDay, 
            nepaliMonth, 
            singleDayData,
            bratabandhaData,
            marriageData
        };


    } catch (e) {
        return null;
        console.log(e.message);
    }
}
