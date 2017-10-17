export class Age{

  // Tools/information you already have
  constructor(age, birthday, name){
    this.age = age;
    this.birthday = birthday;
    this.name = name;
    this.ageToSec = 0; // place holder
    this.ageToMerc = 0;
    this.ageToVenus = 0;
    this.ageToMars = 0;
    this.ageToJupitor = 0;

  }

  // A function needs tools/information to complete its job. The parameters are those tools.
  //if you need the age pass it in the function if i put it on the constructor i dont need to pass it in the params on this function

  lifeOnEarth(){
    this.ageToSec = this.age * 31536000;

    return this.ageToSec;
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


}
