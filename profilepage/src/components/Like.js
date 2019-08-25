import React from 'react'

const likeStyle={
    color:'#696969',
    textAlign:'right',
    borderRight: '1px solid #696969'
    
}
const followStyle={
    color:'#696969',
    textAlign: 'left'
}
export default function like() {            
    return (

        <div className='row'>
            <div className='col-md-6' style={likeStyle}>
                <h1 style={{fontSize:'1.8em'}}>140k</h1>
                <h4 style={{fontSize:'0.8em'}}>LIKES</h4>
            </div>
            <div className='col-md-6' style={followStyle}>
                <h1 style={{fontSize:'1.8em'}}>24k</h1>
                <h4 style={{fontSize:'0.8em'}}>FOLLOWERS</h4>
            </div>
        </div>
    )
}
