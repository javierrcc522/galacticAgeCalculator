import {Age} from './../js/galactic_age_cal.js';

describe('Age', () => {
  let userTest;

  beforeEach(function(){
    userTest = new Age(22, "Javi", "Male");
  });

  it('should test for age turn into seconds', () =>{
    expect(userTest.ageToSec()).toEqual(693792000);
  });

  it('returns the seconds between two dates', () =>{
    let start = {year:1990, month:5, day:6};
    let end = {year:2017, month:10, day:17};
    expect(userTest.difference(start, end)).toEqual(866250000);
  });

  it('should test for age in Mercury age', () =>{
    expect(userTest.earthToMercury()).toEqual(92);
  });

  it('should test for age in Venus age', () =>{
    expect(userTest.earthToVenus()).toEqual(35);
  });

  it('should test for age in Mars age', () =>{
    expect(userTest.earthToMars()).toEqual(12);
  });

  it('should test for age in Jupitor age', () =>{
    expect(userTest.earthToJupitor()).toEqual(2);
  });

  it('should check earth expectancy', () =>{
    expect(userTest.expectancy()).toEqual(53);
  });

  it('should check mercury expectancy', () =>{
    expect(userTest.expectancyMercury("male")).toEqual(221);
  });

  it('should check venus expectancy', () =>{
    expect(userTest.expectancyVenus("male")).toEqual(85);
  });

  it('should check mars expectancy', () =>{
    expect(userTest.expectancyMars("male")).toEqual(28);
  });

  it('should check jupiter expectancy', () =>{
    expect(userTest.expectancyJupiter("male")).toEqual(4);
  });



});
