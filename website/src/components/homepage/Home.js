import React from 'react';
import NavHome from './NavHome';
import Intro from './Intro';
import Marquee from './Marquee';

function Home() {
    return(
        <div className="Home">
            <NavHome />
            {/* <Intro /> */}
            <Marquee />
        </div>
    );
}

export default Home;