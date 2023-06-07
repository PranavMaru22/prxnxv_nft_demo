import React from 'react'
import Navbar from './Navbar'
import Main from './Main'
import About from './About'
import Showcase from './Showcase'
import Team from './Team'
import Faq from './Faq'
import Banner from './Banner'

const Home = () => {
    return (
        <div>
            <Navbar />
            <Main />
            <About />
            <Showcase />
            <Team />
            <Faq />
            <Banner />
        </div>
    )
}

export default Home