import {Age} from './../js/galactic_age_cal.js';

$(document).ready(function() {
  // submit age for seconds
  $('#age-form').submit(function(event){

    event.preventDefault();
    let inputAge = $('#age').val();
    let inputName = $('#name').val();
    let javi = new Age(inputAge, 1, inputName);
    javi.lifeOnEarth();
    javi.earthToMercury();

    $("#earthAge").text('you are age on earth is ' + javi.age);
    $("#mercAge").text('you are age on MErc is ' + javi.ageToMerc);



  });
});
