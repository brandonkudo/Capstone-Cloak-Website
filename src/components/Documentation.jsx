import React from 'react';
import Sidebar from './Sidebar';
import Item from './Item';

const styles = {
  wrapperStyle: {
    width: '100vw',
    display: 'flex',
    flexDirection: 'row'
  }
};

class Documentation extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: 'install',
      example: 'example',
      body: 'body',
      codeSnippet: 'codeSnippet'
    };
    this.handleSwitchToButtonPage = this.handleSwitchToButtonPage.bind(this);
  }

  handleSwitchToButtonPage(){
    let newState = this.state;
    newState.title = 'button';
    newState.example = <button>Button</button>;
    newState.body = 'button';
    newState.codeSnippet = 'button';
    this.setState({
      title: newState.title,
      example: newState.example,
      body: newState.body,
      codeSnippet: newState.codeSnippet
    });
  }


  render(){
    return(
      <div style={styles.wrapperStyle}>
        <Sidebar onSwitchToButtonPage={this.handleSwitchToButtonPage}/>
        <Item
          title={this.state.title}
          example={this.state.example}
          body={this.state.body}
          codeSnippet={this.state.codeSnippet}/>
      </div>
    );
  }
}

export default Documentation;
