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

// let createTimeInEvent = function (timeStamp){
//   let[date, hour] = timeStamp.split(' ')

//   this.timeInEvents.push({
//     type:"TimeIn",
//     hour: parseInt(hour, 10),
//     date,
//   })
//   return this
// }



function createTimeInEvent( timestamp) {
  let [date, hour] = timestamp.split(' ')
  this.timeInEvents.push({
    type: "TimeIn",
    hour : parseInt(hour, 10),
    date,
  });
 

  return this;
}

function createTimeOutEvent(bpRecord, timestamp) {
  let newEvent = {
    type: "TimeOut",
    date: timestamp.substring(0, 10),
    time: timestamp(parseInt.substring(11), 10),
  };
 
  bpRecord.timeOutEvents.push(newEvent);

  return bpRecord;
}

function hoursWorkedOnDate(date) {
  const timeInEvent = this.timeInEvents.find((event) => event.date === date);
  const timeOutEvent = this.timeOutEvents.find((event) => event.date === date);

  const timeIn = parseInt(timeInEvent.hour.slice(0, 2), 10);
  const timeOut = parseInt(timeOutEvent.hour.slice(0, 2), 10);

  const hoursWorked = (timeOut - timeIn) / 100;

  return hoursWorked;
}

function wagesEarnedOnDate(date) {
  const hoursWorked = hoursWorkedOnDate.call(this, date);

  const wagesEarned = hoursWorked * this.payRatePerHour;

  return wagesEarned;
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
