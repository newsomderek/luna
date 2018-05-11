import React, { Component } from 'react';

import history from '../Auth/history';

class App extends Component {

    constructor(props) {
        super(props);
        
        // redirect to login if not logged in and not on the login page
        if(!this.props.auth.isAuthenticated() && 
                this.props.location.pathname !== '/login' && 
                this.props.location.pathname !== '/callback'
        ) {
            history.replace('/login');   
        }
    }
    

    render() {
        return (
            <div className="App">
            {
                this.props.auth.isAuthenticated() && (
                    <div>APP</div>
                )
            }
            </div>
        );
    }
}

export default App;
