import React, { Component } from 'react';
import Auth from '../Auth';

class App extends Component {
    render() {
        const auth = new Auth();
        auth.login();

        return (
            <div className="App">
                App body here
            </div>
        );
    }
}

export default App;
