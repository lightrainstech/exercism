export function isLeapYear (year) {
  return (year % 4 === 0) ? ( year % 400 === 0 ) ? true : (year % 100 === 0 ) ? false : true : false
}
export default isLeapYear
