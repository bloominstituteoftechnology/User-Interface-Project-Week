import React from 'react';
import Aox from '../../hoc/Aox';

const layout = (props) => (
  <Aox>
    <main className="container">
      {props.children}
    </main>
  </Aox>
);

export default layout;