const findTheOldest = function(humans) {
    const currentYear = new Date().getFullYear();
humans.forEach(person => person.age = (person.yearOfDeath || currentYear) - person.yearOfBirth) 

let oldest = "";
let oldest_age = 0;
let person_return = [];

function age_check(item)
{
    if (item.age > oldest_age)
    {
        oldest_age = item.age;
        oldest = item.name;
        person_return = item;
    }
}

humans.forEach(age_check)


return (person_return);

};

// Do not edit below this line
module.exports = findTheOldest;
