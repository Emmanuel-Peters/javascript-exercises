const fibonacci = function(place) {
// Plan = create Fib sdequence up to the place needed.

if(place == 1 || place == 2)
{
    return(1);
}
else if (place == 0)
{
    return 0;
}
else if (place < 0)
{
    return('OOPS');
}
let fib = [1,1];
for (let i = 2; i <= place; i++)
{
    fib.push(fib[i-2]+fib[i-1]);
}

return(fib[place-1]);

};

// Do not edit below this line
module.exports = fibonacci;
