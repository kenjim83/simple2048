$(document).ready(function(){
  view = new View()
  board = new Board()
  controller = new Controller(view, board)
  controller.bindListeners()

}); // end document ready

// dete


// CONTROLLER

function Controller(view, board){
  this.view = view
  this.board = board
}

Controller.prototype = {
  bindListeners: function(){
    $('#new-tile').on("click",this.addNewTile.bind(this))
    $('#clear-board').on("click",this.clearBoard.bind(this))

    // Listen for arrow keys
    $(document).keydown(this.delegateKeys.bind(this))

  },

  delegateKeys: function(e){
    if(e.which==38){
      this.up()
    }
    else if(e.which==40){
      this.down()
    }
    else if(e.keyCode==37){
      this.left()
    }
    else if(e.keyCode==39){
      this.right()
    }
  },

  up: function(){
    console.log('up')
  },
  down: function(){
    console.log('down')
  },
  left: function(){
    console.log('left')
  },
  right: function(){
    console.log('right')
  },

  addNewTile: function(){
    this.board.generateNewTile()
    this.view.refreshBoard(this.board.board)
  },

  clearBoard: function(){
    this.board.board = new Array(16)
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
    this.board[emptyIndex] = new Tile()
    return emptyIndex
  },

  randomEmptyIndex: function(){
    for(var i=0; i<16; i++){
      var randIndex = Math.floor( (Math.random() * 16) );
      if(this.board[randIndex] == null){
        return randIndex
      }
    }
    return false
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
      if(board_obj[index].constructor.name == 'Tile')
      $('#' + index).append('<div class="tile">' + board_obj[index].value + '</div>')
    }
  },
}