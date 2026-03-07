import React from "react";

const App = () => {
  const getData = () => {
    console.log("data aa gya");
  };
  return (
    <div className="bg-black p-4 text-white h-screen">
      <button
        onClick={getData}
        className="bg-green-600 active:scale-97 mb-3 px-5 py-2 rounded text-white"
      >
        Get Data
      </button>
    </div>
  );
};

export default App;
