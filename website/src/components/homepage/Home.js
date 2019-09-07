import React from 'react';
import NavHome from './NavHome';

import Trust from './Trust';
import Intro from './Intro';
import Marquee from './Marquee';
import Upcoming from './Upcoming';
import Crew from './Crew';

function Home() {
    return(
        <div className="Home">
            <NavHome />
            <hr />
            <Trust />
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