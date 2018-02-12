/*

*/
var page_array = [["[jumbotron]","[jumbotron]"],["#Welcome to the site","![Welcome banner](http://daxushequ.com/data/out/24/img60426245.jpg)"],["this site is all driven by a spreadsheet",""],["",""],["[card]","[card]"],["card heading","![Welcome banner](http://daxushequ.com/data/out/24/img60426245.jpg)"],["some text",""]];
printHTML();
/* $(document).ready( function(){
 $.get(page_array_url, function(data){
  console.log("Data: " + data);
  page_array = JSON.parse(data);
  printHTML();
 });
}); */
/*
first row of the section with the component name 
and second column of the first row will also have '' [empty string] or another component name 
that will decide if one component have two columns or there are two components in a row
*/
var result = "";
var closeDivs="";
function printHTML(){
	for (let col = 0; col < page_array[0].length; col++) {
		for (let row = 0; row < page_array.length; row++) {
			if(page_array[row][col].charAt(0)=="[" && page_array[row][col].slice(-1)=="]"){/*check if its a component*/
				result+=section_start;
				if(isNextComponentSame(row, col)){
					result+=eval(page_array[row][col].slice(1,-1)+"_start")+row_start+col_start;
				}
				else{
					result+= row_start+col_start+eval(page_array[row][col].slice(1,-1)+"_start");
				}
			}
		}
	}
	$("#code").text(result);
}
function isNextComponentSame(i, j){
	j++;
	if(page_array[i][j] == ""){
		return true;
	}
	return false;
}
function isItEmptyRow(row, col){
	for(let col = 0; col < page_array[0].length; col++){
		if(page_array[row][col]!=""){
			return false;
		}
	}
	return true;
}