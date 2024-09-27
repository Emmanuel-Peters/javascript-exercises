const repeatString = function(input_word, num_repeats) {
if (num_repeats <0)
{
    return('ERROR');
}
return_word = "";
for (let i = 0; i < num_repeats; i++)
{
    return_word += input_word
}

return(return_word);
};

// Do not edit below this line
module.exports = repeatString;
