var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IntroSection = function (_React$Component) {
  _inherits(IntroSection, _React$Component);

  function IntroSection(props) {
    _classCallCheck(this, IntroSection);

    return _possibleConstructorReturn(this, (IntroSection.__proto__ || Object.getPrototypeOf(IntroSection)).call(this, props));
  }

  _createClass(IntroSection, [{
    key: "render",
    value: function render() {

      return this.props.data.map(function (item) {
        return React.createElement(
          "section",
          { key: item.name, className: "intro " + item.style },
          React.createElement(
            "div",
            { className: "intro-text" },
            React.createElement(
              "h2",
              null,
              item.name
            ),
            React.createElement(
              "p",
              null,
              item.content
            ),
            React.createElement(
              "div",
              { className: "btn" },
              "Learn More"
            )
          ),
          React.createElement(
            "div",
            { className: "intro-img" },
            React.createElement("img", { className: "desktop", src: item.desktopImgSrc, alt: "" }),
            React.createElement("img", { className: "mobile", src: item.mobileImgSrc, alt: "" })
          )
        );
      });
    }
  }]);

  return IntroSection;
}(React.Component);

var App = function (_React$Component2) {
  _inherits(App, _React$Component2);

  function App(props) {
    _classCallCheck(this, App);

    var _this2 = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this2.state = [{
      name: 'Smith & Jones Architects',
      content: 'Et sed autem causae appareat, tempor abhorreant te mei, facer facilisis sit ea. Eu timeam vidisse consectetuer sed. Duo etiam laboramus dissentiet in, nec no errem',
      desktopImgSrc: 'img/home/home-img-1.png',
      mobileImgSrc: 'img/home/home-mobile-img-1.png',
      style: null
    }, {
      name: 'Futuristic Designs',
      content: 'Et sed autem causae appareat, tempor abhorreant te mei, facer facilisis sit ea. Eu timeam vidisse consectetuer sed. Duo etiam laboramus dissentiet in, nec no errem',
      desktopImgSrc: 'img/home/home-img-2.png',
      mobileImgSrc: 'img/home/home-mobile-img-2.png',
      style: 'designs'
    }];

    return _this2;
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      return React.createElement(IntroSection, { data: this.state });
    }
  }]);

  return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('react'));