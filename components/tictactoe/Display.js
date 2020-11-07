import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux';

import { addTurn } from '../../actions/index.js';
import { bindActionCreators } from 'redux';

const Display = (
  { gameState } 
) => {
  return (
    <div>
              
      <p>It's turn: {gameState.turn} </p> 
      <p>It's {gameState.whosTurn} 's turn</p>
      <p>Game Over?: {gameState.gameOver.toString()} </p> 

      <style jsx>
        {`
        
                `}
      </style>
    </div>
  );
};


function mapStateToProps(state){
  return { gameState: state.gameState };
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({ 
    addTurn: addTurn, 
  }, dispatch);
}



export default connect(mapStateToProps, matchDispatchToProps) (Display);
