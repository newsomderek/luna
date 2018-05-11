import React, { Component } from 'react';
import Auth from '../Auth/Auth';

import { Button } from 'rmwc/Button';

class App extends Component {
    
    
    handleLogin = () => {
        this.props.auth.login();
    }
    
    handleLogout = () => {
        this.props.auth.logout();
    }
    
    render() {
        const { isAuthenticated } = this.props.auth;
        
        return (
            <div className="App">
            {
                !isAuthenticated() ? (
                    <Button outlined onClick={ this.handleLogin }>Login</Button>
                ) : (
                    <Button outlined onClick={ this.handleLogout }>Logout</Button>
                )
            }
            </div>
        );
    }
}

export default App;
