'use strict';

import React      from 'react';
import Avatar     from 'material-ui/Avatar';
import FlatButton from 'material-ui/FlatButton';
import FontIcon   from 'material-ui/FontIcon';
import AppStyles  from './AppStyles';
import IconButton from './IconButton';

const Header = function(){
  return(
    <div>
      <h1 style={AppStyles.headerText}>Sup :)</h1>
      <img style={AppStyles.avatar} src="../../images/myPic.jpeg"/>
      <div style={AppStyles.iconContainer}>
        <IconButton
          label="Github"
          href="https://github.com/jberry93"
        />
        <IconButton
          label="LinkedIn"
          href="https://www.linkedin.com/in/jeffrey-berry-82154a3a"
        />
        <IconButton
          label="Blog"
          href="https://jberry93.github.io/blog"
        />
      </div>
    </div>
  );
}

export default Header;
