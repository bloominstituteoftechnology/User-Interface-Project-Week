import React from 'react';
import Aox from '../../hoc/Aox';
import Banner from './../Banner/Banner';
import Sec1 from './../Sec1/Sec1';
import Sec2 from './../Sec2/Sec2';
import './Layout.css';

const layout = (props) => (
  <Aox>
    <main className="container">
      {props.children}
    </main>
    <Banner />
    <Sec1 />
    <Sec2 />
  </Aox>
);

export default layout;