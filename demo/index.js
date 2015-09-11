import React from 'react';
import Box from './../src/test';
import './index.scss';
import './../src/test.scss';

class App extends React.Component {

    constructor (props) {
        super(props);
    }

    render(){
        return(
            <div>
                <Box />
            </div>
        )
    }
}

React.render(
    <App />,
    document.getElementById('app')
);