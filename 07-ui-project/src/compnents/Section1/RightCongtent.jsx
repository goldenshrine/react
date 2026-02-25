import React from "react";
import RightCard from "./RightCard";

const RightCongtent = (props) => {
  return (
    <div className=" h-full  flex overflow-x-auto flex-nowrap gap-10 w-2/3 p-6 ">
      {/* remove this overflow-x-auto if dont want the scrollbar  */}
      {/* mb-19 use in upper section*/}
      {props.users.map(function (elem, idx) {
        return <RightCard key={idx} id={idx} img={elem.img} tag={elem.tag} />;
      })}
    </div>
  );
};

export default RightCongtent;
