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

var RecentProject = function (_React$Component2) {
  _inherits(RecentProject, _React$Component2);

  function RecentProject(props) {
    _classCallCheck(this, RecentProject);

    return _possibleConstructorReturn(this, (RecentProject.__proto__ || Object.getPrototypeOf(RecentProject)).call(this, props));
  }

  _createClass(RecentProject, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "section",
        { className: "recent-projects" },
        this.props.data.map(function (item) {
          return React.createElement(
            "div",
            { key: item.name, className: "project-item" },
            React.createElement(
              "div",
              { className: "project-header " + item.style },
              React.createElement("img", { className: "desktop", src: item.desktopImgSrc }),
              React.createElement("img", { className: "mobile", src: item.mobileImgSrc }),
              React.createElement(
                "h3",
                null,
                item.name
              )
            ),
            React.createElement(
              "div",
              { className: "project-text" },
              React.createElement(
                "p",
                null,
                item.content
              ),
              React.createElement(
                "p",
                null,
                "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line."
              )
            )
          );
        })
      );
    }
  }]);

  return RecentProject;
}(React.Component);

var App = function (_React$Component3) {
  _inherits(App, _React$Component3);

  function App(props) {
    _classCallCheck(this, App);

    var _this3 = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this3.state = {
      introData: [{
        name: "Smith & Jones Architects",
        content: "Et sed autem causae appareat, tempor abhorreant te mei, facer facilisis sit ea. Eu timeam vidisse consectetuer sed. Duo etiam laboramus dissentiet in, nec no errem",
        desktopImgSrc: "img/home/home-img-1.png",
        mobileImgSrc: "img/home/home-mobile-img-1.png",
        style: null
      }, {
        name: "Futuristic Designs",
        content: "Et sed autem causae appareat, tempor abhorreant te mei, facer facilisis sit ea. Eu timeam vidisse consectetuer sed. Duo etiam laboramus dissentiet in, nec no errem",
        desktopImgSrc: "img/home/home-img-2.png",
        mobileImgSrc: "img/home/home-mobile-img-2.png",
        style: "designs"
      }, {
        name: "Critical Acclaim",
        content: "Et sed autem causae appareat, tempor abhorreant te mei, facer facilisis sit ea. Eu timeam vidisse consectetuer sed. Duo etiam laboramus dissentiet in, nec no errem",
        desktopImgSrc: "img/home/awards.jpg",
        mobileImgSrc: "img/home/awards.jpg",
        style: null
        // {
        //   name: "ASdasdd",
        //   content:
        //     "Et sed autem causae appareat, tempor abhorreant te mei, facer facilisis sit ea. Eu timeam vidisse consectetuer sed. Duo etiam laboramus dissentiet in, nec no errem",
        //   desktopImgSrc: "img/home/awards.jpg",
        //   mobileImgSrc: "img/home/awards.jpg",
        //   style: null
        // }
      }],
      recentProjectsData: [{
        name: "THE VILLAS",
        content: "The Villas bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution.",
        desktopImgSrc: "img/home/home-villas-img.png",
        mobileImgSrc: "img/home/home-mobile-villas-img.png",
        style: "right"
      }, {
        name: "OUTSKIRTS",
        content: "The Outskirts are amazing to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution.",
        desktopImgSrc: "img/home/home-outskirts-img.png",
        mobileImgSrc: "img/home/home-mobile-outskirts-img.png",
        style: "left"
      }]
    };
    return _this3;
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(IntroSection, { data: this.state.introData }),
        React.createElement(RecentProject, { data: this.state.recentProjectsData })
      );
    }
  }]);

  return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById("react"));