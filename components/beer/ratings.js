import React from 'react';
import { Bubble } from 'react-chartjs-2';
import { MDBContainer } from 'mdbreact';

const Rating = (props) => {

  const data = {
    datasets: [
      {
        label: 'Sapporo',
        data: [{ x: 10,y: 20,r: 3 }],
            
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
      },
    ],
  };
      

  return (
    <MDBContainer>
      <h3>Ratings</h3>
      <Bubble data={data} />
    </MDBContainer>
  );
};

export default (Rating);