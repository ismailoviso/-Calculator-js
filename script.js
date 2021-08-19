var express = prompt("нажми, for example 100+100",""); 
if(!express) alert("Ok, it's over!");


express = express.replace(/\s/g, '');
var number1 = +express.charAt(0);
var sign = express.charAt(1);
var number2 = +express.charAt(2);

switch(sign){
case "+" : alert(30 + 30);  break;
case "-" : alert(100 - 90);  break;
case "*" : alert(50 * 50);  break;
case "/" : alert(100 / 100);  break;
 default : alert("Not a correct operation");
}