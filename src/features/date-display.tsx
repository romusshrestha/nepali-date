//ui

import { Card, CardContent, CardHeader, CardTitle } from "~components/ui/card"
// import { Separator } from "@/components/ui/separator"
import { Calendar, Clock } from "lucide-react"
import { useState } from "react";
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

export default function DateDisplay() {
  const [tithi, setTithi] = useState('');
  const [nepaliDay, setNepaliDay] = useState('');
  const [nepaliMonth, setNepaliMonth] = useState('');
  const { bsDate, year, month, date, adDate } = getNepaliDate();
  const getDateDatas = async () => {
    const fetchedTithi = await getData('01', '1', '2081');
    console.log(month);
    const nepMonth= month
    console.log("nepmonth",nepMonth);
    const convertedMonth= getBsMonth(nepMonth);
    console.log(convertedMonth);
    
    const convertedDay = getNepaliDay();
    console.log(tithi);
    setNepaliMonth(convertedMonth);
    setNepaliDay(convertedDay);
    setTithi(fetchedTithi);
  }
  getDateDatas();


  // Example events, replace with actual events for the day
  const events: Event[] = [
    { time: "११:००", title: "टीम मिटिङ" },
    { time: "१४:३०", title: "लन्च ब्रेक" },
    { time: "१६:००", title: "प्रोजेक्ट रिभ्यु" },
  ]

  return (
    <div >
      {/* <div className={inter.className}> */}
      <Card className="w-80 bg-red-50 rounded-lg overflow-hidden mx-2 my-2">
        <CardHeader className="bg-red-800 text-white">
          <CardTitle className="text-center font-bold text-2xl font-sans"> {nepaliMonth} {bsDate[2]} {bsDate[0]}</CardTitle>
          <p className="text-center text-sm font-sans">{adDate}</p>
          <p className="text-center text-lg mt-2 font-sans">{nepaliDay}</p>
          <p className="text-center text-lg mt-2 font-sans">{tithi}</p>
        </CardHeader>
        <CardContent className="p-4">
          <div className="flex items-center mb-4">
            <Calendar className="mr-2 h-5 w-5 text-red-800" />
            <h2 className="text-lg font-semibold font-sans">आजको कार्यक्रमहरू</h2>
          </div>
          {events.length > 0 ? (
            <ul className="space-y-3">
              {events.map((event, index) => (
                <li key={index} className="flex items-start">
                  <Clock className="mr-2 h-4 w-4 mt-1 text-red-800" />
                  <div>
                    <span className="font-semibold font-sans">{event.time}</span>
                    <span className="mx-2">-</span>
                    <span className="font-sans">{event.title}</span>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-center text-gray-500 italic font-sans">कुनै कार्यक्रम छैन</p>
          )}
        </CardContent>
        <div className="absolute inset-0 -z-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CjxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgZmlsbD0iI2ZmZWJlZSI+PC9yZWN0Pgo8cGF0aCBkPSJNMzAgMzBMMzAgMEw2MCAzMEw2MCA2MEwzMCAzMEwwIDYwTDAgMzBMMzAgMFoiIGZpbGw9IiNmZmQ1ZDUiPjwvcGF0aD4KPC9zdmc+')] opacity-10" />
      </Card>
    </div>
  )
}