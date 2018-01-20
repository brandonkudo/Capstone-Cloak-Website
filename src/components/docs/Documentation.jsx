import React from 'react';
import Sidebar from './Sidebar';
import Install from './Install';
import Buttons from './Buttons';
import { Switch, Route } from 'react-router-dom';


function Documentation() {
  const styles = {
    wrapperStyle: {
      width: '100vw',
      display: 'flex',
      flexDirection: 'row'
    }
  }
  return(
    <div style={styles.wrapperStyle}>
      <Sidebar />
      <Switch>
        <Route path='/documentation/install' component={Install} />
        <Route path='/documentation/buttons' component={Buttons} />
      </Switch>
    </div>
  );
}

export default Documentation;
