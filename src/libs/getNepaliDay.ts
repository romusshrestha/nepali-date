export default function getNepaliDay (){
    const date = new Date();
    const englishDay = date.toLocaleDateString("en-US", { weekday: "long" })

switch (englishDay) {
  case "Sunday":
    setnepday("आइतबार")
    break
  case "Monday":
    setnepday("सोमबार")
    break
  case "Tuesday":
    setnepday("मंगलबार")
    break
  case "Wednesday":
    setnepday("बुधबार")
    break
  case "Thursday":
    setnepday("बिहीबार")
    break
  case "Friday":
    setnepday("शुक्रबार")
    break
  case "Saturday":
    setnepday("शनिबार")
    break
  default:
    setnepday("")
    break
}
}
