import React from "react";

function App() {
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("form submitted");
  };
  return (
    <div className=" h-screen lg:flex bg-black text-white ">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex gap-4 lg:w-1/2 flex-col items-start p-10"
      >
        <h1 className="text-4xl font-bold">Add Notes</h1>

        <input
          type="text"
          placeholder="Enter Notes Heading"
          className="px-5 py-2 font-medium w-full border-2 outline-none text-gray-200 rounded"
        />

        <textarea
          type="text"
          placeholder="Write Details"
          className="px-5 py-2 h-35 w-full font-medium border-2 outline-none  text-gray-200 rounded"
        />
        <button className="bg-white w-full font-medium text-black px-5 py-2  outline-none border-2 rounded">
          Add Notes
        </button>
      </form>

      <div className="lg:w-1/2 lg:border-l-2 p-10">
        <h1 className="text-4xl font-bold">Recent Notes</h1>
        <div className="flex flex-wrap gap-5 mt-5 h-full h-full overflow-auto">
          <div className="h-52 w-40  bg-white rounded-2xl"></div>
          <div className="h-52 w-40  bg-white rounded-2xl"></div>
          <div className="h-52 w-40  bg-white rounded-2xl"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
