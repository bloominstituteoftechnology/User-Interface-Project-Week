import React from 'react';

import CardImgs from './CardImgs/CardImgs';
import CardText from './CardText/CardText';

import Css from './Card.css';

const Card = (props) => {

    let card = (
        <div className={Css.MainRow} style={{marginTop:"1rem"}}>
                <CardText heading={props.heading} />
                <CardImgs desktop={props.imgDesktop} mobile={props.imgMobile} />
		</div>
    );

    if (props.reverse === true)  {
        card = <div className={Css.MainRow} style={{marginTop:"9rem"}}>
                <CardImgs desktop={props.imgDesktop} mobile={props.imgMobile} />
                <CardText heading={props.heading} />
	    </div>
    }

        return (
            <div className={Css.MainRow} style={{marginTop:"9rem"}}>
                {card}
		    </div>
        )
}

export default Card;