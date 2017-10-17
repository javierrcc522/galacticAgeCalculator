import {Age} from './../js/galactic_age_cal.js';

$(document).ready(function() {
  // submit age for seconds
  $('#age-form').submit(function(event){

    event.preventDefault();
    let inputAge = $('#age').val();
    let inputName = $('#name').val();
    let user = new Age(inputAge, 1, inputName);

    user.lifeOnEarth();
    user.earthToMercury();
    user.earthToVenus();
    user.earthToMars();
    user.earthToJupitor();

    $('#earthAge').text(`${user.name} your age on Earth is ${user.age}`);
    $('#mercAge').text(`${user.name} your age on Mercury is ${user.ageToMerc}`);
    $('#venuAge').text(`${user.name} your age on Venus is ${user.ageToVenus}`);
    $('#marAge').text(`${user.name} your age on Mars is ${user.ageToMars}`);
    $('#jupAge').text(`${user.name} your age on Jupiter is ${user.ageToJupitor}`);
  });
});
