var page_array = [["[jumbotron]","[jumbotron]"],["#Welcome to the site","![Welcome banner](http://daxushequ.com/data/out/24/img60426245.jpg)"],["this site is all driven by a spreadsheet",""],["",""],["[card]","[card]"],["card heading","![Welcome banner](http://daxushequ.com/data/out/24/img60426245.jpg)"],["some text",""]];

var currentComponentRow = 0;
var componentRows = [];

var this_different = false;
var next_different = false;
var this_same = false;
var next_same = false;

var result = "";

function printHTML(){
	setComponentRows();
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
		result+=section_start+row_start;
		
		for(var j = -1; j < componentRows[i].length; j++){
			setDeciders();
			if(this_different && next_different){
				result+=col_start;
				result+=component_start;
				result+=row_start;
				result+=col_start;
				result+=getComponentsHTML();
				result+=col_end;
				result+=row_end;
				result+=component_end;
				result+=col_end;
			}
			if(this_different && next_same){
				result+=col_start;
				result+=component_start;
				result+=row_start;
				result+=col_start;
				result+=getComponentsHTML();
				result+=col_end;
			}
			if(this_same && next_same){
				result+=col_start;
				result+=getComponentsHTML();
				result+=col_end;
			}
			if(this_same && next_different){
				result+=col_start;
				result+=getComponentsHTML();
				result+=col_end;
				result+=row_end;
				result+=component_end;
				result+=col_end;
			}
		}
		result+=row_end+section_end;
	}
}
function printColContent(){
	
}
function setNextComponent(){
	
}

function setComponentRows(){
	
}