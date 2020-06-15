//tora samaj lana 
for(var a = 1;a<=100 ; a =a+10){
    for(var b = a;b < a+10 ; b++){
    document.write(b+" ")
    }
    document.write("<br>")
}
//searching value 
var city = prompt("enter city name");
city = city.toUpperCase() //Lower
var arr = ['KARACHI','ISLAMBAD','LAHORE'];
for(var i=0;i<arr.length;i++){
    if(arr[i]===city){
        document.write('city is found'+ "<br>")
        break
        
    }
    else{
        document.write('not found'+"<br>")
        

    }
}
//store data in perfect way like your name and it ius also help prind name in profile like zoom Syed Ateeb Ali 
var city = prompt("enter city name");
var char1 =  city.slice(0,1);
var charother =  city.slice(1);
char1 = char1.toUpperCase()
charother = charother.toLowerCase() 

var city = char1 + charother ;
document.write(city+"<br>")
var arr = ['Karachi','Islambad','Lahore'];
for(var i=0;i<arr.length;i++){
    if(arr[i]===city){
        document.write('city is found' +"<br>")
        
        break
    }
    else{
        document.write('not found'+"<br>")
        

    }
}


// no double spaces
var str = prompt('enter value ');
var num = str.length ;
for(var i = 0 ;i<num;i++){
    if(str.slice(i,i+2)==="  "){
        alert("no double space plz!");
        break
    }
    else{
        alert("great work you have no double space in this program")
        break
    }
}

// find any think in para graph  Finding segments replasing text 
//  var text = "The New Yorker magazine doesn t allow the phrase 'World War II'.  They say it should be 'World War II' So lets search the following sentence for the banned charactersand replace them with the phrase that the New Yorker prefers.It is startling to think that, even in the darkest depths of World War II, J. R. R. Tolkien waswriting the trilogy, which contains, with the weird applicability available only to poetry andmyth, the essential notion that the good gray wizard can understand the evil magi preciselybecause he is just enough like them to grasp their minds and motives in ways that they cannotgrasp his."
// document.write(text+"<br>")
// for (var i = 0; i < text.length; i++) {
//     if (text.slice(i, i + 12) === "World War II") {
//     text = text.slice(0, i) + "the RED World War"+ text.slice(i + 12)   ; // + text.slice(i + 12) ys is leya likha hai takhay loop sab per chalay
//     document.write(text+"<br>")
//  }
//  }

 // another easy method to find index number thi sis better way 
var tesxt = "The New Yorker magazine doesn t allow the phrase 'World War II'.  They say it should be 'World War II' So lets search the following sentence for the banned charactersand replace them with the phrase that the New Yorker prefers.It is startling to think that, even in the darkest depths of World War II, J. R. R. Tolkien waswriting the trilogy, which contains, with the weird applicability available only to poetry andmyth, the essential notion that the good gray wizard can understand the evil magi preciselybecause he is just enough like them to grasp their minds and motives in ways that they cannotgrasp his."
var indexno= tesxt.indexOf('World War II') ;
var  firsttexr = tesxt.slice(0,indexno);
var replacetext = 'the RED WORLD war';
var thirdtext = tesxt.slice(indexno+12);

document.write(firsttexr+replacetext+thirdtext)
 // kohi bhi work ota kar dana   
var a21= "atEeb,atEeb";
document.write(a21.charAt(2)+"<br>")

// replacing  onle one
var namre = a21.replace("atEeb","saa");
document.write(namre+"<br>")

// one or more replace 
var namre = a21.replace(/atEeb/g,"saa"); // /text/g is the globle text resplace menrt
document.write(namre+"<br>")

// rounding number math is start ch 26
var num = 1.5 ; //round kar kay
document.write(Math.round(num)+"<br>")

// point kay bad round kar dana 
var num = 2.5 ; //round kar kay
document.write(Math.ceil(num)+"<br>")

//point ky bad ingnore karna only poin suy pala value lana
var num = 44.6; //round kar kay
document.write(Math.floor(num)+"<br>")

//generater rendom number 
var mr = Math.random()
document.write(mr+"<br>")
//other exp
var mr = Math.random()*2
document.write(mr+"<br>")
// toss game
var head = prompt("enter head");
var tail = prompt("enter tail");
var toss = Math.random()*2;
var floor = Math.floor(toss);
if(floor === 0){
    alert("head"+head)
}else{
    alert("tail"+tail)

}


// string ko number ma convert karnay kay leya
var two = Number("55")
var one = parseInt("33")

var one4 = one + two
document.write(one4+"<br>")

// now num,ber into number into string 

var o = 10
document.write(o.toString()+"<br>")
// bus 2 desimal

var mr = Math.random()
var cont = mr.toFixed(0)
document.write(cont+"rendom value"+"<br>")
 










