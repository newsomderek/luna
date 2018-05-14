import React, { Component } from 'react';

import {
  TopAppBar,
  TopAppBarRow,
  TopAppBarSection,
  TopAppBarNavigationIcon,
  TopAppBarTitle
} from 'rmwc/TopAppBar';

import {
  Drawer,
  DrawerContent
} from 'rmwc/Drawer';

import {
  ListItem,
  ListItemText
} from 'rmwc/List';

class TopNavigation extends Component {

    state = {
        drawerOpen: false
    }
    
    handleLogout = () => {
        this.props.auth.logout();
    }
    
    showDrawer = () => {
        this.setState({ drawerOpen: true });
    }
    
    render() {
        return (
            
        <div>
        
            <TopAppBar>
                <TopAppBarRow>
                    <TopAppBarSection alignStart>
                        <TopAppBarNavigationIcon use="menu" onClick={ this.showDrawer } />
                        <TopAppBarTitle>Luna</TopAppBarTitle>
                    </TopAppBarSection>
                    
                    <TopAppBarSection alignEnd>
                    </TopAppBarSection>
                </TopAppBarRow>
            </TopAppBar>
            
            <Drawer temporary open={this.state.drawerOpen === undefined ? true : this.state.drawerOpen}>
                <DrawerContent>
                    <ListItem>
                        <ListItemText>Settings</ListItemText>
                    </ListItem>
                    <ListItem onClick={ this.handleLogout }>
                        <ListItemText>Logout</ListItemText>
                    </ListItem>
                </DrawerContent>
            </Drawer>

        </div>
            
        );
    }
}

export default TopNavigation;
