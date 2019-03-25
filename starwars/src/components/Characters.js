import React from 'react';
import Information from './Information';

const Characters = props => {
    return (
        <div className="hehe">
            {props.data.map(item => 
                <Information characterData={item} />
            )}    
        </div>
    );
};

export default Characters;