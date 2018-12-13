import React, { Component } from 'react';

import Navigation from '../../components/UI/Navigation/Navigation';
import Footer from '../../components/Footer/Footer';


class Layout extends Component {
    state = {
        modalOpen: false 
    }

    modalTogglerHandler = () => {
        this.setState((prevState) => {
            return {modalOpen: !prevState.modalOpen}
        })
    }

    render(){
        return (
            <React.Fragment>
                <Navigation modalState={this.state.modalOpen} togglerFunc={() => this.modalTogglerHandler()}  />
                {this.props.children}
                <Footer />
            </React.Fragment>
        )
    }
}

export default Layout;