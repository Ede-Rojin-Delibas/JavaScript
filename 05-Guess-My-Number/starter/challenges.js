/* Challenge 1 : Functions 
1-Write a function called describeCountry which takes three parameters: country, population and capitalCity. 
Based on this input, the function returns a string with this format: 'Finland has 6 million people and its capital city is 
Helsinki'.

2-Call this function 3 times, with input data for 3 different countries. Store the returned values in 3 different variables, 
and log them to the console.

 */
/* const describeCountry = function (country, population, capitalCity) {
  return `Finland has 6 million people and its capital city is 
    Helsinki`;
};

const country1 = describeCountry('Finland', 30000, 'Helsinki');
const country2 = describeCountry('India', 30000000, 'New Delhi');
console.log(country1);
console.log(country2);
 */

// Challenge 2 : Function declarations and Expressions
/* 1- The world population is 7900 million people. Create a function declaration called percentageOfWorld1 which receives a 
population value, and returns the percentage of the world population that the given population represents. For example, China 
has 1441 million people, so it's about 18.2% of the world population.
//a) understand the problem: we have world pop value and also have the population that we want to calculate
//the formulation is; (countryPop / worldpop)* 100

2- To calculate the percentage, divide the given population value by 7900 and then multiply by 100.

3- Call percentageOfWorld1 for 3 populations of countries of your choice, store the results into variables, and log them to 
the console.

4- Create a function expression which does the exact same thing, called percentageOfWolrd2, and also call it with 3 country 
populations (can be the same populations).
 */
//Function expressions:Essentially a function value stored in a variable
const percentageOfWorld1 = function (populationValue) {
  const countryPopulation = (populationValue / 7900) * 100;
  return countryPopulation;
};
// console.log(percentageOfWorld1(1441));

//function declaration:Function that can be used before it's declared
function percentageOfWorld2(populationValue2) {
  return (populationValue2 / 7900) * 100;
}
// console.log(percentageOfWorld2(1200));
//arrow function:quick one line functions
const percentageOfWorld3 = populationValue3 => (populationValue3 / 7900) * 100;

/* Challenge 3 : Arrays
1-Create an array containing 4 population values of 4 countries of your choice. You may use the values you have been using 
previously. Store this array into a variable called populations.

2-Log to the console whether the array has 4 elements or not (true or false).

3-Create an array called percentages containing the percentages of the world population for these 4 population values. Use the 
function percentageOfWorld1 that you created earlier to compute the 4 percentage values. */

const populations = [1200, 1400, 2300, 340];
const lenArray = populations.length === 4 ? true : false;
// console.log(lenArray);

const percentages = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
  percentageOfWorld1(populations[3]),
];
console.log(percentages);

/* Challenge 4: Array Operations/Methods
1- Create an array containing all the neighbouring countries of a country of your choice. Choose a country which has at least 2 
or 3 neighbours. Store the array into a variable called neighbours.

2- At some point, a new country called 'Utopia' is created in the neighbourhood of your selected country, so add it to the end of 
the neighbours array.

3- Unfortunately, after some time the new country is dissolved, so remove it from the end of the array.

4- If the neighbours array does not include the country 'Germany', log to the console: 'Probably not a central european country :D'.

5- Change the name of one of your neighbouring countries. To do that, find the index of the country in the neighbours array, and 
then use that index to change the array at that index position. For example, you can search for 'Sweden' in the array, and then 
replace it with 'Republic of Sweden'. */

const neighbours = ['Japan', 'Tailand', 'South Korea', 'North Korea'];

neighbours.push('Utopia');
// console.log(neighbours);
neighbours.pop('Utopia');
// console.log(neighbours);

/* const germany = neighbours['Germany']
  ? console.log('Probably not a central european country :D')
  : console.log('Germany is in it');
 */
neighbours[2] = 'Italy';
// console.log(neighbours);

/* Challenge 5: Objects
Create an object called myCountry for a country of your choice, containing properties country, capital, language, population 
and neighbours (an array like we used in previous assignments).
 */
