import React from 'react';

import Css from './ServiceButton.css';

const ServiceButton = (props) => {

        let Classes = `${Css.Button}`
        if (props.active === true) {
            Classes = `${Css.Button} ${Css.Active}`
        }

        return <button onClick={props.serviceToggler} type="button" className={Classes}>{props.children}</button>
}

export default ServiceButton;