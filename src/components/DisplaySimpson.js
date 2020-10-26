import React from 'react';

function DisplaySimpson({ simpson }) {
  return (
    <div className="DisplaySimpson">
        {console.log("simpson quote ==> "+simpson.character)}
      <img
        src={simpson.image}
        alt={simpson.image}
      />
      <ul>
        <li>
          Name: {simpson.character}{' '}
        </li>
        <li>Quote: {simpson.quote}</li>
      </ul>
    </div>
  );
};

export default DisplaySimpson;