import React from "react";

const Trait = ({ trait }) => {
  return (
    <div class="m-5 flex items-center justify-center bg-slate-100">
      <div class="group flex h-[300px] w-[280px] items-center justify-center">
        <div class="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
          <div class="absolute inset-0">{trait.title}</div>
          <div class="absolute inset-0 flex h-full w-full items-center justify-center rounded-xl bg-slate-100 px-12 text-center text-black [backface-visibility:hidden] [transform:rotateY(180deg)]">
            <div>
              <p class="text-sm  text-neutral-800">{trait.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trait;
