function introduction(name){
    return `Hi, my name is ${name}.`
}

function logTwoValues(value1, value2) {
    console.log(`The two values are ${value1} and ${value2}.`);
  }

function introductionWithLanguage(name, language){
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}

console.log(introductionWithLanguage("dilara","JS"));

 // What if we wanted to make this function work whether or not a first name is passed in as an argument?
 function introductionWithLanguageOptional(name, language = "JavaScript"){
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}

console.log(introductionWithLanguageOptional("dilara"));