import React from 'react';
import NavHome from './NavHome';
import Trust from './Trust';
function Home() {
    return(
        <div className="Home">
            <NavHome />
            <hr />
            <Trust />
        </div>
    );
}

export default Home;