var read=require('readline-sync')

var input=read.question("enter a number = ")
if (input%2==0)
{
    console.log("the no is even")
}
else
{
    console.log("The no is odd")
}