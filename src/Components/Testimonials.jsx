import React from "react";
import { TbCircleChevronLeft, TbCircleChevronRight } from "react-icons/tb";

const reviews = [
  {
    name: "Jennifer Gilligan",
    picture: "/jennifer.jpeg",
    comment:
      "David is a consummate professional and has been very receptive to feedback on candidates. He has provided high-quality candidates for positions we had open and had excellent follow-ups. Will definitely use David and DB Recruitment Group in the future.",
    business: "IntegraMSP",
    logo: "/integramsp.jpeg",
  },
  {
    name: "Andrew Julian",
    picture: "/andrew.jpeg",
    comment:
      "Working with David and Ben at DBRG was a great experience. They were very professional and helpful. I would highly recommend them to anyone looking for a new opportunity.",
    business: "Software Engineer",
  },
  {
    name: "Vitaly Bekkerman",
    picture: "/vitaly.jpeg",
    comment:
      "We've been working with DB Recruitment Group for several months now. They are very proactive and responsive. There is a steady flow of candidates. They communicate with us often to get updates on the openings and provide relevant candidates we could hire. They are one of the best recruiting firms we've worked with. We are looking forward to a continuing mutually beneficial relationship.",
    business: "FiveTwelve LLC",
    logo: "/512.jpeg",
  },
  {
    name: "Jolynn Pehlke",
    picture: "/jolynn.jpeg",
    comment:
      "I highly recommend DB Recruitment Group for their exceptional recruitment services. Their team demonstrated a deep understanding of our hiring needs, providing a personalized and efficient approach. The quality of candidates exceeded our expectations, showcasing they understood our needs. Clear communication and transparency throughout the process made working with them a seamless experience. DBRG has become our trusted partner for all our recruitment needs, thanks to their professionalism, dedication, and ability to consistently deliver top-notch talent.",
    business: "Advantex Consulting",
    logo: "/advantex.jpeg",
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
    <div className="relative bg-white px-10 lg:px-0">
      <div
        id="testimonials"
        className="mx-10  max-w-4xl bg-white  sm:mx-auto"
      >
        <div className=" mb-10 flex items-center justify-between md:mb-0">
          <button
            className="rounded-full bg-gray-200 p-2 hover:bg-gray-300"
            onClick={prevSlide}
          >
            <TbCircleChevronLeft className="h-5 w-5" />
          </button>
          <section className=" bg-white ">
            <div className="mx-auto max-w-screen-xl px-4  text-center lg:px-6 lg:py-16">
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
                  <p className="text-md font-medium text-gray-900  md:text-xl">
                    {reviews[activeIndex].comment}
                  </p>
                </blockquote>
                <figcaption className="mt-6 flex items-center justify-center space-x-3">
                  <div className="flex flex-col items-center divide-x-2 divide-white lg:flex-row  lg:divide-gray-500 ">
                    <div className="flex flex-row gap-2">
                      <img
                        src={reviews[activeIndex].picture}
                        className="h-10 w-10 rounded-full"
                      />
                      <div className="my-auto divide-x-2 pr-3 font-medium text-gray-900">
                        {reviews[activeIndex].name}
                      </div>
                    </div>
                    <div className="flex flex-row">
                      <div className="my-auto pl-3 text-sm font-light text-gray-500">
                        {reviews[activeIndex].business}
                      </div>
                      <div className="pl-3">
                        {reviews[activeIndex].logo && (
                          <img
                            src={reviews[activeIndex].logo}
                            className="h-10 w-10 rounded-full"
                          />
                        )}
                      </div>
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
    </div>
  );
};

export default Testimonials;
