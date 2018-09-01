var currentGrid;

function getGrid(grid){
var nextGrid = [];
    for(x=0;x<grid.length;x++){
    var line=[];
        for(y=0;y<grid[x].length;y++){
        cellXY=grid[x][y];
        neighbors = getNeighbors(grid,x,y)

            if(cellXY==1){
                if(neighbors>1 && neighbors <4) {
                    line.push(1);
                } else {
                    line.push(0);
                }
            } else {
                if(neighbors==3) {
                   line.push(1);
               } else {
                  line.push(0);
               }
            }
         }
      nextGrid.push(line);
    }
  currentGrid = nextGrid;
}

function createGrid(){
var grid = [];
    for(x=0;x<10;x++){
        var line=[];
        for(y=0;y<10;y++){
            line.push(Math.floor(Math.random() * 2));
        }
     grid.push(line);
    }
   currentGrid = grid;

}



function getNeighbors(grid,x,y){
  neighbors=0;
  try {
      if(grid[x-1][y-1]==1) neighbors++;
  }
  catch(err) {
      //
  }

  try {
        if(grid[x][y-1]==1) neighbors++;
    }
    catch(err) {
        //
    }

  try {
        if(grid[x+1][y-1]==1) neighbors++;
    }
    catch(err) {
        //
    }
  try {
        if(grid[x-1][y]==1) neighbors++;
    }
    catch(err) {
        //
    }
   try {
        if(grid[x+1][y]==1) neighbors++;
     }
     catch(err) {
         //
     }
  try {
       if(grid[x-1][y+1]==1) neighbors++;
    }
    catch(err) {
        //
    }

   try {
        if(grid[x][y+1]==1) neighbors++;
      }
      catch(err) {
          //
      }
 try {
       if(grid[x+1][y+1]==1) neighbors++;
    }
    catch(err) {
        //
    }


  return neighbors;

}

function drawGrid(grid){
grid= currentGrid;
 document.querySelector("#board").innerHTML="";
    for(x=0;x<grid.length;x++){
        for(y=0;y<grid[x].length;y++){
            if(grid[x][y]==1){
                cell="1"
            } else {
                cell="0"
            }
            document.querySelector("#board").innerHTML +=cell;
        }
        document.querySelector("#board").innerHTML +="<br/>";
    }
}