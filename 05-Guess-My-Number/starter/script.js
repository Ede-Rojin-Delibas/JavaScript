'use strict';

console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Good JOB, Correct Number! ';
document.querySelector('.score').textContent = 10;
document.querySelector('.number').textContent = 50;

document.querySelector('.guess').value = 23;
/* document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = '⛔No Number';
  }
}); */
