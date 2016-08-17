class Gigasecond {
  constructor(dateTime) {
    this.dateTime = dateTime;
    console.log(`Enter Date : ${this.dateTime}`);
  }
  date(){
    let endDate = new Date(this.dateTime.getTime() + (10**9));
    return endDate;
  }
}

export default Gigasecond;
