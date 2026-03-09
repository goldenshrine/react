import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [userData, setUserData] = useState([]);

  const getData = async () => {
    const response = await axios.get(
      "https://picsum.photos/v2/list?page=3&limit=30"
    );
    setUserData(response.data);
    console.log(response.data);
  };

  let printUserData = "No user available";

  if (userData.length > 0) {
    printUserData = userData.map(function (elem, idx) {
      return (
        <div key={idx}>
          <a href={elem.url}>
            <div className="h-40 w-44 rounded-xl overflow-hidden">
              <img
                className="h-full w-full object-cover"
                src={elem.download_url}
                alt=""
              />
            </div>
            <h2 className="font-bold text-lg ">{elem.author}</h2>
          </a>
        </div>
      );
    });
  }

  return (
    <div className="bg-black p-4 overflow-auto text-white h-screen">
      <button
        onClick={getData}
        className="bg-green-600 active:scale-97 mb-3 px-5 py-2 rounded text-white"
      >
        Get Data
      </button>

      <div className="flex flex-wrap gap-4">{printUserData}</div>
    </div>
  );
};

export default App;
