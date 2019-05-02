/*
 * Given a date string, 'dateString', in the format MM/DD/YYYY, find and return the day name for that date.
 */
function getDayName(dateString) {
    const d = new Date(dateString);
    let options = {
        weekday: 'long'
    };
    let dayName = new Intl.DateTimeFormat('en-US', options).format(d);
    return dayName;
};