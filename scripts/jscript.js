const container = document.getElementById("container");
let rowsAndcolumns=document.getElementById("valueRange").value;

let typeOfColor="black";

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function showVal(rowsAndcolumns){
    document.getElementById("spanValue").textContent="Range: "+rowsAndcolumns +"x" + rowsAndcolumns +" "; 
    
    removeAllChildNodes(container);

    rows=rowsAndcolumns;
    columns=rowsAndcolumns;
    i=-1;
    s="";
    container.style.display="grid";
    container.style.gridTemplateColumns = "repeat("+columns+", auto)";
    let divs=rows*columns;
    
    while(++i<divs) {
        s+= '<div class="color">';
  
        s+= '</div>';
    }
    container.innerHTML = s;
    colors();
}

function colors(){
    var cells = document.querySelectorAll(".color");
    for (var k = 0; k < cells.length; k++) {
        cells[k].addEventListener("mouseover", function() {
            if(typeOfColor=="black")
            {
                this.style.backgroundColor = "black";
            }
            else if(typeOfColor=="erase"){
                this.style.backgroundColor = "white";
            }
            else{
                this.style.backgroundColor = "#" +Math.floor(Math.random()*16777215).toString(16);
            }
        });
    }
}

function typeofColorFunction(type){
    typeOfColor=type;
    colors();
}

function reset(){
    document.querySelectorAll('.color').forEach(function(div) {
        div.style.backgroundColor="white";
    });
}

function startGame(){
    showVal(rowsAndcolumns);
    colors();
}


startGame();
//for(j=0; j<n; j++) s+= `<div class="cell">  </div>`;