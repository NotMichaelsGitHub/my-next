import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux';

import { addTurn } from '../../actions/index.js';
import { bindActionCreators } from 'redux';

const ScoreBoard = (
  { gameState } 
) => {
  return (
    <div>

      <div className='row text-center'>
        <div className='col-md-4'>
                        X has won {gameState.xWins} games
        </div>
        <div className='col-md-4'>

        </div>
        <div className='col-md-4'>
                        0 has won {gameState.oWins} games
        </div>
      </div>
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



export default connect(mapStateToProps, matchDispatchToProps) (ScoreBoard);
