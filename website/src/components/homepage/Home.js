import React from 'react';
import NavHome from './NavHome';
import Intro from './Intro';
import Marquee from './Marquee';
import Upcoming from './Upcoming';
import Crew from './Crew';
import Trst from './Trst';
import Artist from './Artist';
import Cart from './Cart';
import Studio from './Studio';

function Home() {
    return(
        <div className="Home">
            <NavHome />
            <hr />
            <Intro />
            <hr />
            <Trst />
            <hr />
            <Artist />
            <hr/>
            <Marquee /> 
            <hr />
            <Upcoming />
            <Studio />
            <hr/>
            <Crew />
            <hr />
            <Cart />
        </div>
    );
}

export default Home;