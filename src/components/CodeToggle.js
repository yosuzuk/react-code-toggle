import React, { Component } from 'react';
import PropTypes from 'prop-types';

// for JSX output
import jsxToString from 'jsx-to-string';

// for HTML output
import { renderToStaticMarkup } from 'react-dom/server';
import pretty from 'pretty';

// for syntax highlighting
import { UnControlled as CodeMirror } from 'react-codemirror2';
import 'codemirror';
import 'codemirror/mode/jsx/jsx';
import 'codemirror/mode/htmlmixed/htmlmixed';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/monokai.css';

// own css
import '../css/code-toggle.css';

const propTypes = {
    htmlBeautifier: PropTypes.func,
    htmlCode: PropTypes.string,
    htmlOptions: PropTypes.object,
    jsxBeautifier: PropTypes.func,
    jsxCode: PropTypes.string,
    jsxOptions: PropTypes.object
};

const defaultProps = {
    htmlBeautifier: pretty,
    htmlOptions: {
        mode: 'htmlmixed',
        indentUnit: 2,
        readOnly: true,
        theme: 'monokai',
        viewportMargin: Infinity // for autoresize  
    },
    jsxBeautifier: x => x,
    jsxOptions: {
        mode: 'jsx',
        indentUnit: 2,
        readOnly: true,
        theme: 'monokai',
        viewportMargin: Infinity // for autoresize
    },
};

class CodeToggle extends Component {
    constructor(...args) {
        super(...args);

        this.state = {
            showJsx: !this.props.children && !!(this.props.jsxCode),
            showHtml: !this.props.children && !(this.props.jsxCode) && !!(this.props.htmlCode)
        }
    }
    hasToggle() {
        return !!(this.props.children || (this.props.jsxCode && this.props.htmlCode));
    }
    toggleJsx() {
        this.setState({
            showJsx: !this.state.showJsx
        });
    }
    toggleHtml() {
        this.setState({
            showHtml: !this.state.showHtml
        });
    }
    render() {
        return (
            <div className="rct-container">
                {this.renderLiveExample()}
                {this.renderJsxCode()}
                {this.renderHtmlCode()}
                {this.renderHtmlToggle()}
                {this.renderJsxToggle()}
            </div>
        );
    }
    renderLiveExample() {
        return this.props.children ? (
            <div className="rct-live-example">
                {this.props.children}
            </div>
        ) : null;
    }
    renderJsxCode() {
        return this.state.showJsx ? (
            <div className="rct-jsx-code">
                <CodeMirror
                    value={this.props.jsxBeautifier(this.props.jsxCode || this.renderChildren(jsxToString) || '{/* no code */}')}
                    options={this.props.jsxOptions}
                />
            </div>
        ) : null;
    }
    renderHtmlCode() {
        return this.state.showHtml ? (
            <div className="rct-html-code">
                <CodeMirror
                    value={this.props.htmlBeautifier(this.props.htmlCode || this.renderChildren(renderToStaticMarkup) || '<!-- no code -->')}
                    options={this.props.htmlOptions}
                />
            </div>
        ) : null;
    }
    renderChildren(renderer) {
        return this.props.children ? React.Children.map(this.props.children, child => renderer(child)).join('\n') : null;
    }
    renderJsxToggle() {
        return (this.hasToggle() && (this.props.jsxCode || this.props.children)) ? (
            <a className={`rct-toggle-code ${this.state.showJsx ? 'open' : ''}`} onClick={this.toggleJsx.bind(this)}>
                {this.state.showJsx ? 'hide JSX' : 'show JSX'}
            </a>
        ) : null;
    }
    renderHtmlToggle() {
        return (this.hasToggle() && (this.props.htmlCode || this.props.children)) ? (
            <a className={`rct-toggle-code ${this.state.showHtml ? 'open' : ''}`} onClick={this.toggleHtml.bind(this)}>
                {this.state.showHtml ? 'hide HTML' : 'show HTML'}
            </a>
        ) : null;
    }
}

CodeToggle.propTypes = propTypes;
CodeToggle.defaultProps = defaultProps;

export default CodeToggle;
