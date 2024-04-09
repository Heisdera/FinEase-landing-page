import useScrollToTop from "@/utils/useScrollToTop";
import { Link } from "react-scroll";

function BackToTopButton() {
  const { isScrolling } = useScrollToTop();

  return (
    <Link
      key="home"
      to="home"
      activeClass="active"
      spy={true}
      smooth={true}
      offset={-70}
      className={`fixed bottom-5 right-4 z-20 rotate-180 cursor-pointer rounded-lg bg-main-color px-2.5 pb-2 pt-2.5 transition-all duration-300 md:px-3 md:pb-2.5 md:pt-3 ${isScrolling ? "opacity-100" : "opacity-0"}`}
    >
      <svg
        width="15"
        height="14"
        viewBox="0 0 19 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.2342 0.184814L9.10233 7.05294L15.9704 0.184814L18.0803 2.30959L9.10233 11.2875L0.12439 2.30959L2.2342 0.184814Z"
          fill="white"
        />
      </svg>
    </Link>
  );
}

export default BackToTopButton;
