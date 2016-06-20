'use strict';

import React      from 'react';
import Avatar     from 'material-ui/Avatar';
import FlatButton from 'material-ui/FlatButton';
import FontIcon   from 'material-ui/FontIcon';
import AppStyles  from './AppStyles';

export default class Header extends React.Component{
  render(){
    return(
      <div>
        <h1 style={AppStyles.headerText}>Sup :)</h1>
        <Avatar style={AppStyles.avatar} src="../../images/myPic.jpeg" size={150} />
        <div style={AppStyles.iconContainer}>
          <FlatButton
            linkButton={true}
            label="Github"
            href="https://github.com/jberry93"
            icon={<FontIcon className="fa fa-github-square" />}
          />
          <FlatButton
            linkButton={true}
            label="LinkedIn"
            href="https://www.linkedin.com/in/jeffrey-berry-82154a3a"
            icon={<FontIcon className="fa fa-linkedin-square" />}
            />
          <FlatButton
            linkButton={true}
            label="Blog"
            href="https://jberry93.github.io/blog"
            icon={<FontIcon className="fa fa-pencil-square-o" />}
          />
        </div>
      </div>
    );
  }
}
