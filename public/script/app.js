'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndecisionApp = function (_React$Component) {
    _inherits(IndecisionApp, _React$Component);

    function IndecisionApp(props) {
        _classCallCheck(this, IndecisionApp);

        var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

        _this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this);
        _this.hasPick = _this.hasPick.bind(_this);
        _this.handleAddOption = _this.handleAddOption.bind(_this);
        _this.handleDeleteOption = _this.handleDeleteOption.bind(_this);
        _this.state = {
            option: props.options
        };
        return _this;
    }

    _createClass(IndecisionApp, [{
        key: 'handleDeleteOptions',
        value: function handleDeleteOptions() {

            this.setState(function () {
                return {
                    option: []
                };
            });
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var json = localStorage.getItem('options');
            var options = JSON.parse(json);

            if (options) {
                this.setState(function () {
                    return {
                        option: options
                    };
                });
            }
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState) {

            if (prevState.option.lenght !== this.state.option.length) {
                var json = JSON.stringify(this.state.option);
                localStorage.setItem('options', json);
            }
        }
    }, {
        key: 'handleDeleteOption',
        value: function handleDeleteOption(options) {

            this.setState(function (prevState) {
                return {
                    option: prevState.option.filter(function (option) {
                        return options !== option;
                    })
                };
            });
        }
    }, {
        key: 'hasPick',
        value: function hasPick() {
            var randomNumber = Math.floor(Math.random() * this.state.option.length);
            var pick = this.state.option[randomNumber];
            alert(pick);
        }
    }, {
        key: 'handleAddOption',
        value: function handleAddOption(options) {

            if (!options) {
                return "Enter the Valid Value to Add Item";
            } else if (this.state.option.indexOf(options) > -1) {
                return "Duplicate Value Detected";
            }
            this.setState(function (prevState) {

                return {
                    option: prevState.option.concat(options)
                };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var title = "Indecision App";
            var subtitle = "Put your life in the hands of Computer";
            return React.createElement(
                'div',
                null,
                React.createElement(Header, { subtitle: subtitle }),
                React.createElement(Action, { hasPick: this.hasPick,
                    hasOptions: this.state.option.length > 0 }),
                React.createElement(Options, {
                    handleDeleteOption: this.handleDeleteOption,
                    handleDeleteOptions: this.handleDeleteOptions,
                    options: this.state.option }),
                React.createElement(AddOptions, { handleAddOption: this.handleAddOption })
            );
        }
    }]);

    return IndecisionApp;
}(React.Component);

IndecisionApp.defaultProps = {

    options: []
};

var Header = function Header(props) {

    return React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            props.title
        ),
        React.createElement(
            'p',
            null,
            props.subtitle
        )
    );
};

Header.defaultProps = {
    title: 'Default Title'
};

var Action = function Action(props) {

    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            { disabled: !props.hasOptions, onClick: props.hasPick },
            'What Should I Do?'
        )
    );
};

var Options = function (_React$Component2) {
    _inherits(Options, _React$Component2);

    function Options() {
        _classCallCheck(this, Options);

        return _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).apply(this, arguments));
    }

    _createClass(Options, [{
        key: 'render',
        value: function render() {
            var _this3 = this;

            return React.createElement(
                'div',
                null,
                React.createElement(
                    'button',
                    { onClick: this.props.handleDeleteOptions },
                    'Remove All'
                ),
                this.props.options.map(function (option) {
                    return React.createElement(Option, {
                        handleDeleteOption: _this3.props.handleDeleteOption,
                        key: option, optiontitle: option
                    });
                }),
                React.createElement(Option, null)
            );
        }
    }]);

    return Options;
}(React.Component);

var Option = function (_React$Component3) {
    _inherits(Option, _React$Component3);

    function Option() {
        _classCallCheck(this, Option);

        return _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).apply(this, arguments));
    }

    _createClass(Option, [{
        key: 'render',
        value: function render() {
            var _this5 = this;

            return React.createElement(
                'div',
                null,
                this.props.optiontitle,
                React.createElement(
                    'button',
                    { onClick: function onClick(e) {
                            return _this5.props.handleDeleteOption(_this5.props.optiontitle);
                        } },
                    'remove'
                )
            );
        }
    }]);

    return Option;
}(React.Component);

var AddOptions = function (_React$Component4) {
    _inherits(AddOptions, _React$Component4);

    function AddOptions(props) {
        _classCallCheck(this, AddOptions);

        var _this6 = _possibleConstructorReturn(this, (AddOptions.__proto__ || Object.getPrototypeOf(AddOptions)).call(this, props));

        _this6.handleAddOption = _this6.handleAddOption.bind(_this6);
        _this6.state = {
            error: undefined
        };
        return _this6;
    }

    _createClass(AddOptions, [{
        key: 'handleAddOption',
        value: function handleAddOption(e) {

            e.preventDefault();

            var option = e.target.elements.option.value.trim();
            var error = this.props.handleAddOption(option);

            this.setState(function () {
                return;
                {
                    error: error;
                };
            });

            if (!error) {
                e.target.elements.option.value = '';
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                this.state.error && React.createElement(
                    'p',
                    null,
                    this.state.error
                ),
                React.createElement(
                    'form',
                    { onSubmit: this.handleAddOption },
                    React.createElement('input', { type: 'text', name: 'option' }),
                    React.createElement(
                        'button',
                        null,
                        'Submit'
                    )
                )
            );
        }
    }]);

    return AddOptions;
}(React.Component);

var User = function User(props) {

    return React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Name:',
            props.name
        ),
        React.createElement(
            'p',
            null,
            'Age:',
            props.age
        )
    );
};

ReactDOM.render(React.createElement(IndecisionApp, { options: ["PUBG", "Learning", "Valorant"] }), document.getElementById("app"));
