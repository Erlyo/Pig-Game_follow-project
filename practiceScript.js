'use strict';

// Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const currentE0El = document.getElementById('current--0');
const currentE1El = document.getElementById('current--1');

const diceEL = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let scores, currentScore, activePlayer, playing;

// Starting conditions (Jonas)
const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  currentE0El.textContent = 0;
  currentE1El.textContent = 0;

  diceEL.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');

  diceEL.classList.add('hidden');
};
init();

// Function to switch player
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

//Rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    // 1.Generate a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);

    // 2. Display dice
    diceEL.classList.remove('hidden');
    diceEL.src = `dice-${dice}.png`;

    // 3. check for rolled 1: If true change to next player
    if (dice !== 1) {
      // Add dice to current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

// BTN hold

btnHold.addEventListener('click', function () {
  if (playing) {
    // 1. Add current score to active player's score
    scores[activePlayer] += currentScore;

    // scores[1] = scores[1] + currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // 2. Check if a player's score is >= 100

    if (scores[activePlayer] >= 100) {
      playing = false;
      diceEL.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      // 3. Switch to the next player
      switchPlayer();
    }
  }
});

// ----- CHALLENGE "NEW BUTTON" ------

// ---- Jonas ------
btnNew.addEventListener('click', init);

// ----- Chat GPT -----
/*
btnNew.addEventListener('click', function () {
  // 1. Reset scores
  scores[0] = 0;
  scores[1] = 0;
  currentScore = 0;
  score0El.textContent = 0;
  score1El.textContent = 0;
  currentE0El.textContent = 0;
  currentE1El.textContent = 0;

  // 2. Hide the dice
  diceEL.classList.add('hidden');

  // 3. Reset player states
  activePlayer = 0;
  document
    .querySelector('.player--0')
    .classList.remove('player--winner', 'player--active');
  document
    .querySelector('.player--1')
    .classList.remove('player--winner', 'player--active');
  document.querySelector('.player--0').classList.add('player--active');
});
*/

/*
// ---- Mitt forsøk ------------

//1. Reset score
btnNew.addEventListener('click', function () {
  // 1. Reset Player score

  score0El.textContent = 0;
  score1El.textContent = 0;

  // 2. Reset currentScore
  currentE0El.textContent = 0;
  currentE1El.textContent = 0;
  diceEL.classList.add('hidden');

  // 3. Select player 1.

  if (activePlayer === 0) {
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove('player--winner');
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--active');
  } else if (activePlayer !== 0) {
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove('player--winner');
    switchPlayer();

    //document
    //.querySelector(`.player--${activePlayer}`)
    //.classList.remove('player--active');
  } else {
  }

  // 4. Reset dice
});

/*else if (activePlayer !== 0);
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--winner');
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.add('player--active');
  switchPlayer();*/
