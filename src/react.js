class IntroSection extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      this.props.data.map(item => 
        <section key={item.name} className={`intro ${item.style}`}>
          <div className="intro-text">
          <h2>{item.name}</h2>
          <p>{item.content}</p>
          <div className="btn">Learn More</div>
          </div>
          <div className="intro-img">
            <img className="desktop" src={item.desktopImgSrc} alt=""></img>
            <img className="mobile" src={item.mobileImgSrc} alt=""></img>
          </div>
        </section>
      )
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = [
      { 
        name: 'Smith & Jones Architects',
        content: 'Et sed autem causae appareat, tempor abhorreant te mei, facer facilisis sit ea. Eu timeam vidisse consectetuer sed. Duo etiam laboramus dissentiet in, nec no errem',
        desktopImgSrc: 'img/home/home-img-1.png',
        mobileImgSrc: 'img/home/home-mobile-img-1.png',
        style: null,
      },
      { 
        name: 'Futuristic Designs',
        content: 'Et sed autem causae appareat, tempor abhorreant te mei, facer facilisis sit ea. Eu timeam vidisse consectetuer sed. Duo etiam laboramus dissentiet in, nec no errem',
        desktopImgSrc: 'img/home/home-img-2.png',
        mobileImgSrc: 'img/home/home-mobile-img-2.png',
        style: 'designs',
      },

    ]
    
  };

  render() {
    return (
      <IntroSection data={this.state}/>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('react')
)