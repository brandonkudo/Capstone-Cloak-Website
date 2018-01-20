import React from 'react';
import Install from './Install';
import Animations from './Animations';
import Buttons from './Buttons';
import Cards from './Cards';
import Colors from './Colors';
import Grid from './Grid';
import Fonts from './Fonts';
import Forms from './Forms';
import Icons from './Icons';
import Mixins from './Mixins';
import Navbar from './Navbar';
import SidebarPage from './SidebarPage';
import Sidebar from './Sidebar';
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
        <Route path='/documentation/animations' component={Animations} />
        <Route path='/documentation/buttons' component={Buttons} />
        <Route path='/documentation/cards' component={Cards} />
        <Route path='/documentation/colors' component={Colors} />
        <Route path='/documentation/fonts' component={Fonts} />
        <Route path='/documentation/forms' component={Forms} />
        <Route path='/documentation/grid' component={Grid} />
        <Route path='/documentation/icons' component={Icons} />
        <Route path='/documentation/mixins' component={Mixins} />
        <Route path='/documentation/navbar' component={Navbar} />
        <Route path='/documentation/sidebar' component={SidebarPage} />
      </Switch>
    </div>
  );
}

export default Documentation;
