const initialState = {  
  board: 
    [
      [ ' ' , ' ' , ' ' ],
      [ ' ' , ' ' , ' ' ],
      [ ' ' , ' ' , ' ' ],
    ],
  turn: 0,
  players: 2,
  gameOver: false,
  xWins: 0,
  oWins: 0,
  whosTurn: 'X', 
};

export default function(state = initialState, action) {

  switch(action.type){
        
  case 'MAKE_MOVE':

    if(state.gameOver === true){
      return state;
    }
            
    const newBoard = state.board;
    if(newBoard[action.location.x][action.location.y] !== ' '){
      return state;
    }
                
    if(state.turn%2 === 0){
      newBoard[action.location.x][action.location.y] = 'X';  
      return makeMove(state, newBoard, 'X');
    }
                    
    newBoard[action.location.x][action.location.y] = '0'; 
    return makeMove(state, newBoard, '0');
                      
                
            


  case 'DEBUG_INCREMENT_TURN':
    return {
      ...state,
      turn: state.turn + 1,
    };

  default:
    return state;   
  }
    
}


function makeMove(state, newBoard, player){
  let score = state.xWins;
  let gameOver = state.gameOver;
    
  if(check(newBoard, player) === true) {
    score +=1;
    gameOver = true;
  }

  if(state.whosTurn === 'X'){
    state.whosTurn = '0';
  }
  else{
    state.whosTurn = 'X';
  }

  if(player === 'X'){
    return {
      ...state,
      turn: state.turn + 1,
      board: newBoard,
      gameOver: gameOver,
      xWins: score,
    };
  }
    
  return {
    ...state,
    turn: state.turn + 1,
    board: newBoard,
    gameOver: gameOver,
    oWins: score,
  };
    

    
}


function check(board, player){

  //check x 
  for (let x = 0; x <3; x++){
    if(
      board[x][0] === player &&
            board[x][1] === player &&
            board[x][2] === player )
    {
      console.log('game over');
      console.log(player + ' wins!');
      return true;
    }
  }

  //check y
  for (let y = 0; y <3; y++){
    if(
      board[0][y] === player &&
            board[1][y] === player &&
            board[2][y] === player )
    {
      console.log('game over');
      console.log(player + ' wins!');
      return true;
    }
  }

  //diagnal 1
  if(
    board[0][0] === player &&
        board[1][1] === player &&
        board[2][2] === player )
  {
    console.log('game over');
    console.log(player + ' wins!');
    return true;
  }

  //diagnal 2
  if(
    board[0][2] === player &&
        board[1][1] === player &&
        board[2][0] === player )
  {
    console.log('game over!');
    console.log(player + ' wins!');
    return true;
  }

  //if nothing 
  return false;
}