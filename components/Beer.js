import React from "react";
import { connect } from "react-redux";
import Types from "./beer/types";
import Country from "./beer/country";
import Rating from "./beer/ratings";
// import PropTypes from 'prop-types';
// import Table from './beer/table'

const Beer = props => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 text-center">
          <h1>Beer</h1>
          <p>
            an indepth statistical analysis of some of the beer I drank during
            college (work in progress)
          </p>
        </div>
        <div className="col-12">
          {/* <Table beer = {props.allbeer} /> */}
          <Country beer={props.beer} />
          <Types beer={props.beer} />
          <Rating beer={props.beer} />
        </div>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  const beer = state.beerReducer;
  return {
    beer: beer
  };
}

// Beer.propTypes = {
//   beer: PropTypes.isRequired,
// };

export default connect(mapStateToProps)(Beer);
