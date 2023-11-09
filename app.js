//1
function alertMsg(){
    alert("ALERT");
}

//2
function imgAlert(){
    alert("Thanks for purchasing a phone from us.");
}
//5
var counterElement=document.getElementById('counter');
var count=0;

function increaseCounter(){
   count++;
   updatecount();

}
function decreaseCounter(){
    count--;
    updatecount();
 
 }
 function updatecount(){
    counterElement.textContent=count;
 }

 //4.
 function deleteRow(btn) {
    var row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);
  }