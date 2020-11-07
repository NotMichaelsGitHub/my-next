import React from 'react';
import { Card } from 'react-bootstrap';
import { connect } from 'react-redux';

const Kits = (props) => {

  const createKitCard = (kits) => {
    
    return(
      <>
        {kits.map(function(kit, index) {
          return (
            <div className='col-lg-4 col-md-6 col-12 pb-4' key={index}>
              <Card>
                <Card.Img variant='top' src={kit.link}/>
                <Card.Body>
                  <Card.Title>{kit.name} <span className='text-muted'> - {kit.edition}</span></Card.Title>
                  <Card.Subtitle className='mb-2 text-muted'>{kit.season}</Card.Subtitle>
                  <Card.Text>
                    {kit.description}
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
          <h1>Kits</h1>
          <p>Designed by Michael Di Paolo</p>
        </div>
        {createKitCard(props.gear.allkits)}
      </div>
    </div>
  );
};

function mapStateToProps(state){
  const gear = state.kitsReducer;
  return {
    gear: gear,
  };
}

export default  connect(mapStateToProps)(Kits);