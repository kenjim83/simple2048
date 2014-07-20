$(document).ready(function(){
  view = new View()
  board = new Board()
  controller = new Controller(view, board)
  controller.bindListeners()

}); // end document ready

// CONTROLLER

function Controller(view, board){
  this.view = view
  this.board = board
}

Controller.prototype = {
  bindListeners: function(){
    $('#new-tile').on("click",this.addNewTile.bind(this))
    $('#clear-board').on("click",this.clearBoard.bind(this))

  },

  addNewTile: function(){
    this.board.generateNewTile()
    this.view.refreshBoard(this.board.board)
  },

  clearBoard: function(){
    for(index in this.board.board){
      this.board.board[index] = null
    }
    this.view.refreshBoard(this.board.board)
  },



} // End Controller


// MODEL

function Board(){
  this.board = new Array(16)
}

Board.prototype = {
  generateNewTile: function(){
    var emptyIndex = this.randomEmptyIndex()
    this.board[emptyIndex] = new Tile
    return emptyIndex
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

function View(){}

View.prototype = {
  refreshBoard: function(board_obj){
    $('.grid-cell').html('')
    for(index in board_obj){
      $('#' + index).append('<div class="tile">' + board_obj[index].value + '</div>')
    }
  },
}