import React from "react";
import { Card, Image } from 'react-bootstrap';

const Sabermetrics = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 text-left">
          <h1>White Sox Dunkin Donuts Promo 2021</h1>
          <p>
            During the 2021 season, the Chicago White Sox and Dunkin Donuts collaborated for a promo on the MLB Ballpark App.
            <br></br><br></br>
            The user selected either the 4th, 5th or 6th inning for home games the entire year, if the Sox scored a run in that inning, you would win a free coffee.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-12 text-center">
          <Card>
            <Card.Body>
              <img src='https://i.imgur.com/OxnI1Fo.png' className='img-fluid shadow-4' alt='...' />
              <p>First, import the statsapi package from <a href="https://github.com/toddrob99/MLB-StatsAPI/wiki" target="_blank">https://github.com/toddrob99/MLB-StatsAPI/wiki</a></p>
              <br></br>

              <img src='https://i.imgur.com/zZ3KvJK.png' className='img-fluid shadow-4' alt='...' />
              <p>Then, get all White Sox home games from the 2021 season and keep track of all scoring plays per home game</p>
              <br></br>

              <img src='https://i.imgur.com/4OXscpe.png' className='img-fluid shadow-4' alt='...' />
              <p>Next, create a function to check which each scoring play, by the inning</p>
              <br></br>

              <img src='https://i.imgur.com/HyQ6UaF.png' className='img-fluid shadow-4' alt='...' />
              <p>Lastly, loop through each game and keep track of how many times the Sox scored at least one run in that inning</p>
              <br></br>

              <img src='https://i.imgur.com/NzjzAJe.png' className='img-fluid shadow-4' alt='...' />
              <p>The results:
                <br></br>
                <code>
                  The White Sox scored in the 4th inning 35% of the time
                  <br></br>
                  The White Sox scored in the 5th inning 33% of the time
                  <br></br>
                  The White Sox scored in the 6th inning 34% of the time
                </code>
              </p>

            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Sabermetrics;
