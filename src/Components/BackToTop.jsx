import { Link } from "react-scroll";
import { BsArrowUpCircleFill } from "react-icons/bs";

const BackToTop = () => {
  return (
    <div>
      <Link
        to="hero"
        smooth={true}
        duration={500}
        offset={-100}
        className="fixed bottom-0 right-0 z-50 mb-4 mr-4 rounded-full text-[#36b6ff60] hover:text-[#36b6ff] "
      >
        <BsArrowUpCircleFill className="h-8 w-8" />
      </Link>
    </div>
  );
};

export default BackToTop;
