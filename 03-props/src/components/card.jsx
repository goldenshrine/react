import React from "react";

const card = (props) => {
  console.log(props);

  return (
    <div className="card">
      <img src={props.img} alt="" />
      <h1>{props.user}</h1>
      <p>{props.bio}</p>
      <button>view profile</button>
    </div>
  );
};

export default card;

// <img
// src="https://images.unsplash.com/photo-1726824766919-da693390ee0e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQ4fENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D"
// alt=""
// />
// <h1>prince gupta</h1>
// <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
// <button>view profile</button>
