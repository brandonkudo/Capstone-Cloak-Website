import React from 'react';
import Header from './Header';
import {  Switch, Route } from 'react-router-dom';
import About from './About';
import Splash from './Splash';
import Sidebar from './Sidebar';
import Documentation from './Documentation'

function App(){
  const styles = {
    wrapperStyle: {
      display: 'flex',
      flexDirection: 'row',
      width: '100vw'
    }
  }
  return(
    <div>
      <Header/>
      <div style={styles.wrapperStyle}>
        <Switch>
          <Route exact path='/' component={Splash} />
          <Route path='/about' component={About} />
          <Route path='/documentation/install' component={Documentation} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
