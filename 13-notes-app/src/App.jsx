import React, { useState } from "react";

function App() {
  const [title, setTitle] = useState("");

  const [details, setDetails] = useState("");

  const [task, setTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    const copyTask = [...task];

    copyTask.push({ title, details });

    setTask(copyTask);
    console.log(copyTask);

    setTitle("");
    setDetails("");
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

        {/* first input for heading */}
        <input
          type="text"
          placeholder="Enter Notes Heading"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          className="px-5 py-2 font-medium w-full border-2 outline-none text-gray-200 rounded"
        />

        {/* second input for Details */}
        <textarea
          type="text"
          className="px-5 w-full font-medium h-32 py-2 flex items-start flex-row border-2 outline-none  rounded "
          placeholder="Write Details here"
          value={details}
          onChange={(e) => {
            setDetails(e.target.value);
          }}
        />
        <button className="bg-white w-full active:scale-99 font-medium text-black px-5 py-2  outline-none border-2 rounded">
          Add Notes
        </button>
      </form>

      <div className="lg:w-1/2 lg:border-l-2 p-10">
        <h1 className="text-4xl font-bold">Recent Notes</h1>
        <div className="flex flex-wrap items-start justify-start gap-5 mt-6 h-[90%] overflow-auto">
          {task.map(function (elem, idx) {
            return (
              <div
                key={idx}
                className="h-52 w-40 p-4 text-black bg-white rounded-2xl"
              >
                <h3 className="leading-tight text-xl font-bold">
                  {elem.title}
                </h3>
                <p>{elem.details}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
