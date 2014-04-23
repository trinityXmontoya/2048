$(document).ready(function(){
	console.log("Loaded, bro!")
	game();
})

// var game_options = [
//     2,4,8,16,32,64,128,512
// ]


function game(){
    $(document).keydown( function e(){
        if (e.which == 37){
          alert("left pressed");
          populateBoard("left");
        }
        else if (e.which == 38) populateBoard("up");
        else if (e.which == 39) populateBoard("right");
        else if (e.which == 40) populateBoard("down");
    });
}

function populateBoard(direction){

  if(direction=="left"){console.log("hey")};
}
