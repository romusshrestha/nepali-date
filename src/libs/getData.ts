export default async function getData (engDate:string) {
    const data = await import('../data/2081/1.json', { assert: { type: 'json' } });
    console.log(data.days.find((day) => day.e === engDate));
    // Access the JSON content
    const days = data.days.find((day) => day.e === engDate)
    console.log(days.t);

    return days.t
}