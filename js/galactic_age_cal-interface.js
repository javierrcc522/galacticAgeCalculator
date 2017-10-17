import {Age} from './../js/galactic_age_cal.js';

$(document).ready(function() {
  // submit age for seconds
  $('#age-form').submit(function(event){

    event.preventDefault();
    const inputAge = $('#age').val();
    const inputName = $('#name').val();
    const inputGender = $('#gender').val();
    let user = new Age(inputAge, 1, inputName, inputGender);

    user.ageToSec();
    user.earthToMercury();
    user.earthToVenus(); // origonal in is zero and chanign it to the new input
    user.earthToMars();
    user.earthToJupitor();
    user.earthToJupitor();
    user.genderExpectancy();

    $('#earthAge').text(`${user.name} your age on Earth is ${user.age}`);
    $('#mercAge').text(`${user.name} your age on Mercury is ${user.ageToMerc}`);
    $('#venuAge').text(`${user.name} your age on Venus is ${user.ageToVenus}`);
    $('#marAge').text(`${user.name} your age on Mars is ${user.ageToMars}`);
    $('#jupAge').text(`${user.name} your age on Jupiter is ${user.ageToJupitor}`);
    $('#genderExp').text(`${user.name} your life expectancy is ${user.ageExpectancy}`);
  });
});
