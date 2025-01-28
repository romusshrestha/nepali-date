export default function getNepaliDay (){
    const date = new Date();
    const englishDay = date.toLocaleDateString("en-US", { weekday: "long" })
let nepaliDay;
switch (englishDay) {
  case "Sunday":
    nepaliDay="आइतबार"
    break
  case "Monday":
    nepaliDay="सोमबार"
    break
  case "Tuesday":
    nepaliDay="मंगलबार"
    break
  case "Wednesday":
    nepaliDay="बुधबार"
    break
  case "Thursday":
    nepaliDay="बिहीबार"
    break
  case "Friday":
    nepaliDay="शुक्रबार"
    break
  case "Saturday":
    nepaliDay="शनिबार"
    break
  default:
    break
}
return nepaliDay;
}
