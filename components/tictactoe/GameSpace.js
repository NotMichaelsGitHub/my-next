import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';

import { makeMove } from '../../actions/index.js';
import { bindActionCreators } from 'redux';



const GameSpace = (
  { gameState,
    placement,
    makeMove }
) => {
   
  return (
    <div>
      
      <br></br>
      {adsf(gameState, placement, makeMove)}
      <br></br>
      <br></br>

      <style jsx>
        {`

        `}
      </style>
    </div>
  );
};

function adsf(state, placement, makeMove) {

  // console.log(state)

  if(state.board[placement.x][placement.y] === ' '){
    return (
      <Button variant='outline-primary' onClick= {() => makeMove(placement)}> Empty </Button>
    );
  }

    
  return (
    <Button variant='outline-primary' onClick= {() => makeMove(placement)}> {state.board[placement.x][placement.y]} </Button>
  );
    
    

}

function mapStateToProps(state){
  return { gameState: state.gameState };
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({ 
    makeMove: makeMove, 
  }, dispatch);
}



export default connect(mapStateToProps, matchDispatchToProps) (GameSpace);