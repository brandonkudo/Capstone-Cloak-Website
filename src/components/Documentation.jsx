import React from 'react';
import Sidebar from './Sidebar';
import Item from './Item';
import Button from './docs/Button';
import Card from './docs/Card';

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
    this.handleSwitchToCardPage = this.handleSwitchToCardPage.bind(this);
  }

  handleSwitchToButtonPage(){
    let newState = this.state;
    newState.title = 'button';
    newState.example = <Button />;
    newState.body = `This how the default button is styled. Simply use by implementing the button HTML tag.`;
    newState.codeSnippet = `<button>Button</button>`;
    this.setState({
      title: newState.title,
      example: newState.example,
      body: newState.body,
      codeSnippet: newState.codeSnippet
    });
  }

  handleSwitchToCardPage(){
    let newState = this.state;
    newState.title = 'card';
    newState.example = <Card />;
    newState.body = `This is a card. Use the class ".card" in a parent div, and the classes ".card-head" and ".card-body" as it's child elements.`;
    newState.codeSnippet = `<div class="card">
                              <div class="card-head">
                              </div>
                              <div class="card-body">
                                <p>Card</p>
                                </div>
                              </div>`;
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
        <Sidebar
          onSwitchToButtonPage={this.handleSwitchToButtonPage}
          onSwitchToCardPage={this.handleSwitchToCardPage}/>
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
