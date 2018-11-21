import React from 'react';

import Form from './Form';
import Locations from './Locations';

const contact = props => {
  return(
    <div className="contactContainer" width="100%">
      <Form />
      <Locations />
    </div>
  );
}

export default contact;
