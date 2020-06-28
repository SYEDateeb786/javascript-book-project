function getnumber(num){
   
    var  result = document.getElementById("result")
    result.value += num; //poriani value bhi raha takay
}
function clearesult(){
    var  result = document.getElementById("result")
    result.value = "" //poriani value bhi raha takay
    
    
}
function getresult(){
    var  result = document.getElementById("result")
    result.value = eval (result.value)
}