const myCountry = {
  country: 'Bhutan',
  capital: 'Thimphu',
  language: 'Dzongkha',
  population: 800000,
  neighbours: ['India', 'China'],
  describe: function () {
    console.log(
      `${this.country} has ${this.population} thousand ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`,
    );
  },
  checkIsland: function () {
    this.isIsland = this.neighbours.length === 0 ? true : false;
    return this.isIsland;
  },
};
/* Challenge 6: Dot vs. Bracket Notation
Using the object from the previous assignment, log a string like this to the console: 'Finland has 6 million finnish-speaking 
people, 3 neighbouring countries and a capital called Helsinki'.

Increase the country's population by two million using dot notation, and then decrease it by two million using bracket notation.
 */
/* console.log(
  `${myCountry.country} has ${myCountry.population} thousand ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`,
); */
// myCountry.population = myCountry.population + 1200000;
myCountry['population'] = myCountry['population'] - 200000;
// console.log(myCountry.population);

/* Challenge 7: Object Methods
1- Add a method called describe to the myCountry object. This method will log a string to the console, similar to the string 
logged in the previous assignment, but this time using the 'this' keyword.

2- Call the describe method.

3- Add a method called checkIsland to the myCountry object. This method will set a new property on the object, called isIsland. 
isIsland will be true if there are no neighbouring countries, and false if there are. Use the ternary operator to set the 
property. */
// myCountry.describe();
myCountry.checkIsland();
// console.log(myCountry.checkIsland());
/* Challange 8:
Looping Arrays, Breaking and Continuing
1-Let's bring back the populations array from a previous assignment.

2-Use a for loop to compute an array called percentages2 containing the percentages of the 
world population for the 4 population values. Use the function percentageWOrld1 that you created earlier.

3-Confirm that percentages2 contains exactly the same values as the percentages array that we created manually in the previous 
assignment, and reflect on how much better this solution is. 
 
a)understanding the problem
-percentage2 array is going to have 

*/
/* const percentages2 = [];
for (let i = 0; i < populations.length; i++) {
  percentages2.push(percentageOfWorld1(populations[i]));
  if (percentages2[i] === percentages[i]) {
    console.log('arrays are the same');
  } else {
    console.log('they different');
  }
} */

/* challenge 9: Looping Backwards and Loops in Loops
Store this array of arrays into a variable called listOfNeighbours:

[['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];
Log only the neighbouring countries to the console, one by one, not the entire arrays. Log a string like 'Neighbour: Canada' for each country.

You will need a loop inside a loop for this. This is actually a bit tricky, so don't worry if it's too difficult for you! But you can still try to figure this out anyway 😉

a) understand the problem
print the neighbouring countries like this: Neighbour: Canada for Mexico

b) sub-problems
- you need to define a for loop for traveling on array(listofNeighbours)
-dış loop mantığı: hangi küçük arraydeyim
- iç loop mantığı: 
 */
const listOfNeighbours = [
  ['Canada', 'Mexico'], //i=0
  ['Spain'], //i=1
  ['Norway', 'Sweden', 'Russia'], //i=2
];
for (let i = 0; i < listOfNeighbours.length; i++) {
  for (let j = 0; j < listOfNeighbours[i].length; j++) {
    //j içteki arrayin uzunluğuna göre dönmeli, i değerine göre değil
    // console.log(`Neighbour:${listOfNeighbours[i][j]}`);
  }
}

/* 
challenge 10: The while Loop
1-Recreate the challenge from the lecture Looping Arrays, Breaking and Continuing, but this time using a while loop (call the array percentages3).

2-Reflect on what solution you like better for this task: the for loop or the while loop? 
*/

let i = 0;
percentages3 = [];
while (i < populations.length) {
  percentages3.push(percentageOfWorld3(populations[i]));
  i++;
}

// console.log(percentages3);

//17.06.2026 review and coding
//object içinde yazdığın fonksiyona method denir.
//boş array loop un dışında oluşturulmalıdır yoksa her turda sıfırlanır.
//return yoksa sonuç undefined olur

//first ch after review
const describeCity = function (city, country) {
  // console.log(`${city} is in ${country}`);
};

describeCity('Ankara', 'Türkiye');
describeCity('Madrid', 'Spain');
describeCity('Tokyo', 'Japan');

//ch2: percentage function
const europePopulation = 750;
const percentageOfEurope = function (population) {
  return (Number(population) / europePopulation) * 100;
};
// console.log(percentageOfEurope(85));
