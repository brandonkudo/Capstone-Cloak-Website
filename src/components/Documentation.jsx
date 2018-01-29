import React from 'react';
import Sidebar from './Sidebar';
import Item from './Item';
import Button from './docs/Button';
import Button2 from './docs/Button2';
import Card from './docs/Card';
import Card2 from './docs/Card2';
import Forms from './docs/Forms';

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
      title: '',
      example: '',
      body: '',
      codeSnippet: '',
      title2: '',
      example2: '',
      body2: '',
      codeSnippet2: ''
    };
    this.handleSwitchToButtonPage = this.handleSwitchToButtonPage.bind(this);
    this.handleSwitchToCardPage = this.handleSwitchToCardPage.bind(this);
    this.handleSwitchToFormsPage = this.handleSwitchToFormsPage.bind(this);
  }

  handleSwitchToButtonPage(){
    let newState = this.state;
    newState.title = 'button';
    newState.example = <Button />;
    newState.body = `This is how the default button is styled. Simply use by implementing the button HTML tag.`;
    newState.codeSnippet = `<button>Button</button>`;
    newState.title2 = 'gradient button';
    newState.example2 = <Button2 />;
    newState.body2 = `This is the gradient button. Use by implementing the class ".btn-gradient".`;
    newState.codeSnippet2 = `<button class="btn-gradient">Button</button>`;
    this.setState({
      title: newState.title,
      example: newState.example,
      body: newState.body,
      codeSnippet: newState.codeSnippet,
      title2: newState.title2,
      example2: newState.example2,
      body2: newState.body2,
      codeSnippet2: newState.codeSnippet2
    });
  }

  handleSwitchToCardPage(){
    let newState = this.state;
    newState.title = 'card with image';
    newState.example = <Card />;
    newState.body = `This is a card. Use the class ".card-img" in a parent div, and the classes ".card-img-head" and ".card-img-body" as it's child elements.`;
    newState.codeSnippet = `<div class="card-img">
                              <div class="card-img-head">
                              </div>
                              <div class="card-img-body">
                                <p>Card</p>
                                </div>
                              </div>`;
    newState.title2 = 'card without image';
    newState.example2 = <Card2 />;
    newState.body2 = `This is a card. Use the class ".card" in a parent div, and the classes ".card-head" and ".card-body" as it's child elements.`;
    newState.codeSnippet2 = `<div class="card">
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
      codeSnippet: newState.codeSnippet,
      title2: newState.title2,
      example2: newState.example2,
      body2: newState.body2,
      codeSnippet2: newState.codeSnippet2
    });
  }

  handleSwitchToFormsPage(){
    let newState = this.state;
    newState.title = 'form';
    newState.example = <Forms />;
    newState.body = `We have a number of different components to customize your forms. These are the default styles for the <input>, <textarea>, <input type="radio">, and <input type="checkbox"> HTML tags.`;
    newState.codeSnippet = `<input>
                            <textarea>
                            <input type="radio">
                            <input type="checkbox">
                            `;
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
          onSwitchToCardPage={this.handleSwitchToCardPage}
          onSwitchToFormsPage={this.handleSwitchToFormsPage}/>
        <Item
          title={this.state.title}
          example={this.state.example}
          body={this.state.body}
          codeSnippet={this.state.codeSnippet}
          title2={this.state.title2}
          example2={this.state.example2}
          body2={this.state.body2}
          codeSnippet2={this.state.codeSnippet2}/>
      </div>
    );
  }
}

export default Documentation;
