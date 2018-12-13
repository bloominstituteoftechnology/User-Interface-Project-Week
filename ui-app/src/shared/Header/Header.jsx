import React from 'react';

import Css from './Header.css';

const Header = (props) => (
    <header>
		<section style={{height:props.height, overflow: "hidden"}} className={Css.Header}>
            <img className={Css.ImgDesktop} src={props.src} alt={props.alt}/>
            <img className={Css.ImgMobile} src={props.srcMobile} alt={props.alt}/>
			{props.heading}
		</section>
		<p className={Css.Paragraph}>{props.paragraph}</p>
	</header>
)

export default Header;