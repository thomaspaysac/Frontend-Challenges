const RATING_BOX = document.querySelector('.rating-box__main');
const THANKS_BOX = document.querySelector('.thanks-box__main');
const USER_RATING_1 = document.querySelector('#rating1');
const USER_RATING_2 = document.querySelector('#rating2');
const USER_RATING_3 = document.querySelector('#rating3');
const USER_RATING_4 = document.querySelector('#rating4');
const USER_RATING_5 = document.querySelector('#rating5');
let userRatingChoice = document.querySelectorAll('.rating-box__rating');
let finalRating = document.querySelector('final-rating');
const SUBMIT_BUTTON = document.querySelector('#rating-box__submit-button');


USER_RATING_1.addEventListener('click', function() {
  USER_RATING_1.className = 'rating-box__rating chosen';
  USER_RATING_2.className = 'rating-box__rating';
  USER_RATING_3.className = 'rating-box__rating';
  USER_RATING_4.className = 'rating-box__rating';
  USER_RATING_5.className = 'rating-box__rating';
  finalRating = '1';
  document.getElementById("final-rating").textContent=finalRating;
})

USER_RATING_2.addEventListener('click', function() {
  USER_RATING_1.className = 'rating-box__rating';
  USER_RATING_2.className = 'rating-box__rating chosen';
  USER_RATING_3.className = 'rating-box__rating';
  USER_RATING_4.className = 'rating-box__rating';
  USER_RATING_5.className = 'rating-box__rating';
  finalRating = '2';
  document.getElementById("final-rating").textContent=finalRating;
})

USER_RATING_3.addEventListener('click', function() {
  USER_RATING_1.className = 'rating-box__rating';
  USER_RATING_2.className = 'rating-box__rating';
  USER_RATING_3.className = 'rating-box__rating chosen';
  USER_RATING_4.className = 'rating-box__rating';
  USER_RATING_5.className = 'rating-box__rating';
  finalRating = '3';
  document.getElementById("final-rating").textContent=finalRating;
})

USER_RATING_4.addEventListener('click', function() {
  USER_RATING_1.className = 'rating-box__rating';
  USER_RATING_2.className = 'rating-box__rating';
  USER_RATING_3.className = 'rating-box__rating';
  USER_RATING_4.className = 'rating-box__rating chosen';
  USER_RATING_5.className = 'rating-box__rating';
  finalRating = '4';
  document.getElementById("final-rating").textContent=finalRating;
})

USER_RATING_5.addEventListener('click', function() {
  USER_RATING_1.className = 'rating-box__rating';
  USER_RATING_2.className = 'rating-box__rating';
  USER_RATING_3.className = 'rating-box__rating';
  USER_RATING_4.className = 'rating-box__rating';
  USER_RATING_5.className = 'rating-box__rating chosen'
  finalRating = '5';
  document.getElementById("final-rating").textContent=finalRating;
})

for (let i=0; i < userRatingChoice.length; i++) {
  userRatingChoice[i].addEventListener('click', function() {
    SUBMIT_BUTTON.removeAttribute('disabled');;
  })
}

SUBMIT_BUTTON.addEventListener('click', function() {
  RATING_BOX.style.display = 'none';
  THANKS_BOX.style.display = 'flex';
})