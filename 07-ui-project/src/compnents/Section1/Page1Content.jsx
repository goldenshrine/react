import React from "react";
import RightCongtent from "./RightCongtent";
import LeftContent from "./LeftContent";

const Page1Content = () => {
  return (
    <div className="py-10 flex items-center gap-10 h-[90vh]">
      <LeftContent />
      <RightCongtent />
    </div>
  );
};

export default Page1Content;
