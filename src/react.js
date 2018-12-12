class IntroSection extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      this.props.data
      
      .map(item => 
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
  };
};

class RecentProject extends React.Component {
  constructor(props) {
    super(props);
  };
  render() {
    return (
      <section className='recent-projects'>
        {this.props.data
        .map(item => 
          <div className='project-item'>
            <div className={`project-header ${item.style}`}>
              <img className="desktop" src={item.desktopImgSrc}></img>
              <img className="mobile" src={item.mobileImgSrc}></img>
              <h3>{item.name}</h3>
            </div>
            <div className='project-text'>
              <p>{item.content}</p>
              <p>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.</p>
            </div>
          </div>
        )}
      </section>
    )
  }
};



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      introData: [
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
        { 
          name: 'Critical Acclaim',
          content: 'Et sed autem causae appareat, tempor abhorreant te mei, facer facilisis sit ea. Eu timeam vidisse consectetuer sed. Duo etiam laboramus dissentiet in, nec no errem',
          desktopImgSrc: 'img/home/home-img-2.png',
          mobileImgSrc: 'img/home/home-mobile-img-2.png',
          style: null,
        },
      ],
      recentProjectsData: [
        { 
          name: 'THE VILLAS',
          content: 'The Villas bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution.',
          desktopImgSrc: 'img/home/home-villas-img.png',
          mobileImgSrc: 'img/home/home-mobile-villas-img.png',
          style: 'right',
        },
        { 
          name: 'OUTSKIRTS',
          content: 'The Outskirts are amazing to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution.',
          desktopImgSrc: 'img/home/home-outskirts-img.png',
          mobileImgSrc: 'img/home/home-mobile-outskirts-img.png',
          style: 'left',
        },
        { 
          name: 'THE BLOCKS',
          content: 'The Blocks are amazing to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution.',
          desktopImgSrc: 'img/home/home-the-blocks-img.png',
          mobileImgSrc: 'img/home/home-mobile-the-blocks-img.png',
          style: 'right',
        },
      ]
    };
  };

  render() {
    return (
      <div>
        <IntroSection data={this.state.introData}/>
        <RecentProject data={this.state.recentProjectsData} />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('react')
)