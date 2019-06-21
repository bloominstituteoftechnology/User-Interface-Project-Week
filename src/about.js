class TeamMember extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className='team-members'>
        {this.props.data.map(item =>
            <div key={item.name} className='team-member'>
              <div className='team-member-card'>
                <h3>{item.name}</h3>
                <img src={item.imageSrc}></img>
              </div>
              <p>{item.bio}</p>
            </div>
          )}
      </section>
    )
  };
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      teamMembers: [
        {
          name: 'Laura',
          bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum possimus ut assumenda quis! Cumque possimus maxime quae velit minima magni. Dolorem eaque dolores qui odit eveniet autem dolorum natus accusantium ratione magni, officia aliquid incidunt aperiam facilis fugit enim quo amet nobis nostrum suscipit, sint excepturi? Quod nemo ipsa expedita!',
          imageSrc: 'img/about/team1.jpg',
          style: 'right',
        },
        {
          name: 'Dave',
          bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum possimus ut assumenda quis! Cumque possimus maxime quae velit minima magni. Dolorem eaque dolores qui odit eveniet autem dolorum natus accusantium ratione magni, officia aliquid incidunt aperiam facilis fugit enim quo amet nobis nostrum suscipit, sint excepturi? Quod nemo ipsa expedita!',
          imageSrc: 'img/about/team2.jpg',
          style: 'left',
        },
        {
          name: 'Emma',
          bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum possimus ut assumenda quis! Cumque possimus maxime quae velit minima magni. Dolorem eaque dolores qui odit eveniet autem dolorum natus accusantium ratione magni, officia aliquid incidunt aperiam facilis fugit enim quo amet nobis nostrum suscipit, sint excepturi? Quod nemo ipsa expedita! ',
          imageSrc: 'img/about/team3.jpg',
          style: 'right',
        },
        {
          name: 'Megan',
          bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum possimus ut assumenda quis! Cumque possimus maxime quae velit minima magni. Dolorem eaque dolores qui odit eveniet autem dolorum natus accusantium ratione magni, officia aliquid incidunt aperiam facilis fugit enim quo amet nobis nostrum suscipit, sint excepturi? Quod nemo ipsa expedita!',
          imageSrc: 'img/about/team4.jpg',
          style: 'left',
        },
      ]
    }
  };

  render() {
    return (
      <div>
        <TeamMember data={this.state.teamMembers}/>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('react')
)