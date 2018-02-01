import React from 'react';
import Sidebar from './Sidebar';
import Item from './Item';
import {defaultState} from '../defaultState';
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
      title: '',
      example: '',
      body: '',
      codeSnippet: '',
      title2: '',
      example2: '',
      body2: '',
      codeSnippet2: '',
      id: 1
    };
    this.pageSwitch = this.pageSwitch.bind(this);
    this.handleSwitchToInstallPage = this.handleSwitchToInstallPage.bind(this);
    this.handleSwitchToAnimationsPage = this.handleSwitchToAnimationsPage.bind(this);
    this.handleSwitchToButtonPage = this.handleSwitchToButtonPage.bind(this);
    this.handleSwitchToCardPage = this.handleSwitchToCardPage.bind(this);
    this.handleSwitchToColorsPage = this.handleSwitchToColorsPage.bind(this);
    this.handleSwitchToFormsPage = this.handleSwitchToFormsPage.bind(this);
    this.handleSwitchToGridPage = this.handleSwitchToGridPage.bind(this);
    this.handleSwitchToNavPage = this.handleSwitchToNavPage.bind(this);
    this.handleSwitchToSidebarPage = this.handleSwitchToSidebarPage.bind(this);
  }

  pageSwitch(){
    for (let i = 0; i < defaultState.documentationElements.length; i++) {
      let newPage = defaultState.documentationElements[i];
      if (this.state.id === newPage.id) {
        this.setState({
          title: newPage.title,
          body: newPage.body,
          title2: newPage.title2,
          body2: newPage.body2,
        });
        console.log('pageswitch');
      }
    }
  }

  handleSwitchToInstallPage(){
    console.log('firstfunction');
    this.setState({
      example: '',
      codeSnippet: <InstallCode />,
      example2: '',
      codeSnippet2: '',
      id: 1
    });
    this.pageSwitch();
  }

  handleSwitchToAnimationsPage(){
    this.setState({
      example: <Button />,
      codeSnippet: '',
      example2: '',
      codeSnippet2: '',
      id: 2
    });
    this.pageSwitch();
  }

  handleSwitchToButtonPage(){
    this.setState({
      example: <Button />,
      codeSnippet: <ButtonCode />,
      example2: <Button2 />,
      codeSnippet2: <Button2Code />,
      id: 3
    });
    this.pageSwitch();
  }

  handleSwitchToCardPage(){
    this.setState({
      example: <Card />,
      codeSnippet: <CardCode />,
      example2: <Card2 />,
      codeSnippet2: <Card2Code />,
      id: 4
    });
    this.pageSwitch();
  }

  handleSwitchToColorsPage(){
    this.setState({
      example: <Palette1 />,
      codeSnippet: <Palette1Code />,
      example2: '',
      codeSnippet2: '',
      id: 5
    });
    this.pageSwitch();
  }

  handleSwitchToFormsPage(){
    this.setState({
      example: <Forms />,
      codeSnippet: '',
      example2: '',
      codeSnippet2: '',
      id: 6
    });
    this.pageSwitch();
  }

  handleSwitchToGridPage(){
    this.setState({
      example: <Grid />,
      codeSnippet: <GridCode />,
      example2: '',
      codeSnippet2: '',
      id: 7
    });
    this.pageSwitch();
  }

  handleSwitchToNavPage(){
    this.setState({
      example: <Navbar />,
      codeSnippet: <NavbarCode />,
      example2: <Navbar2 />,
      codeSnippet2: <Navbar2Code />,
      id: 8
    });
    this.pageSwitch();
  }

  handleSwitchToSidebarPage(){
    this.setState({
      example: <SidebarItem />,
      codeSnippet: <SidebarCode />,
      example2: '',
      codeSnippet2: '',
    id: 9
    });
    this.pageSwitch();
  }


  render(){
    return(
      <div style={styles.wrapperStyle} className='docs-wrapper'>
        <Sidebar
          onSwitchToInstallPage={this.handleSwitchToInstallPage}
          onSwitchToAnimationsPage={this.handleSwitchToAnimationsPage}
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
