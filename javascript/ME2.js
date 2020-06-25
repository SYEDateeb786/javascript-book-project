document.write("result" + "<br>")
document.write("the value of ++a is 11"+ "<br>")
document.write("now the value of a is 11"+ "<br>")
document.write("the value of a++ is 11"+ "<br>")
document.write("now the value of a is 12"+ "<br>")
document.write("the value of --a is 10"+ "<br>")
document.write("now the value of a is 10"+ "<br>")
document.write("the value of a-- is 10"+ "<br>")
document.write("now the value of a is 9"+ "<br>")


var a = 2, b = 1; 
document.write("a = "+a+ "<br>")
document.write("b = "+b+ "<br>")

var result = --a ; 
document.write("result"+result+ "<br>")

var result = --a - --b ; 
document.write("result"+result+ "<br>")

var result = --a - --b + ++b ; 
document.write("result"+result+ "<br>")

var result = --a - --b + ++b + b--; 
document.write("result"+result+ "<br>")

