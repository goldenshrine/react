import React from "react";
import RightCongtent from "./RightCongtent";
import LeftContent from "./LeftContent";

const Page1Content = () => {
  return (
    <div className="pb-18 pt-4 flex items-center gap-10 h-[90vh] px-14">
      {/*<--chosen different codes from lecture (pb-16 pt-6, px-18) ~ window sizing */}
      <LeftContent />
      <RightCongtent />
    </div>
  );
};

export default Page1Content;
