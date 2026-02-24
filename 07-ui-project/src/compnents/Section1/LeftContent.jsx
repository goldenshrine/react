import React from "react";
import { ArrowUpRight } from "lucide-react";
const LeftContent = () => {
  return (
    <div className="  h-full flex flex-col justify-between w-1/3 ">
      <div className="p-6">
        <h3 className="mb-7 text-5xl font-bold">
          {/* used different frm lec. (text-6xl) */}
          Prospective <br /> <span>customer</span>
          <br /> segmentation
        </h3>
        <p className="text-xl font-medium text-gray-600">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi at
          tempora rem quaerat ab vitae itaque aperiam quisquam repellendus
          totam!
        </p>
      </div>
      <div className="  ">
        <ArrowUpRight size={70} />
        {/* orig was size={90}  */}
      </div>
    </div>
  );
};

export default LeftContent;
