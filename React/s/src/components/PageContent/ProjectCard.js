import React from 'react';

const projectCard = props => {
  console.log(props);

  return(
    <section className="projects" data-aos="flip-right" data-aos-duration="1500">
			<div className="projects__title" id={props.id}>
					<div className="projects__title__name">{props.title}</div>
			</div>

			<div className="projects__description">
				<p>{props.text[0]}</p>

				<p>{props.text[1]}</p>
			</div>
		</section>
  );
}

export default projectCard;
