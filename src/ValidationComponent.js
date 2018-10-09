import React from 'react'

const validationComponent = (props) => {
    let output = null;
    if( props.textLength < 5 ){
        output = (
            <p>Text too short</p>
        )
    }else{
        output = (
            <p >Text long enough</p>
        )
    }
    return(output);
}

export default validationComponent;