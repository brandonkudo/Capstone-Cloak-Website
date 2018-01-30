import React from 'react';
import Sidebar from './Sidebar';
import Item from './Item';
import Button from './docs/buttons/Button';
import ButtonCode from './docs/buttons/ButtonCode';
import Button2 from './docs/buttons/Button2';
import Button2Code from './docs/buttons/Button2Code';
import Card from './docs/cards/Card';
import CardCode from './docs/cards/CardCode';
import Card2 from './docs/cards/Card2';
import Card2Code from './docs/cards/Card2Code';
import Forms from './docs/Forms';
import Grid from './docs/grids/Grid';
import GridCode from './docs/grids/GridCode';
import Navbar from './docs/navs/Navbar';
import NavbarCode from './docs/navs/NavbarCode';
import Navbar2 from './docs/navs/Navbar2';
import Navbar2Code from './docs/navs/Navbar2Code';
import SidebarItem from './docs/sidebars/SidebarItem';

const styles = {
  wrapperStyle: {
    width: '100vw',
    display: 'flex',
    flexDirection: 'row'
  },
  codeSnippetStyle: {
    backgroundColor: '#D8D8D8',
    padding: '10px',
    marginBottom: '60px',
    border: '1px solid grey'
  },
  snippetTextStyle: {
    fontFamily: 'courier',
    color: '#3C3B3B',
    fontSize: '12px'
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
    this.handleSwitchToGridPage = this.handleSwitchToGridPage.bind(this);
    this.handleSwitchToNavPage = this.handleSwitchToNavPage.bind(this);
    this.handleSwitchToSidebarPage = this.handleSwitchToSidebarPage.bind(this);
  }

  handleSwitchToButtonPage(){
    let newState = this.state;
    newState.title = 'button';
    newState.example = <Button />;
    newState.body = 'This is how the default button is styled. Simply use by implementing the button HTML tag.';
    newState.codeSnippet = <ButtonCode />;
    newState.title2 = 'gradient button';
    newState.example2 = <Button2 />;
    newState.body2 = 'This is the gradient button. Use by implementing the class ".btn-gradient".';
    newState.codeSnippet2 = <Button2Code />;
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
    newState.body = 'This is a card. Use the class ".card-img" in a parent div, and the classes ".card-img-head" and ".card-img-body" as it\'s child elements.';
    newState.codeSnippet = <CardCode />;
    newState.title2 = 'card without image';
    newState.example2 = <Card2 />;
    newState.body2 = 'This is a card. Use the class ".card" in a parent div, and the classes ".card-head" and ".card-body" as it\'s child elements.';
    newState.codeSnippet2 = <Card2Code />;
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
    newState.body = 'We have a number of different components to customize your forms. These are the default styles for the <input>, <textarea>, <input type="radio">, and <input type="checkbox"> HTML tags.';
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

  handleSwitchToGridPage(){
    let newState = this.state;
    newState.title = 'grid';
    newState.example = <Grid />;
    newState.body = 'Cloak uses a 12 column grid system based on flexbox.  It is fully responsive and easy to implement. To use place all items you want into a parent element using the class “.row”.  You can then nest as many as 12 columns within each row; use the class “.col-“ then denote how much of the 12 column width you wish for that column to use.  All columns in a row must add up to 12.';
    newState.codeSnippet = <GridCode />;
    newState.title2 = '';
    newState.example2 = '';
    newState.body2 = '';
    newState.codeSnippet2 = '';
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

  handleSwitchToNavPage(){
    let newState = this.state;
    newState.title = 'navbar';
    newState.example = <Navbar />;
    newState.body = 'Fully responsive navbars, use the class ".nav" in a parent element, use the class ".nav-logo" to place a logo, and use the class ".nav-link" on any links.  Additionally if you want to group any links together, nest them inside of an element with the tag ".nav-group"';
    newState.codeSnippet = <NavbarCode />;
    newState.title2 = 'gradient navbar';
    newState.example2 = <Navbar2 />;
    newState.body2 = 'Navbar with a linear gradient, use the class ".nav-gradient" in a parent element, use the class ".nav-logo" to place a logo, and use the class ".nav-link" on any links.  Additionally if you want to group any links together, nest them inside of an element with the tag ".nav-group"';
    newState.codeSnippet2 = <Navbar2Code />;
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

  handleSwitchToSidebarPage(){
    let newState = this.state;
    newState.title = 'sidebar';
    newState.example = <SidebarItem />;
    newState.body = 'A sidebar with clickable links and hover styling.  Can be oriented left or right.  Use the class ".sidebar-left" to place on left, or ".sidebar-right" to place on the right.';
    newState.codeSnippet = '';
    newState.title2 = '';
    newState.example2 = '';
    newState.body2 = '';
    newState.codeSnippet2 = '';
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


  render(){
    return(
      <div style={styles.wrapperStyle}>
        <Sidebar
          onSwitchToButtonPage={this.handleSwitchToButtonPage}
          onSwitchToCardPage={this.handleSwitchToCardPage}
          onSwitchToFormsPage={this.handleSwitchToFormsPage}
          onSwitchToGridPage={this.handleSwitchToGridPage}
          onSwitchToNavPage={this.handleSwitchToNavPage}
          onSwitchToSidebarPage={this.handleSwitchToSidebarPage}/>
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
