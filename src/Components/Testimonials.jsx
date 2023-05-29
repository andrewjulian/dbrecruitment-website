import React from "react";
import { TbCircleChevronLeft, TbCircleChevronRight } from "react-icons/tb";

const reviews = [
  {
    id: 1,
    name: "John Doe",
    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    rating: 4.5,
  },
  {
    id: 2,
    name: "Jane Smith",
    comment:
      "Nulla facilisi. Fusce auctor felis eu diam semper, id consectetur arcu sagittis.",
    rating: 5,
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="mx-auto my-10 max-w-xl">
      <div className="mb-4 flex items-center justify-between">
        <button
          className="rounded-full bg-gray-200 p-2 hover:bg-gray-300"
          onClick={prevSlide}
        >
          <TbCircleChevronLeft className="h-5 w-5" />
        </button>
        <div className="rounded-lg bg-white p-4 shadow-md">
          <h3 className="mb-2 text-xl font-bold">
            {reviews[activeIndex].name}
          </h3>
          <p className="mb-4">{reviews[activeIndex].comment}</p>
          <div className="flex items-center">
            <span className="text-yellow-500">
              {reviews[activeIndex].rating}
            </span>
          </div>
        </div>
        <button
          className="rounded-full bg-gray-200 p-2 hover:bg-gray-300"
          onClick={nextSlide}
        >
          <TbCircleChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
