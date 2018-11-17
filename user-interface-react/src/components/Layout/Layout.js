import React from 'react';
import Aox from '../../hoc/Aox';
import Banner from './../Banner/Banner';
import './Layout.css';

const layout = (props) => (
  <Aox>
    <main className="container">
      {props.children}
    </main>
    <Banner />
  </Aox>
);

export default layout;