'use strict';

import React from 'react';
import AppStyles from './AppStyles';

const Experience = function(){
  return(
    <div>
      <h3 style={AppStyles.headerText}>experience</h3>
      <div style={AppStyles.sectionContainer} className="row">
        <div className="column">
          <h5 style={AppStyles.sectionTitle}>Gaikai</h5>
          <p style={AppStyles.sectionText}>Jan 2016 ~ July 2016</p>
          <p style={AppStyles.sectionText}>Web Developer Intern</p>
        </div>
        <div className="column">
          <h5 style={AppStyles.sectionTitle}>Orange County Code School</h5>
          <p style={AppStyles.sectionText}>Aug 2015 ~ Oct 2015</p>
          <p style={AppStyles.sectionText}>Full Stack JavaScript Developer</p>
        </div>
      </div>
    </div>
  );
}

export default Experience;
