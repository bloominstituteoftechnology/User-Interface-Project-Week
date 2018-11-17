import React from 'react';
import Aox from '../../hoc/Aox';
import Header from './../Header/Header';

const layout = (props) => (
  <Aox>
    <Header />
    <main className="container">
      {props.children}
    </main>
  </Aox>
);

export default layout;