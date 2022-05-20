do
{
    var input = prompt("Write temperature, use suffix");
}while(!input.endsWith("f") && !input.endsWith("c"));

var celsius = input.endsWith("c");
input = parseInt(input);

var f = celsius ? "c" : "f";

document.write(input);

if(celsius)
    input = input * (9/5) + 32;
else input = (input - 32) * (5/9);

var l = celsius ? "f" : "c";

document.write(f + " is " + input + l);

var value = prompt("Write number");
value = parseInt(value);

var diff = Math.abs(value - 10);
if(diff > 10)
    diff *= 2;

document.write("<br>original: " + value + ", diff: " + diff + "<br>");

var value2 = prompt("Write number");
value2 = parseInt(value2);

if(value == value2)
    document.write("(");
document.write(`${value} + ${value2}`)
if(value == value2)
    document.write(") * 3")

document.write(` = ${value == value2 ? (value + value2)*3 : value + value2}`)

document.write("<br>");

if(value == 50 || value2 == 50 || value + value2 == 50)
    document.write("True");
else document.write("False");

for (let i = 0; i < 11; i++) {
    document.write("<br>");
    for (let j = 0; j <= Math.min(10 - i, i); j++) {
        document.write(`*`)
    }
}