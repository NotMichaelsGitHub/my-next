import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import GameSpace from './GameSpace';


const GameBoard = () => {
  return (
    <div>
      
      <div className='row'>
        <div className='col-4 border-right border-bottom text-center'>
          <GameSpace placement = { { x: 0, y: 0 } } />
        </div>
        <div className='col-4 border-left border-right border-bottom text-center'>
          <GameSpace placement = { { x: 0, y: 1 } } />
        </div>
        <div className='col-4 border-left border-bottom text-center'>
          <GameSpace placement = { { x: 0, y: 2 } } />
        </div>
      </div>

      <div className='row'>
        <div className='col-4 border-top border-right border-bottom text-center'>
          <GameSpace placement = { { x: 1, y: 0 } } />
        </div>
        <div className='col-4 border text-center'>
          <GameSpace placement = { { x: 1, y: 1 } } />
        </div>
        <div className='col-4 border-top border-left border-bottom text-center'>
          <GameSpace placement = { { x: 1, y: 2 } } />
        </div>
      </div>

      <div className='row'>
        <div className='col-4 border-top border-right text-center'>
          <GameSpace placement = { { x: 2, y: 0 } } />
        </div>
        <div className='col-4 border-top border-right border-left text-center'>
          <GameSpace placement = { { x: 2, y: 1 } } />
        </div>
        <div className='col-4 border-top border-left text-center'>
          <GameSpace placement = { { x: 2, y: 2 } } />
        </div>
      </div>

      <style jsx>
        {`

        `}
      </style>
    </div>
  );
};



export default (GameBoard);