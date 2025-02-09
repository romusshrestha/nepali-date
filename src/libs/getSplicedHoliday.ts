
// Function to splice the text into date and events

export default async function getSplicedHoliday( text: string) {
    // Use a regular expression to match dates and events
    const regex = /(\d{2})([^\d]+)/g;
    const matches = [...text.matchAll(regex)];

    // Map matches into an array of objects
    const events = matches.map(match => ({
        date: match[1], // Extract the date
        events: match[2].trim().split(',').map(event => event.trim()) // Split events by comma and trim
    }));

    return events;
}

// Call the function and log the result
