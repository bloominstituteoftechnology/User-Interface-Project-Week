import React from 'react';
import image1 from './img/about/staff1.jpg';
import image2 from './img/about/staff2.jpg';
import image3 from './img/about/staff3.jpg';
import image4 from './img/about/staff4.jpg';

const staff = props => {
  let currImg;
  let currClass;

  switch(props.id) {
      case 1:
        currImg = image1;
        currClass = "staff__memberBio";
        break;

      case 2:
        currImg = image2;
        currClass = "staff__memberBio reversed-bio";
        break;

      case 3:
        currImg = image3;
        currClass = "staff__memberBio";
        break;

      case 4:
        currImg = image4;
        currClass = "staff__memberBio reversed-bio";
        break;

      default:
        currImg = image1;
        currClass = "staff__memberBio";
        break;
  }

  return(
    <section className="staff" data-aos="slide-up" data-aos-duration="1500">
     <div className={currClass}>
       <img src={currImg} alt="bio pic" />
       <p>{props.text}</p>
     </div>
     <div className="staff__title">
       <h2>{props.title}</h2>
     </div>
   </section>
  );
}

export default staff;
