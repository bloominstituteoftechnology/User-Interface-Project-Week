import React from 'react';
import Aox from '../../hoc/Aox';
import Banner from './../Banner/Banner';
import Sec1 from './../Sec1/Sec1';
import Sec2 from './../Sec2/Sec2';
import Villas from './../Villas/Villas';
import Outskirts from './../Outskirts/Outskirts';
import Blocks from './../Blocks/Blocks';
import Footer from './../Footer/Footer';
import './Layout.css';

const layout = (props) => (
  <Aox>
    <main className="container">
      {props.children}
    </main>
    <Banner />
    <Sec1 />
    <Sec2 />
    <Villas />
    <Outskirts />
    <Blocks />
    <Footer />
  </Aox>
);

export default layout;