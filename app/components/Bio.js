'use strict';

import React from 'react';
import AppStyles  from './AppStyles';

export default class Bio extends React.Component{
  render(){
    return(
      <div>
        <h3 style={AppStyles.headerText}>bio</h3>
        <div style={{textAlign: 'center'}} className="row">
          <div className="column">
            <h5 style={AppStyles.bio}>Name</h5>
            <p>Jeffrey Berry</p>
          </div>
          <div className="column">
            <h5 style={AppStyles.bio}>Age</h5>
            <p>23</p>
          </div>
          <div className="column">
            <h5 style={AppStyles.bio}>Job</h5>
            <p>Web Developer Intern</p>
          </div>
          <div className="column">
            <h5 style={AppStyles.bio}>Location</h5>
            <p>Irvine, CA</p>
          </div>
        </div>
      </div>
    );
  }
}
