const removeFromArray = function(input_array, index_remove, index_remove_two) {
let length = input_array.length // splice will reduce length, so need seperate int  
    
    for (let i = 0; i<length;i++)
    {
        if (input_array[i] == index_remove || input_array[i] == index_remove_two)
        {
            input_array.splice(i, 1);
        }
        console.log(input_array[i]);
    }
    
    console.log(input_array);
    return(input_array);
};

// Do not edit below this line
module.exports = removeFromArray;
