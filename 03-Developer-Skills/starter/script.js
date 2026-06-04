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
    value: Number(prompt("Degrees celsius:")),
  };
  //B)FIND
  console.table(measurement);

  // console.log(measurement.value);
  /* console.warn(measurement.value);
  console.error(measurement.value);
 */
  const kelvin = measurement.value + 273;
  return kelvin;
};
//A) IDENTIFY
console.log(measureKelvin());
