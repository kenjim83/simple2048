// MODEL

function Board(){
  var num_rows_columns = 4
  this.board = new Array(Math.pow(num_rows_columns, 2))
}

Board.prototype = {
  generateNewTile: function(){
    this.board[this.randomEmptyIndex()] = new Tile
  },

  randomEmptyIndex: function(){
    var found = false
    while (found == false) {
      var randIndex = Math.floor( (Math.random() * this.board.length-1) );
      if (this.board[randIndex] == null){
        found = true
        return randIndex
      }
    }
  },


}

function Tile(){
  this.value = Math.random() < 0.5 ? 2 : 4
}


// VIEW


// CONTROLLER




game = new Board
game.board