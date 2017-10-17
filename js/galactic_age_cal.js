export class Age {

  // Tools/information you already have
  constructor(age, birthday, name, gender){
    this.age = age;
    this.birthday = birthday;
    this.name = name;
    this.gender = gender;
    this.ageExpectancy = 70;
    this.ageToMerc = 0;
    this.ageToVenus = 0;
    this.ageToMars = 0;
    this.ageToJupitor = 0;

  }
  // A function needs tools/information to complete its job. The parameters are those tools.
  //if you need the age pass it in the function if i put it on the constructor i dont need to pass it in the params on this function

  ageToSec(){
    let seconds = Math.floor(this.age * 31536000);
    return seconds;
  }

  difference(start, end){
   start = new Date(start.year, start.month, start.day, 0, 0, 0, 0);
   end = new Date(end.year, end.month, end.day, 0, 0, 0, 0);
   return Math.abs((start.getTime() - end.getTime()) / 1000);
 }

  earthToMercury(){
    this.ageToMerc = Math.round(this.age / 0.24);
    return this.ageToMerc;
  }

  earthToVenus(){
    this.ageToVenus = Math.round(this.age / 0.62);
    return this.ageToVenus;
  }

  earthToMars(){
    this.ageToMars = Math.round(this.age / 1.88);
    return this.ageToMars;
  }

  earthToJupitor(){
    this.ageToJupitor = Math.round(this.age / 11.86);
    return this.ageToJupitor;
  }

  genderExpectancy(){
    if (this.gender === "Male"){
      this.ageExpectancy = this.ageExpectancy - 7;
    }
    else {
      this.ageExpectancy = this.ageExpectancy + 9;
    }
    return this.ageExpectancy;
  }


}
