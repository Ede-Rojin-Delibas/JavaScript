// Remember, we're gonna use strict mode in all scripts now!
"use strict";

const calcAge = function (birthYear) {
  return 2026 - birthYear;
};
// console.log(calcAge(1991));

// console.log("npm problem has been running");

//PROBLEM
//We work for a company building a smart home termometer.Our most recent task is this:"Given an array of
// temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might
// be a sensor error."
const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

//1-UNDERSTANDING THE PROBLEM
//What is temp amplitude? Answer:difference between highest and lowest temp
//How to calculate min and max temperatures?
//What's a sensor error? And what to do?

//2-BREAKING UP INTO SUB-PROBLEMS
//How to ignore errors?
//Find max value in temp array
//Find min value in temp array
//subtract min from max(amplitude) and return it

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  // console.log(max, min);
  return max - min;
};
const amplitude = calcTempAmplitude(temperatures);
// console.log(amplitude);

//PROBLEM2:
//Function should now receive 2 arrays of temps

//1-Understanding the problem
//With 2 arrays, should we implement functionality twice? Ans: No just merge two array

//2-Breaking up into sub-problems
//Merge 2 arrays:

const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  // console.log(temps);

  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  // console.log(max, min);
  return max - min;
};
const amplitudeNew = calcTempAmplitudeNew([23, 13, 140], [12, 160, 1]);
// console.log(amplitudeNew);

const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celsius",
    //C) FIX
    value: 10, //Number(prompt("Degrees celsius:")),
  };
  //B)FIND
  // console.table(measurement);

  // console.log(measurement.value);
  /* console.warn(measurement.value);
  console.error(measurement.value);
 */
  const kelvin = measurement.value + 273;
  return kelvin;
};
//A) IDENTIFY
// console.log(measureKelvin());

//BUGGING
const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);
  // console.log(temps);

  let max = 0;
  let min = 0;
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;

    // debugger;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  // console.log(max, min);
  return max - min;
};
const amplitudeBug = calcTempAmplitudeBug([3, 4, 9], [1, 6, 5]);
// console.log(amplitudeBug);

//Coding Challenge #1
/* Given an array of forecasted maximum temperatures, the thermometer displays a string with these 
temperatures.
test data1:[17,21,23]
test data2:[12,5,-5,0,4]

Example:data1 will print "...17°C in 1 days ... 21°C in 2 days ... 23°C in 3 days..."
Create a function 'printForecast' which takes in an array 'arr' and logs a string  like the above to the console
Use the problem solving framework: Understand the problem and break it up into sub-problems!
*/
//1)Understanding
//parameter is array and result or return is a string
//I need to print the dots(this is optinal) + array's number + day accordingly
//What is the ---days? Ans: index+1

//2)break it up into sub-problems
//how to go through to elements in an array=> with for loop
//update the day numbers according to array length=>day variable is going to hold the number
//JS de aynı anda iki farklı şeyi güncellemek -> iç içe döngüler
//transform array into string(accumulator, you defined forecaststr(:) good job girl)
//string needs to contain day -> index+1 = arr.length
//add dots between elements of the numbers

const t1 = [17, 21, 23];
const t2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str = str + `${arr[i]}°C in ${i + 1} days ...`;
  }
  console.log("... " + str);
};

// printForecast(t2);

//CHALLENGE-2(With AI)
/*
Let's say you are building a time tracking application for freelancers. At some point in building this app,
you need a function that receives daily work hours for a certain week and returns:

//B-BREAK IT UP INTO SUB-PROBLEMS
1.Total hours worked(sum func for total hours)✅
2.Average daily hours (divide by the day that worked in each week if its full)✅
3.The day with the most hours worked(max)
maximum değeri bul, onun indexini bul ve 
4.Number of the days worked(count, it can be used in average)
5.Whether the week was full-time(worked 35 hours or more) [control with if statement]

TEST DATA: [7.5, 8, 6.5, 0, 8.5, 4, 0]
*/
//A) UNDERSTANDING THE PROBLEM
//user input for daily work hours for a certain week
//return daily work hours

const timeTracking = function (dailyWorkHours) {
  //first sub-solution
  let totalHours = 0;
  let averageHoursPerWeek;
  for (let i = 0; i < dailyWorkHours.length; i++) {
    totalHours += dailyWorkHours[i];
    return `Total hours worked ${totalHours}`;
  }
  averageHoursPerWeek = totalHours / dailyWorkHours.length;
  let max = dailyWorkHours[0];
  for (let i = 0; i < dailyWorkHours.length; i++) {
    const currTemp = dailyWorkHours[i];
    if (max < currTemp) max = currTemp;
    return `The day with the most hours worked ${i}`;
  }
};

const results = timeTracking([7.5, 8, 6.5, 0, 8.5, 4, 0]);
console.log(results);
