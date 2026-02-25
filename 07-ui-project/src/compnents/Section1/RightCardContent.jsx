import React from "react";
import { ArrowRight } from "lucide-react";

const RightCardContent = (props) => {
  return (
    <div>
      <div className="absolute top-0 left-0 h-full w-full p-10 flex flex-col justify-between">
        <h2 className="bg-white rounded-full text-xl font-semibold flex justify-center items-center h-10 w-10">
          {props.id + 1}
        </h2>
        <div>
          <p className="text-xl leading-relaxed text-white mb-11 leading-normal">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil
            tenetur est molestias sunt natu.
          </p>
          <div className="flex items-center justify-between ">
            <button className="bg-blue-600 text-white font-medium px-8 py-2 rounded-full">
              {props.tag}
            </button>
            <button className="bg-blue-600 text-white font-medium px-3 py-3 rounded-full">
              <ArrowRight size={22} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightCardContent;
