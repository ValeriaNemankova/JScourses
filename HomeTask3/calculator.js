var numA="",numB="", numRes="";
var action="";
var click = 3;
var field = document.getElementById("display");

function lastAction()
    {
      if( click != 0){
        return false;
      } 
      if(action=="") {
        return false;
      } 
      if(action == "-") {
          numB = field.value;
          numRes=Number(numA)-Number(numB);
          numA=numRes;
          field.value = numA;
          action = "";
          return true;
        }
      if(action == "+") {
          numB = field.value;
          numRes=Number(numA)+Number(numB);
          numA=numRes;
          field.value = numA;
          action = "";
          return true;
          }
      if(action == "*") {
          numB = field.value;
          numRes=Number(numA)*Number(numB);
          numA=numRes;
          field.value = numA;
          action = "";
          return true;
        }
      if(action == "/") {
          numB = field.value;
          numRes=Number(numA)/Number(numB);
          numA=numRes;
          field.value = numA;
          action = "";
          return true;
          }
    }

document.getElementById("iZero").addEventListener("click", function(){
  if(String(field.value).indexOf("E")==-1){
    if(click > 0)
        field.value = field.value+"0";
        else if(click>0)
        field.value='0';
    else
        if(field.value != "0")
            field.value = field.value+"0" ;
    click = 0;
    return false;}
});
document.getElementById("iOne").addEventListener("click", function(){
  if(String(field.value).indexOf("E")==-1){
    if(click > 0)
        field.value = field.value+"1";
        else if(click>0)
        field.value='1';
    else if(field.value == "0")
        field.value = "1";
    else
        field.value = field.value+"1";
        click = 0;
    return false;
}});
document.getElementById("iTwo").addEventListener("click", function(){
  if(String(field.value).indexOf("E")==-1){
  if(click > 0 && field.value=='-')
      field.value = field.value+"2";
      else if(click>0)
      field.value='2';
    else if(field.value == "0")
        field.value = "2";
    else
        field.value = field.value+"2";
    click = 0;
    return false;
}});
document.getElementById("iThree").addEventListener("click", function(){
  if(String(field.value).indexOf("E")==-1){
  if(click > 0 && field.value=='-')
      field.value = field.value+"3";
      else if(click>0)
      field.value='3';
    else if(field.value == "0")
        field.value = "3";
    else
        field.value = field.value+"3";
    click = 0;
    return false;
}});
document.getElementById("iFour").addEventListener("click", function(){
  if(String(field.value).indexOf("E")==-1){
  if(click > 0 && field.value=='-')
      field.value = field.value+"4";
      else if(click>0)
      field.value='4';
    else if(field.value == "0")
        field.value = "4";
    else
        field.value = field.value+"4";
    click = 0;
    return false;
}});
document.getElementById("iFive").addEventListener("click", function(){
  if(String(field.value).indexOf("E")==-1){
  if(click > 0 && field.value=='-')
      field.value = field.value+"5";
      else if(click>0)
        field.value="5";
    else if(field.value == "0")
        field.value = "5";
    else
        field.value = field.value+"5";
    click = 0;
    return false;
}});
document.getElementById("iSix").addEventListener("click", function(){
  if(String(field.value).indexOf("E")==-1){
  if(click > 0 && field.value=='-')
      field.value = field.value+"6";
      else if(click>0)
      field.value='6';
    else if(field.value == "0")
        field.value = "6";
    else
        field.value = field.value+"6";
    click = 0;
    return false;
}});
document.getElementById("iSeven").addEventListener("click", function(){
  if(String(field.value).indexOf("E")==-1){
  if(click > 0 && field.value=='-')
      field.value = field.value+"7";
      else if(click>0)
      field.value='7';
    else if(field.value == "0")
        field.value = "7";
    else
        field.value = field.value+"7";
    click = 0;
    return false;
}});
document.getElementById("iEight").addEventListener("click", function(){
  if(String(field.value).indexOf("E")==-1){
  if(click > 0 && field.value=='-')
      field.value = field.value+"8";
      else if(click>0)
      field.value='8';
    else if(field.value == "0")
        field.value = "8";
    else
        field.value = field.value+"8";
    click = 0;
    return false;
}});
document.getElementById("iNine").addEventListener("click", function(){
  if(String(field.value).indexOf("E")==-1){
  if(click > 0 && field.value=='-')
      field.value = field.value+"9";
      else if(click>0)
      field.value='9';
    else if(field.value == "0")
        field.value = "9";
    else
        field.value = field.value+"9";
    click = 0;
    return false;
}});

document.getElementById("iPlus").addEventListener("click", function(){
  if(String(field.value).indexOf("E")==-1){
    if(lastAction()==false)
        numA = field.value;
    action = "+";
    click = 1;
    return false;
}});
document.getElementById("iMinus").addEventListener("click", function(){
  if(String(field.value).indexOf("E")==-1){
  if(lastAction()==false)
      numA = field.value;
    action = "-";
    click = 1;
    return false;
}});
document.getElementById("iMul").addEventListener("click", function(){
  if(String(field.value).indexOf("E")==-1){
  if(lastAction()==false)
      numA = field.value;
    action = "*";
    click = 1;
    return false;
}});
document.getElementById("iDevision").addEventListener("click", function(){
  if(String(field.value).indexOf("E")==-1){
  if(lastAction()==false)
      numA = field.value;
    action = "/";
    click = 1;
    return false;
}});

document.getElementById("iEqual").addEventListener("click", function(){
  if(String(field.value).indexOf("E")==-1){
    numB = field.value;
    switch(click) {
        case 0:
        case 1:
            if(action == "+"){
                numRes=Number(numA)+Number(numB);
                field.value = numRes;
                numA=numRes;
                }
            if(action == "-"){
                numRes= Number(numA)-Number(numB);
                numA=numRes;
                field.value = numA;
                }
            if(action == "*"){
                numRes = Number(numA)*Number(numB);
               numA=numRes;
                field.value = numA;
                }
            if(action == "/"){
                numRes = Number(numA)/Number(numB);
               numA=numRes;
			   field.value = numA;
                }
            break;
        default:
        }
    action = "";
    click = 2;
    return false;
}});

document.getElementById("iClear").addEventListener("click", function(){
    click = 3;
    action = "";
    field.value = "0";
    numA = "0";
    return false;
});
