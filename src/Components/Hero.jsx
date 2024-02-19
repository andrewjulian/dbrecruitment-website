const Hero = () => {
  return (
    <div
      id="hero"
      className="relative z-10  bg-white p-16 text-center"
    >
      <div className="absolute left-0 top-0 z-0 h-full w-full bg-[url('/hero.jpeg')] bg-cover bg-fixed bg-no-repeat opacity-25"></div>
      <div className="flex min-h-[90%] items-center justify-center">
        <div className="mx-auto mt-5 max-w-screen-xl  px-4 py-1 text-center">
          <h1 className="mb-4 max-w-4xl text-4xl font-extrabold text-black md:text-5xl xl:text-7xl">
            Empower Your Business With Our Top Talent
          </h1>
          <p className="font-italic mx-auto mb-2 max-w-2xl text-black md:text-lg lg:mb-4 lg:text-xl">
            DB Recruitment Group is a team of skilled recruiters who excel in
            connecting exceptional talent with companies looking for top tier
            candidates.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
