import React from 'react';
import styled from "styled-components";

const Btnstyle = styled.div`
button{
    background-color:white;
    color:#000;
    border-radius:1.5625em;
    width:30%;
    padding:1.5%;
    font-size:0.86em;
    letter-spacing:1px;
    font-weight:bolder;
    border: 1.1px solid #000000;
    &:hover {
      text-decoration:none;  
      color: white;
      background-color:#000;
}
margin:0.4em;
`
export default function Info() {
    return (
        <div className="row justify-content-center" style={{fontSize:'0.8375em',fontWeight:"bolder"}}>
            <div className="col-md-4 col-xs-12">

            </div>
            <div className='col-md-8 col-xs-12'>
            <div className='row'>
            <div className='col-md-4 col-xs-12'>
                <h1 style={{fontSize:"1.3em",fontWeight:"bolder",letterSpacing:'4px'}}><b>THE LOCAL TRAIN</b></h1>
                <p>Indie Rock, Indian Rock.
                <br/>
                NEW DELHI,INDIA
                <img src={require('../assets/icons/1350px-Flag_of_India.svg.png')} alt="Indian flag"
                style={{height: '20px', width: '30px',marginLeft:'4%'}}/></p>
            </div>
            <div className='col-md-4 col-xs-12'>
            <Btnstyle>
                <button type="button">HIRE US</button>
                <button type="button">BE A FAN</button>
                <img src={require('../assets/icons/Group 15.png')} alt="send"
                style={{height: '25px', width: '25px',margin:'0.4em'}}/>
            </Btnstyle>
            </div>
            </div>
            </div>
        </div>
    )
}

