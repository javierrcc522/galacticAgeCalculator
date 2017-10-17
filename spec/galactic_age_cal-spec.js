import {Age} from './../js/galactic_age_cal.js';

describe('Age', () => {
  let userTest;

  beforeEach(function(){
    userTest = new Age(22);
  });

  // it('should test for age turn into seconds', () =>{
  //   expect(userTest.ageToSec).toEqual(22);
  // });

  it('should test for age in Mercury age', () =>{
    expect(userTest.earthToMercury()).toEqual(92);
  });

  it('should test for age in Venus age', () =>{
    expect(userTest.earthToVenus()).toEqual(35);
  });

  it('should test for age in Mars age', () =>{
    expect(userTest.earthToMars()).toEqual(12);
  });

  it('should test for age in Mars age', () =>{
    expect(userTest.earthToJupitor()).toEqual(2);
  });



});
