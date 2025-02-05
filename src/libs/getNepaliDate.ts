import { adToBs } from "@sbmdkl/nepali-date-converter";
import getNepaliDay from "./getNepaliDay";
import getBsMonth from "./getBsMonth";
import getData from "./getData";

// export default async function getNepaliDate() {
export default async function getNepaliDate(date: Date=new Date()) {
    try {
        // date for AD calendar
        const enYear = date.getFullYear().toString();
        const enMonth = (date.getMonth() + 1).toString();
        const enDate = date.getDate().toString();
        const adDate = `${enYear}-${enMonth}-${enDate}`;

        // date for BS calendar from package
        const adToBsDate = adToBs(adDate);
        const bsDate = adToBsDate.toString().split("-");
        const [bsYear, bsMonth, bsDay] = bsDate;
        const nepaliDay = getNepaliDay(date);
        const nepaliMonth = getBsMonth(bsMonth);

        // get english month in string ; eg: Janurary
        const englishMonth = date.toLocaleDateString("en-US", { month: "long" });

        // fetch tithi, holidays and events fromapi
        const {singleDayData, bratabandhaData, marriageData} = await getData(
            date.getDate().toString().padStart(2, "0"),
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
