let isLeapYear = year => (0 == year % 4 && 0 != year % 100 || 0 == year % 400) ? true : false;

export default isLeapYear;
