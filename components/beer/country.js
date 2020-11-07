import React from "react";
import { Pie } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";

//gets the unique countries in the object
const getUnqiue = (object, key) => {
  const allElements = object.map(x => x[key]);
  const unqiueElements = [...new Set(allElements)];
  return unqiueElements;
};

//gets how many times those unique elements show up in the object
const getValues = (beer, key, labels) => {
  const allBeer = beer.map(x => x[key]);

  let values = [];
  labels.forEach(element =>
    values.push(allBeer.filter(v => v === element).length)
  );

  return values;
};

const Country = props => {
  const labels = getUnqiue(props.beer, "country");
  const data = getValues(props.beer, "country", labels);
  //todo create a way to make the background match the country flags but this is fine for now just to get a working example
  const colors = [
    "red",
    "blue",
    "yellow",
    "green",
    "orange",
    "purple",
    "navy",
    "brown",
    "skyblue",
    "salmon",
    "orangered",
    "olive",
    "mediumorchid",
    "maroon",
    "lime",
    "pink",
    "goldenrod",
    "firebrick",
    "darkcyan",
    "cornflowerblue",
    "chocolate",
    "firebrick",
    "darkcyan",
    "cornflowerblue",
    "chocolate"
  ];

  const asdf = {
    dataPie: {
      labels: labels,
      datasets: [
        {
          data: data,
          backgroundColor: colors,
          hoverBackgroundColor: colors
        }
      ]
    }
  };

  return (
    <MDBContainer>
      <h3>Country of Origin</h3>
      <Pie data={asdf.dataPie} options={{ responsive: true }} />
    </MDBContainer>
  );
};

export default Country;
