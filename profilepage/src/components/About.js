import React from 'react';

const styleAbout = {
    float: 'left',
    padding: '1%',
}

function About() {
    return(
        <div className="About">
            <div className="about col-md-9" style={styleAbout}>
                <h1 style={{fontSize: '22px'}}><b>ABOUT</b></h1> 
                <p>The Local Train is an Indian Hindi rock band from Delhi. Since its    
                inception in Chandigarh in 2008, the band has gone on to achieve massive 
                commerical success and has become a staple in cultural and music festivals 
                across the country. The Local Train is widely known for its emphatic lyrics - 
                which are a blend of Urdu and Hindi - and their signature lies in a raw, 
                honest sound which resonates with the youth. At a nationwide talent hunt held in 
                2015, Sennheiser (a German music equipment company) ranked The Local Train as the 
                No. 1 emerging band. Following this win, the band released their acclaimed debut 
                album "Aalas Ka Pedh" in September 2015 which consisted of 9 tracks, with Flying
                Carpet Productions. The album went on to become one of the highest selling independent
                albums of the year and also featured on the list of “Most Streamed Albums” on Apple
                Music. The album was engineered by noted recording engineer Ashish Manchanda.</p>
            </div>
        </div>
    );
}

export default About;