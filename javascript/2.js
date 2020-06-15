
var a = 5;
c = 25 + a;
alErt(c);


// prompthamasha  alphaavluE lata hai 
var a= prompt("EntEr your namE", "EntEr namE");
var b = a + 5;
alErt(b)
// agar prompt ko string valuEr fani hai to +prompt usE karo

var a= +prompt("EntEr your namE", "EntEr namE");
var b = a + 5;
alErt(b)
// disply in scrEEn 
var x = "EntEr you namE"
var y = " EntEr"
var a = +prompt(x,y);
documEnt.writE("thE output is"+ " "+ a)

// now atEEb thErE is if aand ElsE workin g anf function


// this use  in equall to (==) y atype nahi chack karta ==
// === typer bhio chack kara ga  

var age = +prompt("Enter your age", "Enter age");
if (age == 18){
    alert("your age is less")
}

else{
    alert("you are no more with less age")
}

// this use  in less thean equal to  to (<=) also use in less than

var age = +prompt("Enter your age", "Enter age");
if (age <= 18){
    alert("your age is less")
}

else{
    alert("you are no more with less age")
}

// this use  in grater thean equal to  to (>=) also use > for minus 18 nahi 18 sy ziyada

var age = +prompt("Enter your age", "Enter age");
if (age >= 18){
    alert("you are no more with less age")

}

else{
    alert("your age is less")

}

// ya ek application ma bhi use hota hai like if and else ma aj tak hmm sarf 1 kay leya ek laga raha tha kay ako malom hai if and else ma ap 2 day saqtay ho 
 
// is ma & use kiya hai 

var age = +prompt("Enter your age", "Enter age");
var gender = prompt("Enter your gender", "Enter gender");
if (age >= 18 & gender == "male" ){
    alert("you are allow to ride")

}

else{
    alert("your are not allow niklo")

}

// is ma or enter kay oper wala button || mean dono ma sy ek bhi true ho
var age = +prompt("Enter your age", "Enter age");
var gender = prompt("Enter your gender", "Enter gender");
if (age >= 18 | gender == "male" ){
    alert("you are allow to ride")

}

else{
    alert("your are not allow niklo")

}

// one more exp 
var x =5;
var y =10;
var a =30;
var b =15;
if (x+y === a-b){
    alert("true")
}
else{
    alert("false")
}


// 1:09:25 
// this is for not equal to 15 !==

var a = 10;
if(a !==15) {
    document.write("corrrect")
}
else{
    document.write("incorrect")
}

// test operator

var weight = prompt("enter weight ") ;
var time = prompt("enter time ");

if (weight > 300 && time < 6) {
    alert("Come to our tryout!");
     }
else {
 alert("Come to our cookout!")};


marksheet 

var percent = +prompt("enter your percent")
if (percent >= 80 && percent<=100){
    alert("A+")
} 
else if (percent >= 70 && percent<=80){
    alert("A")
} 
else if (percent >= 60 && percent<=70){
    alert("b")
} 
else if (percent >= 50 && percent<=60){
    alert("c")
} 
else if (percent >= 40 && percent<=50){
    alert("D")
} 
else if(percent >= 30 && percent<=40){
    alert("fail")
} 
else{
    alert("you not inter correct percentage ")
}

// nested
// EK BAR KARNA ZAROR
var a = 5;
var b =5;
var c =10;
var d =10
var e = 1
var f =3
var g =5
var h =4
var x =8
var y =8



if (c === d) {
     if (x === y) {
   alert(g = h)
     }
     else if (a === b) {
     alert(g = h);
     }
     else {
     alert(e = f);
     }
     }
 else {
    alert (e = f);
    }

ARRAYS

var name ="ateeb" ;
var name1= "haseeb";
var name2 = "bariq";
var student =["ateeb","haseeb","bariq",123]

 document.write("hi dear"+" "+student[3]) 
    
// stor in any group 
var names=[];

names[0] = "ateeb";
names[1] = "haseeb";
document.write(names)

// ya last ma sy add or remove kartay hai 
// for remove in array  .pop 
var name ="ateeb" ;
var name1= "haseeb";
var name2 = "bariq";
var student =["ateeb","haseeb","bariq"]

 student. pop() 
 document.write(student )
    
//  for add value in last in array  .push
var name ="ateeb" ;
var name1= "haseeb";
var name2 = "bariq";
var student =["ateeb","haseeb","bariq"]

 student.push("amir", "owais")
 document.write(student )

// now add shoro ma karna ho
// for remove .shift
var name ="ateeb" ;
var name1= "haseeb";
var name2 = "bariq";
var student =["ateeb","haseeb","bariq"]

 student.shift()
 document.write(student )

addd .unshift
var name ="ateeb" ;
var name1= "haseeb";
var name2 = "bariq";
var student =["ateeb","haseeb","bariq"]

 student.unshift( "amir")
 document.write(student )

// now ab bich ma add karo

ADD .SPLICE
var name ="ateeb" ;
var name1= "haseeb";
var name2 = "bariq";
var student =["ateeb","haseeb","bariq"]
// replace or delet kay leya  class 10 1:50  (1,0,"bialca")
//  student.splice(1,1)
student.splice(1,0,"ali")

 document.write(student )

// for copy .slice
var name ="ateeb" ;
var name1= "haseeb";
var name2 = "bariq";
var student =["ateeb","haseeb","bariq","ammir"]
// first start than end 
var COpystudent = student.slice(1,4)


 document.write(COpystudent )

