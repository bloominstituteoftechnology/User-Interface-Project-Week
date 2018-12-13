import React from 'react';

import Css from './CardImgs.css';

const CardImgs = (props) => (
    <React.Fragment>
        <img className={Css.DesktopOnly} src={props.desktop} alt="architect tools" />
	    <img className={Css.MobileOnly} src={props.mobile} alt="architect tools" />
    </React.Fragment>
);

export default CardImgs;