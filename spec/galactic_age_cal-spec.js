import {AgeSec} from './../js/galactic_age_cal.js';

describe('AgeSec', () =>{
  it('should test for age turn into seconds', () =>{
    let person_age = new Age(21,365,24,60,60)
    expect(person_age.age).toEqual(21)
    expect(person_age.year).toEqual(365)
    expect(person_age.hour).toEqual(24)
    expect(person_age.minute).toEqual(60)
    expect(person_age.second).toEqual(60)
  });
});
