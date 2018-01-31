import React from 'react';
import Sidebar from './Sidebar';
import Item from './Item';
import {InstallPage, InstallCode} from './docs/install';
import {Button, ButtonCode, Button2, Button2Code} from './docs/buttons';
import {Card, CardCode, Card2, Card2Code} from './docs/cards';
import {Palette1, Palette1Code} from './docs/colors';
import Forms from './docs/forms/Forms';
import {Grid, GridCode} from './docs/grids';
import {Navbar, NavbarCode, Navbar2, Navbar2Code} from './docs/navs';
import {SidebarItem, SidebarCode} from './docs/sidebars';

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
      title: 'how to install',
      example: <InstallPage />,
      body: <InstallCode />,
      codeSnippet: '',
      title2: '',
      example2: '',
      body2: '',
      codeSnippet2: ''
    };
    this.handleSwitchToInstallPage = this.handleSwitchToInstallPage.bind(this);
    this.handleSwitchToButtonPage = this.handleSwitchToButtonPage.bind(this);
    this.handleSwitchToCardPage = this.handleSwitchToCardPage.bind(this);
    this.handleSwitchToColorsPage = this.handleSwitchToColorsPage.bind(this);
    this.handleSwitchToFormsPage = this.handleSwitchToFormsPage.bind(this);
    this.handleSwitchToGridPage = this.handleSwitchToGridPage.bind(this);
    this.handleSwitchToNavPage = this.handleSwitchToNavPage.bind(this);
    this.handleSwitchToSidebarPage = this.handleSwitchToSidebarPage.bind(this);
  }

  handleSwitchToInstallPage(){
    let newState = this.state;
    newState.title = 'how to install';
    newState.example = <InstallPage />;
    newState.body = <InstallCode />;
    newState.codeSnippet = '';
    newState.title2 = '';
    newState.example2 = '';
    newState.body2 = '';
    newState.codeSnippet2 = '';
    this.setState({
      title: newState.title,
      example: newState.example,
      body: newState.body,
      codeSnippet: newState.codeSnippet
    });
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
    newState.body = `This is a card. Use the class ".card-img" in a parent div, and the classes ".card-img-head" and ".card-img-body" as it\'s child elements.`;
    newState.codeSnippet = <CardCode />;
    newState.title2 = 'card without image';
    newState.example2 = <Card2 />;
    newState.body2 = `This is a card. Use the class ".card" in a parent div, and the classes ".card-head" and ".card-body" as it\'s child elements.`;
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

  handleSwitchToColorsPage(){
    let newState = this.state;
    newState.title = 'Colors';
    newState.example = <Palette1 />;
    newState.body = `We have a number of different color palettes, in order to use them denote which palette and whether you want to change background color or font, then which color in the palette you'd like to use`;
    newState.codeSnippet = <Palette1Code />;
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

  handleSwitchToFormsPage(){
    let newState = this.state;
    newState.title = 'form';
    newState.example = <Forms />;
    newState.body = 'We have a number of different components to customize your forms. These are the default styles for the <input>, <textarea>, <input type="radio">, and <input type="checkbox"> HTML tags.';
    newState.codeSnippet = '';
    newState.title2 = '';
    newState.example2 = '';
    newState.body2 = '';
    newState.codeSnippet2 = '';
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
    newState.codeSnippet = <SidebarCode />;
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
      <div style={styles.wrapperStyle} className='docs-wrapper'>
        <Sidebar
          onSwitchToInstallPage={this.handleSwitchToInstallPage}
          onSwitchToButtonPage={this.handleSwitchToButtonPage}
          onSwitchToCardPage={this.handleSwitchToCardPage}
          onSwitchToColorsPage={this.handleSwitchToColorsPage}
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

        <style jsx global>{`

          @media screen and (max-width: 1025px) {
            .docs-wrapper {
              height: 575px;
            }
          }

          @media screen and (min-width: 1400px){
            .docs-wrapper {
              height: 1675px;
            }
          }
        `}</style>
      </div>
    );
  }
}

export default Documentation;
