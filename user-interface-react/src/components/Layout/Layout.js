import React from 'react';
import Aox from '../../hoc/Aox';
import Banner from './../Banner/Banner';
import Sec1 from './../Sec1/Sec1';
import './Layout.css';

const layout = (props) => (
  <Aox>
    <main className="container">
      {props.children}
    </main>
    <Banner />
    <Sec1 />
  </Aox>
);

export default layout;