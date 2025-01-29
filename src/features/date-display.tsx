//ui

import { Card, CardContent, CardHeader, CardTitle } from "~components/ui/card"
// import { Separator } from "@/components/ui/separator"
import { Calendar, Clock, Loader, Loader2Icon, LoaderCircle, LoaderIcon, LoaderPinwheel } from "lucide-react"
import { useEffect, useState } from "react";
import getData from "~libs/getData";
import getNepaliDate from "~libs/getNepaliDate";
import getNepaliDay from "~libs/getNepaliDay";
import getBsMonth from "~libs/getBsMonth";
// import { Inter } from "next/font/google"

// const inter = Inter({ subsets: ["latin"] })

interface Event {
  time: string
  title: string
}
interface IDay {
  n: string;
  e: string;
  t: string;
  f: string;
  h: boolean;
  d: number
}
interface INepaliDate {
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

export default function DateDisplay() {
  const [nepaliDate, setNepaliDate] = useState<INepaliDate | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const dateData = await getNepaliDate();
        if (dateData) {
          console.log("Date Data: ", dateData);
          setNepaliDate(dateData);
        }
      } catch (error) {
        console.error("Error fetching Nepali date:", error)
      }
    }
    fetchData();
  }, [])



  // Example events, replace with actual events for the day


  if (!nepaliDate) {
    return (<>
      <Card className="w-80 bg-red-50 rounded-lg overflow-hidden mx-2 my-2">
        <CardHeader className="bg-red-800 text-white ">
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
      <Card className="w-80 bg-red-50 rounded-lg overflow-hidden mx-2 my-2">
        <CardHeader className="bg-red-800 text-white">
          <CardTitle className="text-center font-bold text-2xl font-sans"> {nepaliDate.nepaliMonth} {nepaliDate.singleDayData.n}, {nepaliDate.bsDate[0]}</CardTitle>
          <p className="text-center text-sm font-sans">{nepaliDate.englishMonth.slice(0, 3)} {nepaliDate.enDate}, {nepaliDate.enYear}</p>
          <p className="text-center text-sm mt-2 font-sans">{nepaliDate.singleDayData.t}</p>
          <p className="text-center text-lg mt-2 font-sans">{nepaliDate.nepaliDay}</p>
        </CardHeader>
        <CardContent className="p-4">
          <div className="flex items-center mb-2">
            <Calendar className="mr-2 h-5 w-5 text-red-800" />
            <h2 className="text-lg font-semibold font-sans">आजका पर्वहरू</h2>
          </div>
          {nepaliDate.singleDayData.f ? (
            <ul className="px-3 space-y-3 text-sm">
              {nepaliDate.singleDayData.f.split(", ").map((festival, index) => (
                <li key={index} className="flex items-start">
                  <span className="font-semibold text-red-800">
                    •
                  </span>
                  <span className="ml-2">{festival}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-center text-gray-500 italic font-sans"> आज कुनै पर्वहरू छैन</p>
          )}

          <div className="flex items-center mb-2 mt-2">
            <Calendar className="mr-2 h-5 w-5 text-red-800" />
            <h2 className="text-lg font-semibold font-sans">ब्रतबन्ध मुर्हुतहरू</h2>
          </div>
          {nepaliDate.bratabandhaData ? (

            <ul className="px-3 text-sm space-y-3">
              <li className="flex items-start">
                <span className="font-semibold text-red-800">
                  •
                </span>
                <span className="ml-2">
                  {nepaliDate.bratabandhaData}
                </span>
              </li>
            </ul>
          ) : (
            <p className="text-center text-gray-500 italic font-sans"> आज कुनै पर्वहरूछैन</p>
          )}

          <div className="flex items-center mb-2 mt-2">
            <Calendar className="mr-2 h-5 w-5 text-red-800" />
            <h2 className="text-lg font-semibold font-sans">विवाह मुर्हुतहरू</h2>
          </div>
          {nepaliDate.marriageData? (

            <ul className="px-3 text-sm space-y-3">
              <li className="flex items-start">
                <span className="font-semibold text-red-800">
                  •
                </span>
                <span className="ml-2">
                  {nepaliDate.marriageData}
                </span>
              </li>
            </ul>
          ) : (
            <p className="text-center text-gray-500 italic font-sans"> आज कुनै पर्वहरूछैन</p>
          )}
        </CardContent>
        <div className="absolute inset-0 -z-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CjxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgZmlsbD0iI2ZmZWJlZSI+PC9yZWN0Pgo8cGF0aCBkPSJNMzAgMzBMMzAgMEw2MCAzMEw2MCA2MEwzMCAzMEwwIDYwTDAgMzBMMzAgMFoiIGZpbGw9IiNmZmQ1ZDUiPjwvcGF0aD4KPC9zdmc+')] opacity-10" />
      </Card>
    </div>
  )
}