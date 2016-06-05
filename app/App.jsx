'use strict';

import React            from 'react';
import ReactDOM         from 'react-dom';
import Bio              from './components/Bio';
import Education        from './components/Education';
import Experience       from './components/Experience';
import Header           from './components/Header';
import Skills           from './components/Skills';
import getMuiTheme      from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends React.Component{
  render(){
    return(
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <div>
          <Header/>
          <Bio/>
          <Experience/>
          <Education/>
          <Skills/>
        </div>
      </MuiThemeProvider>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));
