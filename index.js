/* Your Code Here */

function thePayRollSystem() {
  function createEmployeeRecord(employeeData) {
    let testEmployee = {};
    testEmployee.firstName = employeeData[0];
    testEmployee.familyName = employeeData[1];
    testEmployee.title = employeeData[2];
    testEmployee.payRatePerHour = employeeData[3];
    testEmployee.timeInEvents = [];
    testEmployee.timeOutEvents = [];
    return testEmployee;
  }
  let testEmployee = createEmployeeRecord(["Gray", "Worm", "Security", 1]);
  return testEmployee;
}
thePayRollSystem();

function createEmployeeRecords(twoRows) {
  let employeeRecords = twoRows;
  return employeeRecords;
}
let twoRows = [
  ["moe", "sizlak", "barkeep", 2],
  ["bartholomew", "simpson", "scamp", 3],
];
const chai = require("chai");
const spies = require("chai-spies");
chai.use(spies);
``;
let mySpy = chai.spy.on(window, "createEmployeeRecord");
createEmployeeRecords(twoRows);
let nameExtractor = function (e) {
  return e.firstName;
};

function createTimeInEvent(bpRecord, timestamp) {
  let timestamp = "2014-02-28 1400";
  let newEvent = {
    type: "TimeIn",
    date: timestamp.substring(0, 10),
    time: parseInt(timestamp.substring(11), 10),
  };
  if (!bpRecord.timeInEvents) {
    bpRecord.timeInEvents = [];
  }
  bpRecord.timeInEvents.push(newEvent);

  return bpRecord;
}


function createTimeOutEvent(bpRecord, timestamp) {
  let timestamp = "2015-02-28 1700";
  let newEvent = {
    type: "TimeOut",
    date: timestamp.substring(0, 10),
    time: timestamp(parseInt.substring(11), 10),
  };
  if (!bpRecord.timeOutEvents) {
    bpRecord.timeOutEvents = [];
  }
  bpRecord.timeOutEvents.push(newEvent);

  return bpRecord;
}


function hoursWorkedOnDate(date) {
  const timeInEvent = this.timeInEvents.find((event) => event.date === date);
  const timeOutEvent = this.timeOutEvents.find((event) => event.date === date);

  const timeIn = parseInt(timeInEvent.hour.slice(0, 2), 10);
  const timeOut = parseInt(timeOutEvent.hour.slice(0, 2), 10);

  const hoursWorked = timeOut - timeIn;

  return hoursWorked;
}

function wagesEarnedOnDate(date) {
  const hoursWorked = hoursWorkedOnDate.call(this, date);

  const wagesEarned = hoursWorked * this.payRatePerHour;

  return wagesEarned;
}

function allWagesFor() {

  const totalWages = this.timeInEvents.reduce((total, timeInEvent) => {
const date = timeInEvent.date;

const wagesEarned = wagesEarnedOnDate.call(this, date);

return total + wagesEarned;
}, 0);

return totalWages;
}

function allWagesFor () {

  let rRecord = createEmployeeRecord(["Rafiki", "", "Aide", 10]);
  let sRecord = createEmployeeRecord(["Simba", "", "King", 100]);

  let sTimeData = [
    ["2019-01-01 0900", "2019-01-01 1300"], 
    ["2019-01-02 1000", "2019-01-02 1300"]  
  ]

  let rTimeData = [
    ["2019-01-11 0900", "2019-01-11 1300"], 
    ["2019-01-12 1000", "2019-01-12 1300"]  
  ]

  sTimeData.forEach(function(d){
    let [dIn, dOut] = d;
    createTimeInEvent.call(sRecord, dIn);
    createTimeOutEvent.call(sRecord, dOut);
  });

  rTimeData.forEach(function(d){
    let [dIn, dOut] = d;
    createTimeInEvent.call(rRecord, dIn);
    createTimeOutEvent.call(rRecord, dOut);
  });
  let grandTotalOwed = [sRecord, rRecord].reduce(function (total, employee){
    return total + allWagesFor.call(employee);
  }, 0);
  return grandTotalOwed;
}





/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
  const eligibleDates = this.timeInEvents.map(function (e) {
    return e.date;
  });

  const payable = eligibleDates.reduce(
    function (memo, d) {
      return memo + wagesEarnedOnDate.call(this, d);
    }.bind(this),
    0
  ); // <== Hm, why did we need to add bind() there? We'll discuss soon!

  return payable;
};
