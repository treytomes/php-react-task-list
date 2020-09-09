import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Container } from 'semantic-ui-react';
import Header from './Header'
import TaskList from './TaskList'

class App extends Component {
    render () {
        return (
            <BrowserRouter>
                <Container text style={{ marginTop: '7em' }}>
                    <Header />
                    <Switch exact path='/' component={TaskList} />
                </Container>
            </BrowserRouter>
        )
    }
}

/*
if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
*/

ReactDOM.render(<App />, document.getElementById('app'));
