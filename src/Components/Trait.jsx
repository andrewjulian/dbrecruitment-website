import React from "react";

const Trait = ({ trait }) => {
  return (
    <div className="m-5 flex items-center justify-center bg-white">
      <div className="group flex h-[300px] w-[280px] items-center justify-center">
        <div className="relative h-full w-full rounded-xl border-2 border-[#36b6ff] shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
          <div className="absolute inset-0 flex items-center justify-center text-xl">
            {trait.title}
          </div>
          <div className="absolute inset-0 flex h-full w-full items-center justify-center rounded-xl bg-slate-100 px-12 text-center text-black [backface-visibility:hidden] [transform:rotateY(180deg)]">
            <div>
              <p className="text-sm  text-neutral-800">{trait.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trait;
