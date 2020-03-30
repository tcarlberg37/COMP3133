import React from 'react';

const Redirect = (props) => {

    const handleRedirectClick = () => {
        const { history } = props;
        if (history) { history.push("/"); }
        else { console.log('History not found in props.'); }
    }

    return (
        <div>
            <button onClick={handleRedirectClick}>Redirect</button>
        </div>
    )
}

export default Redirect