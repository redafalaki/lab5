function validateForm() {
  let x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}
function calculate(){
  let list_number=document.getElementById("numbers").value.trim().split(/ +/);
  let list_number2=[];
  for(let i=0;i<list_number.length;i++){
    let henry = parseInt(list_number[i]);

    if(!isNaN(henry)){
      list_number2.push(henry);

    }
  }
  if(list_number2.length!=0){
    let result;
    if(document.getElementById("maximum").checked){
      result= Math.max(...list_number2);
    }
    if(document.getElementById("minimum").checked){
      result= Math.min(...list_number2);
      
    }
    if(document.getElementById("average").checked){
      result=list_number2.reduce(
        (accumulator, currentValue) => accumulator + currentValue
      );
      result=result/list_number2.length;
      
      
    }
    if(document.getElementById("somme").checked){
      result=list_number2.reduce(
        (accumulator, currentValue) => accumulator + currentValue
      );
    }
    document.getElementById("result").value=result;

  }
  
}
 