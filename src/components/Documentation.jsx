import React from 'react';
import Sidebar from './Sidebar';
import Item from './Item';
import { Switch, Route } from 'react-router-dom';

const styles = {
  wrapperStyle: {
    width: '100vw',
    display: 'flex',
    flexDirection: 'row'
  }
}

class Documentation extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: 'title'
    }
  }

  handleSwitchPage(){
    console.log('hello');
  }


  render(){
    return(
      <div style={styles.wrapperStyle}>
        <Sidebar onSwitchPage={this.handleSwitchPage}/>
        <Item
          title={this.state.title}/>
      </div>
    );
  }
}

export default Documentation;
