import React from 'react';
import Card from './Card';
import Filter from './Filter';

const filterStyle = {
    margin: '0',
    padding: '2%',
    paddingTop: '1%',
    backgroundColor: '#fafafa'
}

function FP1() {
    return(
        <div className="FilterPage1">
            <div className="col-md-3" style={filterStyle}>
                <Filter />
            </div>
            <div className="col-md-9" style={{float: 'right'}}>
                <Card />
            </div>
        </div>
    );
}

export default FP1;