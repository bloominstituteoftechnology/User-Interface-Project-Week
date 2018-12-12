var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TeamMember = function (_React$Component) {
  _inherits(TeamMember, _React$Component);

  function TeamMember(props) {
    _classCallCheck(this, TeamMember);

    return _possibleConstructorReturn(this, (TeamMember.__proto__ || Object.getPrototypeOf(TeamMember)).call(this, props));
  }

  _createClass(TeamMember, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'section',
        { className: 'team-members' },
        this.props.data.map(function (item) {
          return React.createElement(
            'div',
            { key: item.name, className: 'team-member' },
            React.createElement(
              'div',
              { className: 'team-member-card' },
              React.createElement(
                'h3',
                null,
                item.name
              ),
              React.createElement('img', { src: item.imageSrc })
            ),
            React.createElement(
              'p',
              null,
              item.bio
            )
          );
        })
      );
    }
  }]);

  return TeamMember;
}(React.Component);

;

var App = function (_React$Component2) {
  _inherits(App, _React$Component2);

  function App(props) {
    _classCallCheck(this, App);

    var _this2 = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this2.state = {
      teamMembers: [{
        name: 'Laura',
        bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum possimus ut assumenda quis! Cumque possimus maxime quae velit minima magni. Dolorem eaque dolores qui odit eveniet autem dolorum natus accusantium ratione magni, officia aliquid incidunt aperiam facilis fugit enim quo amet nobis nostrum suscipit, sint excepturi? Quod nemo ipsa expedita!',
        imageSrc: 'img/about/team1.jpg',
        style: 'right'
      }, {
        name: 'Dave',
        bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum possimus ut assumenda quis! Cumque possimus maxime quae velit minima magni. Dolorem eaque dolores qui odit eveniet autem dolorum natus accusantium ratione magni, officia aliquid incidunt aperiam facilis fugit enim quo amet nobis nostrum suscipit, sint excepturi? Quod nemo ipsa expedita!',
        imageSrc: 'img/about/team2.jpg',
        style: 'left'
      }, {
        name: 'Emma',
        bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum possimus ut assumenda quis! Cumque possimus maxime quae velit minima magni. Dolorem eaque dolores qui odit eveniet autem dolorum natus accusantium ratione magni, officia aliquid incidunt aperiam facilis fugit enim quo amet nobis nostrum suscipit, sint excepturi? Quod nemo ipsa expedita! ',
        imageSrc: 'img/about/team3.jpg',
        style: 'right'
      }, {
        name: 'Megan',
        bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum possimus ut assumenda quis! Cumque possimus maxime quae velit minima magni. Dolorem eaque dolores qui odit eveniet autem dolorum natus accusantium ratione magni, officia aliquid incidunt aperiam facilis fugit enim quo amet nobis nostrum suscipit, sint excepturi? Quod nemo ipsa expedita!',
        imageSrc: 'img/about/team4.jpg',
        style: 'left'
      }]
    };
    return _this2;
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(TeamMember, { data: this.state.teamMembers })
      );
    }
  }]);

  return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('react'));