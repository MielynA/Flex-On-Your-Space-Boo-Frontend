import React from 'react';

// inline styles
const container = {
    textAlign: 'center',
    padding: '100px'
}


const Welcome = () => {
    return (
    <div style={ container }>
        <h1 style={{fontSize: '76px', color: 'white'}}>Welcome to Space Boo</h1>
    </div>
    )
}

export default Welcome;