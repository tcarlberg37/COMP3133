import React from 'react';
import Greeter from './Greeter';
import LikeButton from './LikeButton';

const Display = () => {
    var likeButtons = [];
    for (var i = 0; i<10; i++) {
        likeButtons.push(<LikeButton />);
    }
    return ( 
        <div>
            <Greeter/>
            <div>
                {likeButtons}
            </div>
        </div>
    );
}
 
export default Display;