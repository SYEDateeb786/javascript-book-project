// now calculator start 
var val1 = +prompt('enter your 1 value')
var val3 = prompt('enter yourn opeater')
var val2 = +prompt('enter your 2 value')

document.write(val1,val3,val2+"=")
if(val3 === '+'){
document.write(val1+val2)
    
}
else if (val3 === '*'){
    document.write(val1*val2)
        
}
else if (val3 === '-'){
        document.write(val1-val2)
            
 }
else if (val3 === '/'){
    document.write(val1/val2)
        
  }
else if (val3 === '%'){
    document.write(val1%val2)
        
}
else if (val3 === '**'){
    document.write(val1**val2)
        
 }
 else{
    document.write("syantex error")


 }