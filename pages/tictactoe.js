import React from 'react';
import Layout from '../components/MyLayout';
import GameBoard from '../components/tictactoe/GameBoard';
import Display from '../components/tictactoe/Display';
import ScoreBoard from '../components/tictactoe/ScoreBoard';

function TicTacToe() {
  return (
    <Layout>
      <div className='container'>
        <ScoreBoard />
        <br></br>
        <GameBoard />
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Display />
      </div>
    </Layout>
  );
}

export default TicTacToe;
