const sumAll = function(int1, int2) {
let sum = 0;
let bigger = 0;
let smaller = 0;
if (int1 < 0 || int2 < 0)
{
    return('ERROR');
}
if(Number.isInteger(int1) == false || Number.isInteger(int2) == false)
{
    return('ERROR');
}
if (int1 > int2)
{
    bigger = int1;
    smaller = int2;
}
else if (int2>int1)
{
    bigger = int2;
    smaller = int1;
}
else if (int1==int2)
{
    return(int1);
}

    for (let i = smaller; i <= bigger; i++)
{
    sum += i;
}
return(sum);
}

// Do not edit below this line
module.exports = sumAll;
