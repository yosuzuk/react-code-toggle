# react-code-toggle

A react component that renders its children with JSX and HTML code blocks that can be toggled.

## Usage

For living content:

```javascript
    <CodeToggle>
        <YourComponent someProp="hi" doIt={this.doesSomething()} />
        <AnotherComponent>
            <WhatEverYouLike />
        </AnotherComponent>
    </CodeToggle>
```

String overwrites:

```javascript
    <CodeToggle
        jsxCode={'<BeautifulButton>Hi</BeautifulButton>'}
        htmlCode={'<button class="beautiful-button">Hi<button>'}
    >
        <UglyButton>Hi<UglyButton>
    </CodeToggle>
```

### License

MIT. Copyright (c) 2016 Yosuke Suzuki.
