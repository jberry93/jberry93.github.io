'use strict';

import React from 'react';
import AppStyles from './AppStyles';

const Skills = function(){
  return(
    <div>
      <h3 style={AppStyles.headerText}>I like to work with...</h3>
      <div className="row">
        <div style={AppStyles.skills} className="column">
          <img src="../../images/react.svg" alt="ReactJS" height="125" width="125"></img>
        </div>
        <div style={AppStyles.skills} className="column">
          <img src="../../images/es6.svg" alt="ES6" height="125" width="125"></img>
        </div>
        <div style={AppStyles.skills} className="column">
          <img src="../../images/babel.svg" alt="Babel" height="125" width="125"></img>
        </div>
      </div>
      <div className="row">
        <div style={AppStyles.skills} className="column">
          <img src="../../images/javascript.svg" alt="JavaScript" height="125" width="125"></img>
        </div>
        <div style={AppStyles.skills} className="column">
          <img src="../../images/html.svg" alt="HTML5" height="125" width="125"></img>
        </div>
        <div style={AppStyles.skills} className="column">
          <img src="../../images/css.svg" alt="CSS3" height="125" width="125"></img>
        </div>
      </div>
      <div className="row">
        <div style={AppStyles.skills} className="column">
          <img src="../../images/karma.svg" alt="Karma" height="125" width="125"></img>
        </div>
        <div style={AppStyles.skills} className="column">
          <img src="../../images/jasmine.svg" alt="Jasmine" height="125" width="125"></img>
        </div>
        <div style={AppStyles.skills} className="column">
          <img src="../../images/mocha.svg" alt="Mocha" height="125" width="125"></img>
        </div>
      </div>
      <div className="row">
        <div style={AppStyles.skills} className="column">
          <img src="../../images/semantic.svg" alt="Semantic" height="125" width="125"></img>
        </div>
        <div style={AppStyles.skills} className="column">
          <img src="../../images/bootstrap.svg" alt="Bootstrap" height="125" width="125"></img>
        </div>
        <div style={AppStyles.skills} className="column">
          <img src="../../images/npm.svg" alt="NPM" height="125" width="125"></img>
        </div>
      </div>
      <div className="row">
        <div style={AppStyles.skills} className="column">
          <img src="../../images/gulp.svg" alt="Gulp" height="125" width="125"></img>
        </div>
        <div style={AppStyles.skills} className="column">
          <img src="../../images/angular.svg" alt="AngularJS" height="125" width="125"></img>
        </div>
        <div style={AppStyles.skills} className="column">
          <img src="../../images/browserify.svg" alt="Browserify" height="125" width="125"></img>
        </div>
      </div>
      <div className="row">
        <div style={AppStyles.skills} className="column">
          <img src="../../images/nodejs.svg" alt="NodeJS" height="125" width="125"></img>
        </div>
        <div style={AppStyles.skills} className="column">
          <img src="../../images/express.svg" alt="Express" height="125" width="125"></img>
        </div>
        <div style={AppStyles.skills} className="column">
          <img src="../../images/git.svg" alt="Git" height="125" width="125"></img>
        </div>
      </div>
      <div className="row">
        <div style={AppStyles.skills} className="column">
          <img src="../../images/github.svg" alt="Github" height="125" width="125"></img>
        </div>
        <div style={AppStyles.skills} className="column">
          <img src="../../images/slack.svg" alt="Slack" height="125" width="125"></img>
        </div>
      </div>
    </div>
  );
}

export default Skills;
