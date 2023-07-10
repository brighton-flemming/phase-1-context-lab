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
 createTimeInEvent();

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
  bpRecord.timeOutEvents.push(newEvent)

  return bpRecord;
}
 return createTimeOutEvent();

function calculateHoursWorkedOnDate(cRecord){
let timeInEvent = "2044-03-15 0900";
let timeOutEvent = "2044-03-15 1100";
let hoursWorkedOnDate = parseInt(timeOutEvent - timeInEvent);


return hoursWorkedOnDate;
}
 return calculateHoursWorkedOnDate();




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
