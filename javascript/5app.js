
// for full date
var a = new Date();
document.write(a +"<br>")

// date in string
var b = a.toString();
document.write(b+" this i in string" +"<br>")

//only day
var c = b.slice(0,3)
document.write(c +"<br>")


//day in number
var d = a.getDay();
document.write(d +"<br>")

//date in number
var d = a.getDate();
document.write(d +"<br>")

//mounth in number
var d = a.getMonth();
document.write(d +"jun start with 0-11"+"<br>")

//full year in number
var d = a.getFullYear();
document.write(d +"<br>")

//hour in number
var d = a.getHours();
document.write(d +"<br>")

//min in number
var d = a.getMinutes();
document.write(d +"<br>")


//seconf in number
var d = a.getSeconds();
document.write(d +"<br>")

//seconf in number
var d = a.getMilliseconds();
document.write(d +"<br>")

//time in number 1 jaun say 1970 sat lay kar abi tabk kay milli second display karna 
var d = a.getTime();
document.write(d +"<br>")

//apni date of birth kay milli second nikal na 1970 sy 
var dob = new Date (prompt("enter yoy dob","dec 22,2000"));
var dobmilli = dob.getTime();
document.write(dobmilli+"<br>")
// aj 1970 to doay
var dob1 = new Date()
var dobmilli1 = dob1.getTime();
document.write(dobmilli1+"<br>")
//diff 
var diff = dobmilli1 - dobmilli
document.write(diff+"<br>")
// year cal 
var diffy = diff/(1000*60*60*24*365)
document.write(diffy+"<br>")
// only year 
var accurace = Math.floor(diffy);
document.write(accurace+"<br>")

// set your date and fuull 
a.setFullYear(2001)
document.write(a+"<br>")




//FUNCTION 
function main(){
    document.write("hi this is funtion"+"<br>" )
}
main();

// another example
function main1(value){
    document.write(value+"<br>")
}
main1("hi this is funtion exp");

// another exp
function main2(a,b,c){
    document.write((a+b)/c+"<br>")
}
main2(90,10,10);

// return to save any thing in veriablke
function add(a,b,c){
    var z = a+b+c
     return z;
}
var g = add(900,100,10);
document.write(g+"<br>")

// globle and local veriable read 

// age calc
function agecalc(){
    //apni date of birth kay milli second nikal na 1970 sy 
var dob = new Date (prompt("enter yoy dob","Jan 22,1994"));
var dobmilli = dob.getTime();
// aj 1970 to doay
var dob1 = new Date()
var dobmilli1 = dob1.getTime();
//diff 
var diff = dobmilli1 - dobmilli
// year cal 
var diffy = diff/(1000*60*60*24*365)
// only year 
var accurace = Math.floor(diffy);
return accurace;
}
document.write(agecalc()+"<br>")

 // anouther calclator bhi ban saqta hai

// another 
function main5(a,b=0){ // b ki agar kohi value nahi do gay to uyas 0 day day ga
    return a +b
}
document.write (main5(5,65))

// function main5(a,b=0){ // b ki agar kohi value nahi do gay to uyas 0 day day ga
  
// }
// document.write (main5(5,65)) undefine not define for value nahi di

//Switch statment work like if and else statment 

var name = "Ateesb"
switch(name){
    case "Ateeb":
        alert("hello"+name)
        break
    default :
        alert("Nikal")

            
} // this is faster than if and else statment 
var zz= "Java is a programming language and computing platform first released by Sun Microsystems in 1995. ... Java is fast, secure, and reliable. From laptops to datacenters, game consoles to scientific supercomputers, cell phones to the Internet \n Java is everywhere!"
document.write(zz)











