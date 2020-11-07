import React from 'react';
import { Card } from 'react-bootstrap';
import { connect } from 'react-redux';

const TrophyCabinet = (props) => {

  const createCard = (trophies) => {
    
    return(
      <>
        {trophies.map(function(trophy, index) {
          return (
            <div className='col-lg-4 col-md-6 col-12 pb-4' key={index}>
              <Card>
                <Card.Img variant='top' src={trophy.link}/>
                <Card.Body>
                  <Card.Title>{trophy.name}</Card.Title>
                  <span>Team: {trophy.team}</span> <br></br>
                  <span>Year: {trophy.time}</span>    
                  <Card.Text>
                    {trophy.blurb}
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </>
    );
  };

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-12 text-center'>
          <h1>Trophy Cabinet</h1>
          <p>more silverware (always) coming soon</p>
        </div>          
        {createCard(props.trophies.accomplishments)}
      </div>
    </div>
  );
};

function mapStateToProps(state){
  const trophies = state.accomplishmentsReducer;
  return {
    trophies: trophies,
  };
}

export default  connect(mapStateToProps)(TrophyCabinet);