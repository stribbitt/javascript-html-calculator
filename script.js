 function clearDisplay(){
        document.getElementById("display-bar").innerHTML="";
        
 }
 
 function display(userInput){
  document.getElementById("display-bar").innerHTML += userInput;
  
 }
 
 function calculate(){
   var x= eval(document.getElementById("display-bar").innerHTML);
   document.getElementById("display-bar").innerHTML = x;
 }
 