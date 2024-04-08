// Use Day.js to format the following variables:
// TODO: 1. What is your graduation date in the following format: Jan 1st, 1999?
var gradDate = dayjs("2021-06-15").format("D MMM YYYY");
$("#1a").text(gradDate);

// TODO: 2. What day of the week will 1/1/2027 be?
var weekDay = dayjs("1.1.2027", "D.M.YYYY").format("ddd D MMM YYYY");
$("#2a").text(weekDay);

// TODO: 3. What is the difference in days between May 4, 2027 and today?

// dayjs object for May 4, 2027
var targetDay = dayjs('2027-05-04');

// dayjs object for today
var today = dayjs();

// number of days between targetDay and today
var days = targetDay.diff(today, 'days');
$('#3a').text(days);

// TODO: 4. What is the current time in the format: hours:minutes:seconds
var time = dayjs().format("HH:mm:ss");
$("#4a").text(time);

// TODO: 5. What is the current Unix timestamp?
var unix = dayjs().unix();
$("#5a").text(unix);

// TODO: 6. Parse the following Unix timestamp, 1318781876, and convert into any time/date format.
var unixFormat = dayjs.unix(1318781876).format("D MMM YYYY, HH:mm:ss");
$("#6a").text(unixFormat);