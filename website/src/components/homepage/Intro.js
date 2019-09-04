import React from 'react';
import './intro.css';

function Intro() {
    return(
        <div className="Intro">
            <div className="col-md-6">
                <div class="row"> 
                    <div class="column">
                        <img src={require('../../assets/homepage/15-og.png')} alt="" 
                        style={{}}/>
                        <img src={require('../../assets/homepage/lc2.png')} alt="" 
                        style={{}}/>
                        <img src={require('../../assets/homepage/parth.png')} alt="" />
                        <img src={require('../../assets/homepage/roaring.png')} alt="" />
                        <img src={require('../../assets/homepage/maroon5.png')} alt="" />
                    </div>
                    <div class="column">
                        <img src={require('../../assets/homepage/lc1.png')} alt="" />   
                        <img src={require('../../assets/homepage/pic3.png')} alt="" />
                        <img src={require('../../assets/homepage/gustakh.png')} alt="" />
                        <img src={require('../../assets/homepage/lc3.png')} alt="" />
                    </div> 
                    <div class="column">
                        <img src={require('../../assets/pic1.jpg')} alt="" />
                        <img src={require('../../assets/homepage/raman.png')} alt="" />
                        <img src={require('../../assets/homepage/ramit.png')} alt="" />
                        <img src={require('../../assets/homepage/pic.png')} alt="" />
                    </div>
                    <div class="column">
                        <img src={require('../../assets/homepage/selena.png')} alt="" />
                        <img src={require('../../assets/homepage/sahil.png')} alt="" />
                        <img src={require('../../assets/homepage/pic2.png')} alt="" />
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                
            </div>
        </div>
    );
}

export default Intro;