import React from 'react';
import NavHome from './NavHome';
import Intro from './Intro';
import Marquee from './Marquee';
import Upcoming from './Upcoming';
import Crew from './Crew';

function Home() {
    return(
        <div className="Home">
            <NavHome />
            <Intro />
            <hr />
            <Marquee /> 
            <hr />
            <Upcoming />
            <Crew />
        </div>
    );
}

export default Home;