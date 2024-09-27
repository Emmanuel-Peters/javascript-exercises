const reverseString = function(input_word) {
let length_input = input_word.length;

let output_word = "";

for(let i = length_input; i > 0; i--)
{
    output_word += input_word[i-1];
}

return(output_word);
};
// Do not edit below this line
module.exports = reverseString;
