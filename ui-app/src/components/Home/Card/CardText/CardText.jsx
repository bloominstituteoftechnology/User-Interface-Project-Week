import React from 'react';

import Css from './CardText.css';

const CardText = (props) => (
    <div className={Css.Col1}>
		{props.heading}
		<p>Et sed autem causae appareat, tempor abhorreant te mei, facer facilisis sit ea. Eu timeam vidisse consectetuer sed. Duo etialaboramdissentiet in, nec no errem </p>
		<button type="button" className={Css.Button}>Learn More</button>
	</div>
)

export default CardText;