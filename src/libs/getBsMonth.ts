const bsMonths = [
    "बैशाख", "जेठ", "असार", "श्रावण", "भदौ", "असोज",
    "कार्तिक", "मंसिर", "पुष", "माघ", "फाल्गुन", "चैत्र"
];
export default function getBsMonth (month: string) {
  const pos=parseInt(month);
return bsMonths[pos-1];
}
