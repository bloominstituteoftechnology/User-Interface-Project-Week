import React from 'react';

const Input = (props) => {

    let inputContent = (
        <React.Fragment>
            <label htmlFor={props.for}>{props.label}</label>
            <input type={props.type} placeholder={props.placeholder} name={props.name} value={props.value} checked={true}/>
        </React.Fragment>
    );
    if (props.reverse === true) {
        inputContent = <React.Fragment>
            <input type={props.type} placeholder={props.placeholder} name={props.name} value={props.value} checked={true}/>
            <label htmlFor={props.for}>{props.label}</label>
        </React.Fragment>
    }

    return inputContent
}

export default Input;