import React from "react";
import { TbCircleChevronLeft, TbCircleChevronRight } from "react-icons/tb";

const reviews = [
  {
    id: 1,
    name: "John Doe",
    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    business: "Google",
  },
  {
    id: 2,
    name: "Jane Smith",
    comment:
      "Nulla facilisi. Fusce auctor felis eu diam semper, id consectetur arcu sagittis.",
    business: "Meta",
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
        <section className="bg-white dark:bg-gray-900">
          <div className="mx-auto max-w-screen-xl px-4 py-8 text-center lg:px-6 lg:py-16">
            <figure className="mx-auto max-w-screen-md">
              <svg
                className="mx-auto mb-3 h-12 text-gray-400 dark:text-gray-600"
                viewBox="0 0 24 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                  fill="currentColor"
                />
              </svg>
              <blockquote>
                <p className="text-2xl font-medium text-gray-900 dark:text-white">
                  {reviews[activeIndex].comment}
                </p>
              </blockquote>
              <figcaption className="mt-6 flex items-center justify-center space-x-3">
                <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                  <div className="pr-3 font-medium text-gray-900 dark:text-white">
                    {reviews[activeIndex].name}
                  </div>
                  <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">
                    {reviews[activeIndex].business}
                  </div>
                </div>
              </figcaption>
            </figure>
          </div>
        </section>
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
