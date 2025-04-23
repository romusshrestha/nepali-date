
export default async function getData(nepDate: string, nepMonth: string, nepYear: string) {
    try {
        // Dynamically construct the URL
        const url = `https://romusshrestha.github.io/bs-date-data/data/${nepYear}/${nepMonth}.json`;

        // Fetch the JSON data
        const response = await fetch(url);

        // Check if the response is successful
        if (!response.ok) {
            throw new Error(`Failed to fetch data: ${response.statusText}`);
        }

        // Parse the JSON data
        const data = await response.json();
        console.log(data);
       

        // Find the matching day
        const day = data.days.find((day) => day.e === nepDate);
        // Log and return the data if found
        if (day) {
            const bratabandhaData =data.bratabandha[0];
            const marriageData=data.marriage[0];
            const holidayData=data.holiFest;
            console.log("holiday",holidayData[0])
           
            // console.log("holiday data",holidayData);
            const singleDayData= day;
            return {singleDayData,bratabandhaData,marriageData};
        } else {
            console.error(`Date ${nepDate} not found in the data.`);
            return null;
        }
    } catch (error) {
        console.error(`Error fetching data for ${nepMonth}/${nepYear}:`, error);
        return null;
    }
}
