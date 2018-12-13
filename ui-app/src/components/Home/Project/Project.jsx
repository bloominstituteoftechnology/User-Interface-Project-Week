import React from 'react';


import Css from './Project.css';

const Project = (props) => {

    let secondOverlayClass = Css.ImgHolderOverlaysVillas;
    if (props.overlay === "OUTSKIRTS") {
        secondOverlayClass = Css.ImgHolderOverlaysOutskirts;
    }
    if (props.overlay === "THE BLOCKS") {
        secondOverlayClass = Css.ImgHolderOverlaysBlocks;
    }

        return (
            <React.Fragment>
                <div className={Css.ImgHolder}>
			        <img className={Css.DesktopOnly} src={props.desktop} alt="villas"/>
			        <img className={Css.MobileOnly} src={props.mobile} alt="villas"/>
                    <div className={`${Css.ImgHolderOverlays} ${secondOverlayClass}`}>
                        {props.overlay}
                    </div>
			    </div>
			    <p>{props.paragraph1}</p>
			    <p>{props.paragraph2}</p>
            </React.Fragment>
        )
}

export default Project;