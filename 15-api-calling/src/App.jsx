// import axios from "axios";
// const App = () => {
//   const getData = async () => {
//     const response = await axios.get(
//       "https://jsonplaceholder.typicode.com/users"
//     );
//     console.log(response.data);
//   };

//   return (
//     <div>
//       <button onClick={getData}>Get Data</button>
//     </div>
//   );
// };

// export default App;

import axios from "axios";
import { useState } from "react";
const App = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    const response = await axios.get("https://picsum.photos/v2/list"); // we used axios instead of fetch

    setData(response.data);
  };

  return (
    <div>
      <button onClick={getData}>Get Data</button>
      <div>
        {data.map(function (elem, idx) {
          return (
            <h3>
              hello{idx} {elem.author}
            </h3>
          );
        })}
      </div>
    </div>
  );
};

export default App;
