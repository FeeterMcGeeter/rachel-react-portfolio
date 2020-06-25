import React, { Component } from 'react';
import Navbar from './navbar/Navbar';
import SideDrawer from './navbar/SideDrawer';
import MenuBackdrop from './navbar/MenuBackdrop';
import Hero from './sections/hero/Hero';
import About from './sections/about/About';
import Portfolio from './sections/portfolio/Portfolio';
import Contact from './sections/contact/Contact';
import Footer from './Footer';
import '../sass/main.scss';

class App extends Component {
    state = {
        sideDrawerOpen: false
    };

    sideDrawerHandler = () => {
        this.setState(prevState => {
            return { sideDrawerOpen: !prevState.sideDrawerOpen};
        })
    };

    sideDrawerCloseHandler = () => {
        this.setState({ sideDrawerOpen: false });
    };

    render() {
        let backdrop;

        if (this.state.sideDrawerOpen) {
            backdrop = <MenuBackdrop />;
        }
        return (
            <div className='App'>
                <Navbar sideDrawerHandler={this.sideDrawerHandler} />
                <SideDrawer 
                    show={this.state.sideDrawerOpen} 
                    click={this.sideDrawerCloseHandler}
                />
                {backdrop}
                <Hero />
                <div className="container">
                    <About />
                    <Portfolio />
                    <Contact />
                </div>
                <Footer />
            </div>
        );
    }
};

export default App;