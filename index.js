const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(arrayOfStrings, stringWeLookFor){
    const arrayOfFoundNames = arrayOfStrings.filter((name=>{if(name.toUpperCase() === stringWeLookFor.toUpperCase()){return true;}}) , stringWeLookFor);
    return arrayOfFoundNames
}

function fuzzyMatch(arrayOfNames, namesThatStartWithSameLetters){

const arrayOfStringsWithMatchingChar = arrayOfNames.filter((character=>{if (character.startsWith()=== namesThatStartWithSameLetters.startsWith()){return true;}}), namesThatStartWithSameLetters)
return arrayOfStringsWithMatchingChar
} 

function matchName(arrayOfDrivers, sameDrivers){
    const sameNames = arrayOfDrivers.filter((name)=>{if (arrayOfDrivers.name === arrayOfDrivers.name){return true}}, sameDrivers)
    return sameNames
}