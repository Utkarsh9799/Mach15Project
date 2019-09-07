import React from 'react';
import MultiCarouselPageT from './MultiCarouselPageT';

export default function Trust() {
    return (
        <div style={{textAlign:"center",margin:'2%',padding:'1%'}}>
            <h1 style={{fontWeight:'bolder',letterSpacing:'3px'}}>Bands Trust Us</h1>
            <h6 style={{letterSpacing:'2px'}}>"They say, The More The Merrier and I think they were right".</h6>
            <div style={{float:'right',padding:'1%'}}>
                Show All&nbsp;&nbsp;
                <img src={require('../../assets/more.png')} alt="more"
                style={{height: '20px', width: '20px'}} />
            </div>
            <div>
                <MultiCarouselPageT/>
            </div>
        </div>
    )
}

