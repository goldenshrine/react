import React from "react";

const HeroText = () => {
  return (
    <div className="p-6">
      <h3 className="mb-7 text-6xl font-bold">
        {/* used different frm lec. (text-6xl) */}
        Prospective <br /> <span>customer</span>
        <br /> segmentation
      </h3>
      <p className="text-xl font-small text-gray-600">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi at
        tempora rem quaerat ab vitae itaque aperiam quisquam repellendus totam!
      </p>
    </div>
  );
};

export default HeroText;
