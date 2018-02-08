/*

*/
var page_array = "";
$(document).ready( function(){
 $.get(page_array_url, function(data){
  console.log("Data: " + data);
  page_array = JSON.parse(data);
  printHTML();
 });
});
/*
first row of the sesction with the compoenent name 
and second column of the first row will also have 'same' or another component name 
that will decide if one component have two columns or there are two compoenents in a row
*/
function printHTML(){
 for (let i = 0; i < page_array.length; i++) {
  console.log("line "+i);
  for (let j = 0; j < page_array[i].length; j++) {
   console.log(page_array[i][j]);
  }
 }
}
