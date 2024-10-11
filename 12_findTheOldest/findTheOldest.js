const findTheOldest = function(humans) {
    
humans.forEach(person => person.age = person.yearOfDeath - person.yearOfBirth) 

let oldest = "";
let oldest_age = 0;

function age_check(item)
{
    if (item.age > oldest_age)
    {
        oldest_age = item.age;
        oldest = item.name;
    }
}

humans.forEach(age_check)


console.log(oldest);
return(oldest);

};

// Do not edit below this line
module.exports = findTheOldest;
