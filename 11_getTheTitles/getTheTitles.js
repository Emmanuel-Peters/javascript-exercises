const getTheTitles = function(array) {

let title_array = [];
for (let i = 0; i < array.length; i++)
{
    title_array.push(array[i].title);
}
return(title_array);
};

// Do not edit below this line
module.exports = getTheTitles;
