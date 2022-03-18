const findTheOldest = function(people) {
    return people.reduce(function (elder, person){
        let currentYear = new Date().getFullYear();
        let elderDeath = 0;
        let personDeath = 0;
        if (!elder.yearOfDeath) {
            elderDeath = currentYear;
        }else{
            elderDeath = elder.yearOfDeath;
        }
        if (!person.yearOfDeath) {
            personDeath = currentYear;
        }else{
            personDeath = person.yearOfDeath;
        }
        let elderAge = elderDeath - elder.yearOfBirth;
        let personAge = personDeath - person.yearOfBirth;
        return elder = elderAge > personAge? elder:person;        
    })
};
// Do not edit below this line
module.exports = findTheOldest;
