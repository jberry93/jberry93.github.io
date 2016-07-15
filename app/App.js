'use strict';

import React            from 'react';
import ReactDOM         from 'react-dom';
import Bio              from './components/Bio';
import Education        from './components/Education';
import Experience       from './components/Experience';
import Header           from './components/Header';
import Skills           from './components/Skills';

const App = function(){
  return(
    <div>
      <Header/>
      <Bio/>
      <Experience/>
      <Education/>
      <Skills/>
    </div>
  );
}

ReactDOM.render(<App/>, document.getElementById('app'));
