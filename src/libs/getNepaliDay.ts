export default function getNepaliDay (){
  const today = new Date();
  const englishDay = today.toLocaleDateString("en-US", { weekday: "long" })

  const nepaliDays = {
    Sunday: "आइतबार",
    Monday: "सोमबार",
    Tuesday: "मंगलबार",
    Wednesday: "बुधबार",
    Thursday: "बिहीबार",
    Friday: "शुक्रबार",
    Saturday: "शनिबार"
  }
  const nepDay = nepaliDays[englishDay] || ""
  return nepDay;
}
