var evens = "<p>Even numbers between 0 and 50:<br>";
for (let i = 2; i <= 50; i += 2) 
    if(i%10)
     evens += (i < 10 ? "&nbsp" : "") + i + ", ";
    else evens += i + "<br>";
document.write(evens + "<p>");

var divisible = "<p>Numbers between 0 and 240 divisible by 3 and 5<br>"
let count = 0;
for (let i = 1; i < 240; i++) 
{
    if(!(i%3) && !(i%5))
    {
        if(i < 100)
            divisible += "&nbsp";
        
        divisible += i + ", ";

        if(count%3 == 2)
            divisible += "<br>"
        count++;
    }
}

document.write(divisible);

while(isNaN(width) || isNaN(height)){
    var height = Number(prompt("Square height"));
    var width = Number(prompt("Square width"));
}

document.write(`Bredde: ${width}, Høyde: ${height}<br>`);
document.write(`Omkrets: ${width*2 + height*2}, Areal: ${width*height}<br>`);

var txt = prompt("Tekst");
for (let i = 6; i > 0; i--)
    document.write(`<h${i}>${txt}</h${i}>`);

let filled = "*&nbsp&nbsp*"
let hollow = "*";
for (let i = 0; i < width-2; i++) {
    filled += "&nbsp&nbsp*";
    hollow += "&nbsp&nbsp&nbsp&nbsp"
}
hollow += "&nbsp&nbsp*";

document.write(filled + "<br>");
for (let i = 0; i < height-2; i++) 
    document.write(hollow + "<br>");
document.write(filled);
