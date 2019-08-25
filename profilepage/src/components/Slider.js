import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
 const aniStyle={
   borderRadius: '2%',
   width:'80%',
   height:'100%',
   marginLeft:'10%',
   marginRight:'10%'
 }

const slider = ({props}) => (
  <AwesomeSlider infinte={true} style={{height:'320px',width:'100%'}}>
    <div style={aniStyle} data-src={require('../assets/icons/s1.jpg')} />
    <div style={aniStyle} data-src={require('../assets/icons/s2.jpg')} />
    <div style={aniStyle} data-src={require('../assets/icons/s3.jpg')} />
  </AwesomeSlider>
);
export default slider;