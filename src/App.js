import React, { Component } from 'react';

import CodeToggle from './components/CodeToggle';

import { Panel, ButtonToolbar, Button, SplitButton, MenuItem } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
    render() {
        return (
            <CodeToggle>
                <div className="App">
                    <h2>React Code Toggle component</h2>

                    <p>Usage</p>
                    <CodeToggle jsxCode={`
<CodeToggle>
    <YourComponent someProp="hi" doIt={this.doesSomething()} />
    <AnotherComponent>
        <WhatEverYouLike />
    </AnotherComponent>
</CodeToggle>`
                    }>
                    </CodeToggle>

                    <CodeToggle>
                        <ButtonToolbar>
                            <Button>Default</Button>
                            <Button bsStyle="primary">Primary</Button>
                            <Button bsStyle="success">Success</Button>
                            <Button bsStyle="info">Info</Button>
                            <SplitButton bsStyle="default" title="Dropdown" key={0} id="split-button-basic-0">
                                <MenuItem eventKey="1">Action</MenuItem>
                                <MenuItem eventKey="2">Another action</MenuItem>
                                <MenuItem eventKey="3">Something else here</MenuItem>
                                <MenuItem divider />
                                <MenuItem eventKey="4">Separated link</MenuItem>
                            </SplitButton>
                        </ButtonToolbar>
                    </CodeToggle>

                    <CodeToggle>
                        <Panel header={(<h2>Header</h2>)}>
                            Content
                        </Panel>
                    </CodeToggle>
                </div>
                <br />
                <p>This entire page is wrapped in <code>{'<CodeToggle />'}</code>.</p>
            </CodeToggle>
        );
    }
}

export default App;
