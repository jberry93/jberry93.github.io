'use strict';

import React from 'react';
import AppStyles  from './AppStyles';

const Bio = function(){
  return(
    <div>
      <h3 style={AppStyles.headerText}>bio</h3>
      <div style={AppStyles.sectionContainer} className="row">
        <div className="column">
          <h5 style={AppStyles.sectionTitle}>Name</h5>
          <p style={AppStyles.sectionText}>Jeffrey Berry</p>
        </div>
        <div className="column">
          <h5 style={AppStyles.sectionTitle}>Age</h5>
          <p style={AppStyles.sectionText}>23</p>
        </div>
        <div className="column">
          <h5 style={AppStyles.sectionTitle}>Location</h5>
          <p style={AppStyles.sectionText}>Torrance, CA</p>
        </div>
      </div>
    </div>
  );
}

export default Bio;
