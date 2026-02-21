import React from "react";
import Card from "./components/card";
const App = () => {
  return (
    <div className="parent">
      <Card
        user="Prince Gupta"
        age={21}
        bio="be hungry, be foolish"
        img="https://images.unsplash.com/photo-1726824766919-da693390ee0e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQ4fENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D"
      />
      <Card
        user="Monica Chauhan"
        age={21}
        bio="I am real"
        img="https://images.unsplash.com/photo-1754663186520-1e9d5bf4637e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM5fENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D"
      />
      <Card
        user="Vishesh Gupta"
        age={1}
        bio="I am hybrid"
        img=" https://images.unsplash.com/photo-1768475965443-800a23634f0c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDY0fENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D"
      />
    </div>
  );
};

export default App;
