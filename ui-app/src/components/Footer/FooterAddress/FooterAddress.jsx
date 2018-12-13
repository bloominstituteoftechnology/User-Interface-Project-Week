import React from 'react';

import Css from './FooterAddress.css';

const FooterAddress = () => {
    const addresses = [
        { state: "New York", street1: "123 Lane", street2: "Suite 100", region: "Albany, NY 12345", phone: "202 555 0144" },
        { state: "Florida", street1: "Ocean Drive", street2: "Suite 201", region: "Orlando, FL 22345", phone: "502 555 0144" },
        { state: "California", street1: "Mountain Street", street2: "Suite 105", region: "San Diego, CA 22345", phone: "702 555 0144" }
    ];
    let addressArray = addresses.map((adr, index) => (
        <address key={index} className={Css.Address}>
	    	<h3>{adr.state}</h3>
	    	<p>{adr.street1}<br/>
	    	{adr.street2}<br/>
	    	{adr.region}<br/>
	    	{adr.phone}</p>
	    </address>
    ))
    
    return (
    <React.Fragment>
        {addressArray}
    </React.Fragment>
    )
};

export default FooterAddress;