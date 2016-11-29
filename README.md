# react-code-toggle

A react component that renders its children with JSX and HTML code blocks that can be toggled.

[Demo](https://yosuzuk.github.io/react-code-toggle/)

## Installation

```
$ npm install react-code-toggle --save
```

## Usage

```javascript
import CodeToggle from 'react-code-toggle';
```

And simply wrap your React components in `<CodeToggle>`:

```javascript
    <CodeToggle>
        <YourComponent someProp="hi" doIt={this.doesSomething()} />
        <AnotherComponent>
            <WhatEverYouLike />
        </AnotherComponent>
    </CodeToggle>
```

It will render your components with two additional toggle buttons used to show or hide highlighted code blocks, one for JSX and another one for the resulting HTML.

You can also overwrite code outputs using props:

```javascript
    <CodeToggle
        jsxCode={'<BeautifulButton>Hi</BeautifulButton>'}
        htmlCode={'<button class="beautiful-button">Hi<button>'}
    >
        <UglyButton>Hi<UglyButton>
    </CodeToggle>
```

By default, HTML is formatted using [pretty](https://github.com/jonschlinkert/pretty). You can pass your own beautifier using props:

```javascript
    <CodeToggle
        htmlBeautifier={this.myCustomHtmlBeautifier}
        jsxBeautifier={this.myCustomJsxBeautifier}
    >
        <MyComponent />
    </CodeToggle>
```

This component uses [CodeMirror](http://codemirror.net/) to render code blocks. If you wish to change its [theme](https://codemirror.net/demo/theme.html) or [configuration](https://codemirror.net/doc/manual.html#config), use `htmlOptions` and/or `jsxOptions` props to pass CodeMirror specific options. Don't forget to include the right [CSS file](https://github.com/codemirror/CodeMirror/tree/master/theme) when changing theme. Default theme for this component is monokai.

Please note that this component is intended to be somewhat lightweight and doesn't include Babel or any other script to live-transpile JSX for your living examples, even when enabling CodeMirror's editing features. But if that's what you are looking for, check out the alternatives mentioned below.

## Alternatives

* [React Styleguidist](https://github.com/styleguidist/react-styleguidist)
* [component-playground](https://github.com/FormidableLabs/component-playground)

## Dependencies

* [react-codemirror](https://github.com/JedWatson/react-codemirror)
* [jsx-to-string](https://github.com/alansouzati/jsx-to-string)
* [pretty](https://github.com/jonschlinkert/pretty)
