/* Your Code Here */

  let createEmployeeRecord = function(employeeData) {
    let testEmployee = {};
    testEmployee.firstName = employeeData[0];
    testEmployee.familyName = employeeData[1];
    testEmployee.title = employeeData[2];
    testEmployee.payRatePerHour = employeeData[3];
    testEmployee.timeInEvents = [];
    testEmployee.timeOutEvents = [];
    return testEmployee;
  }
function createEmployeeRecords(twoRows) {
  return twoRows.map(createEmployeeRecord)
  }

let twoRows = [
  ["moe", "sizlak", "barkeep", 2],
  ["bartholomew", "simpson", "scamp", 3],
];



function createTimeInEvent( timestamp) {
  let [date, hour] = timestamp.split(' ')
  this.timeInEvents.push({
    type: "TimeIn",
    hour : parseInt(hour, 10),
    date,
  });
 

  return this;
}

function createTimeOutEvent(timestamp) {
  let [date, hour] = timestamp.split(' ')
  this.timeOutEvents.push({
    type: "TimeOut",
    hour : parseInt(hour, 10),
    date,
  })
 
  return this;
}

function hoursWorkedOnDate(soughtDate) {
  let timeInEvent = this.timeInEvents.find(e => e.date === soughtDate);
  let timeOutEvent = this.timeOutEvents.find(e => e.date === soughtDate);


  const hoursWorked = (timeOutEvent - timeInEvent) / 100;

  return hoursWorked;
}

let wagesEarnedOnDate = function(dateSought) {
  const wagesEarned = hoursWorkedOnDate.call(this, dateSought) * this.payPerHour

  return parseFloat(wagesEarned.toString());
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
 
  }

  let findEmployeeByFirstName = function(srcArray, firstName) {

    return srcArray.find(function(rec){
      return rec.firstName === firstName
    });
  };

  let calculatePayroll = function(arrayOfEmployeeRecords){
    return arrayOfEmployeeRecords.reduce(function(memo, rec){
      return memo + allWagesFor.call(rec)
    }, 0)
  }
