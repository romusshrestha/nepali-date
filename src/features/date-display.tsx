//ui

import { Card, CardContent, CardHeader, CardTitle } from "~components/ui/card"
import { ChevronLeft, ChevronRight, LoaderPinwheel } from "lucide-react"
import { useEffect, useState } from "react";
import getNepaliDate from "~libs/getNepaliDate";
import Button from "~components/ui/button";
import DailyEvent from "./daily-event";
import Bratabandha from "./bratabandha-date";
import Marrige from "./marrige-date";
// import { Inter } from "next/font/google"

// const inter = Inter({ subsets: ["latin"] })


interface IDay {
  n: string;
  e: string;
  t: string;
  f: string;
  h: boolean;
  d: number
}
export interface INepaliDate {
  bsDate: string[];
  enYear: string;
  enMonth: string;
  enDate: string;
  englishMonth: string;
  nepaliDay: string;
  nepaliMonth: string;
  singleDayData: IDay
  bratabandhaData: string;
  marriageData: string;
}
// interface IDateDisplayProps {
//   isHoliday: boolean
// }
// { isHoliday }: IDateDisplayProps
export type TabType = "events" | "bratabandha" | "marriage"

export default function DateDisplay() {
  const [nepaliDate, setNepaliDate] = useState<INepaliDate | null>(null);
  const [activeTab, setActiveTab] = useState<TabType>("events");
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isHoliday, setIsHoliday] = useState<boolean>(false);
  useEffect(() => {
    fetchData(currentDate);
  }, [currentDate])

  const fetchData = async (date: Date) => {
    setIsLoading(true);

    try {
      const dateData = await getNepaliDate(date);
      if (dateData) {
        console.log("Date Data: ", dateData);
        setNepaliDate(dateData);
        setIsHoliday(dateData.singleDayData.h);
      }
    } catch (error) {
      console.error("Error fetching Nepali date:", error)
    }
    finally {
      setIsLoading(false);
    }
  }
  const handlePreviousDay = () => {
    console.log("previous day");
    const previousDay = new Date(currentDate);
    previousDay.setDate(currentDate.getDate() - 1);
    setCurrentDate(previousDay);
  };

  const handleNextDay = () => {
    const nextDay = new Date(currentDate);
    nextDay.setDate(currentDate.getDate() + 1);
    setCurrentDate(nextDay);
  };

  if (!nepaliDate || isLoading) {
    return (<>
      <Card className="w-80 bg-red-50 rounded-lg overflow-hidden mx-2 my-2">
        <CardHeader className="bg-red-800 text-white">
          <CardTitle className="text-center font-bold text-2xl font-sans  gap-2">
            Loading Data
            <LoaderPinwheel className="ml-2 h-6 w-6  animate-spin duration-1000 inline" />
          </CardTitle>
        </CardHeader>

      </Card>
    </>);
  }
  return (
    <div >
      {/* <div className={inter.className}> */}
      {/* main card */}
      <Card className={`w-80  rounded-lg shadow-lg overflow-hidden mx-2 my-2 ${isHoliday ? "bg-red-50" : "bg-gradient-to-r from-emerald-500 to-green-600"}`}>
        {/* card header */}
        <CardHeader className={` text-white ${isHoliday ? "bg-red-800" : "bg-gradient-to-r from-emerald-800 to-green-800"}`}>
          <div className="flex items-center justify-between">
            <button
              className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/20 transition-colors"
              aria-label="Previous"
              onClick={handlePreviousDay}
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <div className="flex-grow text-center">
              <CardTitle className="text-center font-bold text-2xl font-sans"> {nepaliDate.nepaliMonth} {nepaliDate.singleDayData.n}, {nepaliDate.bsDate[0]}</CardTitle>
              <p className="text-center text-sm font-sans">{nepaliDate.englishMonth.slice(0, 3)} {nepaliDate.enDate}, {nepaliDate.enYear}</p>
              <p className="text-center text-sm mt-2 font-sans">{nepaliDate.singleDayData.t}</p>
              <p className="text-center text-lg mt-2 font-sans">{nepaliDate.nepaliDay}</p>
            </div>
            <button
              className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/20 transition-colors"
              aria-label="Next"
              onClick={handleNextDay}
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </CardHeader>

        {/* card content */}
        <CardContent className={`p-4 ${isHoliday ? "" : "bg-gradient-to-b from-emerald-50 to-green-100"}`}>

          {/* tabs selector button */}
          <div className="flex space-x-2 mb-4">
            <Button setActiveTab={setActiveTab} tab="events" activeTab={activeTab} text="आजका पर्व" isHoliday={isHoliday} />
            <Button setActiveTab={setActiveTab} tab="bratabandha" activeTab={activeTab} text="ब्रतबन्ध" isHoliday={isHoliday} />
            <Button setActiveTab={setActiveTab} tab="marriage" activeTab={activeTab} text="विवाह" isHoliday={isHoliday} />
          </div>

          {/* display active tags */}

          {activeTab === "events" && (<DailyEvent isHoliday={isHoliday} nepaliDate={nepaliDate} />)}
          {activeTab === "bratabandha" && (<Bratabandha isHoliday={isHoliday} nepaliDate={nepaliDate} />)}
          {activeTab === "marriage" && (<Marrige isHoliday={isHoliday} nepaliDate={nepaliDate} />)}
        </CardContent>
        {/* <div className="absolute inset-0 -z-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CjxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgZmlsbD0iI2ZmZWJlZSI+PC9yZWN0Pgo8cGF0aCBkPSJNMzAgMzBMMzAgMEw2MCAzMEw2MCA2MEwzMCAzMEwwIDYwTDAgMzBMMzAgMFoiIGZpbGw9IiNmZmQ1ZDUiPjwvcGF0aD4KPC9zdmc+')] opacity-10" /> */}
      </Card>
    </div>
  )
}