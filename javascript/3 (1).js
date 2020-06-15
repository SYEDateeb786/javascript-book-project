// abi tak pichala revise karaya hai now abb array agaya hai soo let seee what is array in js
//array type normal
var arr = [1,2,3,4,5,6];

alert(arr[2])
// another way 
var arr1 = new Array("cat","goat","cow");
alert(arr1)

// replace value in array 
 arr[4]=76;
 alert(arr)

 //push add last is ek sy ziya bhi day saqttay ho (a1,3a,3a)
 arr.push(786);
 alert(arr)

 // remove  last
 arr.pop();
 alert(arr)

//  remove first
arr.shift()
alert(arr)

// add first 
arr.unshift("cat");
alert(arr)

// center ma sy remove karna  is ma ek sy ziya bhi nikal saqtay ho center ma vale bara do
arr1.splice(2,1,"bull");
alert(arr1)

// search arry sy hota hai 

//for loop are start 
var a ;
for(a = 1;a<=10; a = a+2)  {  // use for 1 increased use a++ only for incresed 2 or more value use a = a+2
    document.write(a)
}

var b ;
for(b = 0;b<5; b++)  {  // use for 1 increased use a++ only for incresed 2 or more value use a = a+2
    document.write(" [ ASLAM O ALIKOM ] "+"<br>")
    
}
// table 
let c ; // var use and let are other are also use for diclear the any veriable
for(c = 1;c<=10; c++)  {  // use for 1 increased use a++ only for incresed 2 or more value use a = a+2
    document.write("{"+"7"+"x"+c+"="+7*c+"}"+"<br>")
}

// in arry yani all students kay name call karna

var names = ["cat","cow","bull","markoor","shaheen","loin","tiger","horse","lepoart","fox"];

for(var n = 0; n < names.length ; n++){  // use for 1 increased use a++ only for incresed 2 or more value use a = a+2
    document.write(names[n]+"<br>")
    
}

// flash for matching mran search bar like

var city = ["pak","china","turkey","saudia","afgn","bangla","malashia","indonashia","libia","uae"];

for(var ci = 0; ci < city.length ; ci++){  // use for 1 increased use a++ only for incresed 2 or more value use a = a+2
    if(city[ci] == "saudia"){
        document.write(city[ci]+" "+" this is my city"+"<br>")
        break

    }
   
    
}

// ek loop in aloop bbhi hai os ka ss para howa haa
 var f1n=["ateeb","haseeb","bariq"]
 var l1n=["ali","shah"]
for(var fn = 0; fn < f1n.length ; fn++){  // use for 1 increased use a++ only for incresed 2 or more value use a = a+2
  for(var ln = 0; ln < l1n.length ; ln++){  // use for 1 increased use a++ only for incresed 2 or more value use a = a+2
   document.write(f1n[fn]+" "+l1n[ln] +"<br>")
  }
}


// triangle wala ss ma hai

// loop kay zirya para gram kay word ko integat kanra

var word = prompt("enter any word");
var check = ""; // becaus your vakue is in alpha 
for(var w = word.length-1; w>=0 ;w--){
    check += word[w]
}
 if(word === check){
    console.log(word+" is palidrome word ")
}
else{
    console.log(word+"this is not palindrome word")
}

// lower case and upper case
var name ="ateeb";
name = name.toUpperCase();  // .toLowerCase
document.write(name+"<br>")

//array or string ki bhi lenght malom kar saqtay hai
// kohi bhi chize kaha mujood hai os kay leya list ,m akha mujood hai
var names = "Ateeb Ali"
document.write(names.indexOf("Ali"))

// now for calculater goo to app1.js  and index1.html



 




