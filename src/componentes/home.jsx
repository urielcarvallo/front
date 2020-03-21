import React from 'react';
import Header from './header/header'
import Body from './body';
import Footer from './footer/footer';
import Carsouls from './carousel2';
import Navbar from './navbar/navbar'


class Home extends React.Component{
    render(){
        return(
            <div>
            <Navbar/>
            <Header />
            <Body />
            <Carsouls/>
            <Footer />
            
            </div>
        )
    }
}

export default Home;
