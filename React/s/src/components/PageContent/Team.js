import React from 'react';

import Staff from "./Staff";

const team = props => {
  const staffMembers = [
    {
      title: "Design Architect",
      text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      id: 1,
    },

    {
      title: "Site Lead",
      text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      id: 2,
    },

    {
      title: "Project Manager",
      text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      id: 3,
    },

    {
      title: "Design Architect",
      text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      id: 4,
    },
  ];

  return(
    <section className='team'>

      <h2>Our Team</h2>
      <hr />

      <Staff title={staffMembers[0].title} text={staffMembers[0].text} id={staffMembers[0].id}/>
      <Staff title={staffMembers[1].title} text={staffMembers[1].text} id={staffMembers[1].id}/>
      <Staff title={staffMembers[2].title} text={staffMembers[2].text} id={staffMembers[2].id}/>
      <Staff title={staffMembers[3].title} text={staffMembers[3].text} id={staffMembers[3].id}/>
    </section>
  );
}

export default team;
