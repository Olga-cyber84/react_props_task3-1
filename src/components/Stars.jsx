import React from 'react';
import Star from './Star';
import shortid from 'shortid';

function Stars({count}) {
    const getKeyValue = () => {
        let starsQuant = [];
        for (let i=0; i<count; i++) {
            starsQuant.push(shortid.generate());
        }
        return starsQuant;
    }
    
 
    return count < 1 || count > 5 || typeof(count) != "number" ? null : (
        <ul className="card-body-stars">
            {
                getKeyValue().map(item => <Star key={item}/>)
            }
        </ul>
    )
}

export default Stars

