var page_array = [["[jumbotron]","[jumbotron]"],["#Welcome to the site","![Welcome banner](http://daxushequ.com/data/out/24/img60426245.jpg)"],["this site is all driven by a spreadsheet",""],["",""],["[card]","[card]"],["card heading","![Welcome banner](http://daxushequ.com/data/out/24/img60426245.jpg)"],["some text",""]];

var currentComponentRow = 0;
var componentRows = [];

var row = 0;
var col = -1;

var result = "";

function printHTML(){
	setTotalNumberOfComponentRows();
	for(var i = 0; i < componentRows.length; i++){
		//start container, row and col
		//start component, row 
		//start col -- awesome step
		//print everything in current col
		//close col
		//if in current component row next col is empty 
			//close col and start next one -- then goto awesome step
		//else
			//close col, row, component -- then goto awesome step
		//close col, row, container
		
		//--------------
		result+=section_start+row_start+col_start;
		result+=component_start+row_start;
		for(var j = -1; j < componentRows[i].length; j++){
			if(isNextColEmpty(componentRows[i],j)){
				printColContent();
			}
			else{
				result+=row_end;
				result+=component_end;
				result+=component_start+row_start;
				printColContent();
				//now go to if here
			}
		}
	}
}
function printColContent(){
	result+=col_start;
	result+=getComponentsHTML();
	result+=col_end;
}
function setNextComponent(){
	
}

function setTotalNumberOfComponentRows(){
	
}