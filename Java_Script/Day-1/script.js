console.log("Hello");

// greater of two numbers
var num1=10;
var num2=20;
if (num1>num2){
    console.log(num1+" is greater than "+num2)
}else{
    console.log(num2+" is greater than "+num1)
}

// even or not
var num3=10;
if (num3%2==0){
    console.log(num3+" is even number ")
}else{
    console.log(num3+" not a even number ")
}

// leap year
var year=2004;
if (year%4==0  & year%100!=0 | year%400==0){
    console.log(year+" is a leap year")
}else{
    console.log(year+" not a leap year")
}