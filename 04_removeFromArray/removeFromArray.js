const removeFromArray = function(input_array, index_remove, index_remove_two, index_remove_three, index_remove_four) {
let length = input_array.length // splice will reduce length, so need seperate int  
    let output_array = [];
    for (let i = 0; i<length;i++)
    {
        if (input_array[i] !== index_remove && input_array[i] !== index_remove_two && input_array[i] !== index_remove_three
            && input_array[i] !== index_remove_four
        )
        {
            output_array.push(input_array[i]);
        }
        
    }
    
    console.log(output_array);
    return(output_array);
};

// Do not edit below this line
module.exports = removeFromArray;
