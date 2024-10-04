const palindromes = function (word) {


for(let j =0; j<word.length; j++)
{
    if(word[j].match(/[a-z]/i)!=true)
    {
        word = word.slice(j,0)
    }    
}

let reverse_word = "";

for(let k = word.length-1; k>=0; k--)
{
    reverse_word += word[k];
}
console.log(word);
console.log(reverse_word);
for (let l = 0;l<word.length;l++)
{
    if(word[l] != reverse_word[l])
    {
        return(false);
    }
}

return(true);
};

// Do not edit below this line
module.exports = palindromes;
