export class Age{

  // Tools/information you already have
  constructor(age, birthday, name){
    this.age = age;
    this.birthday = birthday;
    this.name = name;
    this.ageToSec = 0; // place holder
    this.ageToMerc = 0;

  }

  // A function needs tools/information to complete its job. The parameters are those tools.

  lifeOnEarth(){ //if you need the age pass it in the function if i put it on the constructor i dont need to pass it in the params on this function
    this.ageToSec = this.age * 31536000;

    return this.ageToSec;

  }

  earthToMercury(){
    this.ageToMerc = this.age / 0.24;

    return this.ageToMerc;

  }


}
