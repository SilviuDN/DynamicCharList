import React from 'react';

const charComponent = (props) => {
    let output = null;

    const style = {
        display: 'inline-block',
        padding: '16px',
        textAlign: 'center',
        margin: '16px 8px',
        border: '1px solid black',
    };


    output = (
        <li style = {style}  onClick={props.click}>
            {props.litera}
        </li>
    );
    console.log(output);

    return( <ul>{output}</ul>);
}

export default charComponent;