import React from 'react';
import NavHome from './NavHome';
import Intro from './Intro';
import Marquee from './Marquee';
import Upcoming from './Upcoming';

function Home() {
    return(
        <div className="Home">
            <NavHome />
            <Intro />
            <hr />
            <Marquee /> 
            <hr />
            <Upcoming />
        </div>
    );
}

export default Home;