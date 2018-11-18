import React from 'react';

const tabCard = props => {
  let title = props.title;
  let text = props.text;
  let image = props.image;

  return (
    <div className={"tabNav__content tabs-item-selected"} tabdata-tab="1">
      <div className="content__text ">
        <h2>{title}</h2>
        <p>{text[0]}</p>
        <p>{text[1]}</p>
      </div>

      <img src={image} alt="Construction Plans" />
    </div>
  );
}

export default tabCard;
