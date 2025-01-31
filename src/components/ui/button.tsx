import { Calendar, Clock, Heart } from "lucide-react";
import type { TabType } from "~features/date-display";

interface IButtonProps {
    text: string;
    isHoliday: boolean;
    activeTab?: TabType;
    tab?: TabType;
    setActiveTab: React.Dispatch<React.SetStateAction<TabType | null>>;
}

const getTabIcon = (tab: TabType) => {
    switch (tab) {
        case "events":
            return <Calendar className="w-5 h-5 inline" />
            break;
        case "bratabandha":
            return <Clock className="w-5 h-5 inline" />
            break;
        case "marriage":
            return <Heart className="w-5 h-5 inline" />
            break;
        default:
            break;
    }
}
export default function Button({ text, isHoliday, activeTab, tab, setActiveTab }: IButtonProps) {
    return (
        <button
            className={` flex-1 text-xs border rounded-lg px-3 py-1 hover:opacity-85 duration-200 ${isHoliday ? (activeTab === tab ? "bg-red-400 text-white border-red-900 " : "bg-red-300 opacity-55 ") : (activeTab === tab ? "bg-emerald-400 border-emerald-800 " : "bg-emerald-300 opacity-55") }  whitespace-nowrap overflow- visible text-ellipsis`}
            onClick={() => setActiveTab(tab)}
        >
            {getTabIcon(tab)}  {text}
        </button>
    )
}
