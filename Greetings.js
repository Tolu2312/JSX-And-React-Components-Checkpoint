import React from 'react';
import Name from './Name';

function Greetings ({Name}) {
  return (
    <div>
      <h1 style={{fontSize: "24px"}}>Hello, {Name ? Name : 'there'}!</h1>
    </div>
  );
}

export default Greetings;
