import {Age} from './../js/galactic_age_cal.js';

$(document).ready(function() {
  // submit age for seconds
  $('#age-form').submit(function(event){

    event.preventDefault();
    //taking this values for the new object
    const inputAge = $('#age').val();
    const inputName = $('#name').val();
    const inputGender = $('#gender').val();

  // compare two dates
    let inputDate1 = $('#date1').val();
    let inputDate2 = $('#date2').val();
    console.log(typeof inputDate1);
    console.log(typeof inputDate2);

  // the object
    let user = new Age(inputAge, inputName, inputGender);



// original is in zero and changing it to the new input
    user.ageToSec();
    user.earthToMercury();
    user.earthToVenus();
    user.earthToMars();
    user.earthToJupitor();
    user.expectancy();


/// age  in the planets
    $('#earthAge').text(`${user.name} your age on Earth is ${user.age}`);

    $('#mercAge').text(`${user.name} your age on Mercury is ${user.ageToMerc}`);

    $('#venuAge').text(`${user.name} your age on Venus is ${user.ageToVenus}`);

    $('#marAge').text(`${user.name} your age on Mars is ${user.ageToMars}`);

    $('#jupAge').text(`${user.name} your age on Jupiter is ${user.ageToJupitor}`);



    ///life expectancy

    $('#earthExpectancy').text(`${user.name} your life expectancy in earth is ${user.ageExpectancy}`);

    $('#mercuryExpectancy').text(`${user.name} your life expectancy in mercury is ${user.expectancyMercury()}`);

    $('#venusExpectancy').text(`${user.name} your life expectancy in venus is ${user.expectancyVenus()}`);

    $('#marsExpectancy').text(`${user.name} your life expectancy in mars is ${user.expectancyMars()}`);

    $('#jupiterExpectancy').text(`${user.name} your life expectancy in jupiter is ${user.expectancyJupiter()}`);


    $('#seconds').text(`${user.difference(inputDate1, inputDate2)}`);
    console.log(typeof user.difference(inputDate1, inputDate2));


  });
});
