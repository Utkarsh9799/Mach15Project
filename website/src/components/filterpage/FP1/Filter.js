import React from 'react';

const inputStyle = {
  width: '13px',
  height: '13px',
  padding: '0',
  margin: '0',
  verticalAlign: 'bottom',
  position: 'relative',
  top: '-1px',
  backgroundColor: '#fafafa',
  overflow: 'hidden',
  border: '3px solid #cacece',
  boxShadow: '0 1px 2px rgba(0,0,0,0.05), inset 0px -15px 10px -12px rgba(0,0,0,0.05)'
}

const labelStyle = {
    display: 'block',
    paddingLeft: '15px',
    textIndent: '-15px',
    fontSize: '14px',
    width: 'calc(100%/3)'
}

function Filter() {
    return(
        <div className="Filter">
            <div>
                <h4 style={{fontSize: '18px',textAlign: 'center'}}>Search music according to your wish</h4>
                <br />
                <select class="browser-default custom-select">
                    <option disabled selected>Country</option>
                    <option value="1">India</option>
                    <option value="2">USA</option>
                    <option value="3">UK</option>
                </select>
                <br /><br />     
                <p><i className="fa fa-tag"></i> Price Range</p>
                <input type="range" min="100" max="1000"></input>
                <br /><br />
                <h5 style={{fontSize: '20px'}}>Genre</h5>
                <br />
                <div className="row">
                    <label style={labelStyle}><input type="checkbox" style={inputStyle}/>  Rock</label>
                    <label style={labelStyle}><input type="checkbox" style={inputStyle}/>  Country</label>
                    <label style={labelStyle}><input type="checkbox" style={inputStyle}/>  Rock</label>
                </div>
                <div className="row">
                    <label style={labelStyle}><input type="checkbox" style={inputStyle}/>  Metal</label>
                    <label style={labelStyle}><input type="checkbox" style={inputStyle}/>  Blues</label>
                    <label style={labelStyle}><input type="checkbox" style={inputStyle}/>  Metal</label>
                </div>
                <div className="row">
                    <label style={labelStyle}><input type="checkbox" style={inputStyle}/>  Sufi</label>
                    <label style={labelStyle}><input type="checkbox" style={inputStyle}/>  EDM</label>
                    <label style={labelStyle}><input type="checkbox" style={inputStyle}/>  Sufi</label>
                </div>
                <div className="row">
                    <label style={labelStyle}><input type="checkbox" style={inputStyle}/>  Jazz</label>
                    <label style={labelStyle}><input type="checkbox" style={inputStyle}/>  Classic</label>
                    <label style={labelStyle}><input type="checkbox" style={inputStyle}/>  Jazz</label>
                </div>
                <h5 style={{color: '#1799fc',fontSize: '16px'}}><b>Show More</b></h5>
            </div>
        </div>
    );
}

export default Filter;