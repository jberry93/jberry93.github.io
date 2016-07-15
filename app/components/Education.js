'use strict';

import React from 'react';
import AppStyles from './AppStyles';

const Education = function(){
  return(
    <div>
      <h3 style={AppStyles.headerText}>education</h3>
      <div style={AppStyles.sectionContainer} className="row">
        <div className="column">
          <h5 style={AppStyles.sectionTitle}>Marymount California University</h5>
          <p style={AppStyles.sectionText}>BA: Liberal Arts</p>
          <p style={AppStyles.sectionText}>Biomedical Science</p>
          <p style={AppStyles.sectionText}>Behavioral Science</p>
        </div>
      </div>
    </div>
  );
}

export default Education;
