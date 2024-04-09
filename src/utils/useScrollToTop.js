import { useEffect, useState } from "react";

function useScrollToTop() {
  const [isScrolling, setisScrolling] = useState(false);

  function handleNavScroll() {
    if (window.scrollY > 15) {
      setisScrolling(true);
    } else {
      setisScrolling(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleNavScroll);

    return () => {
      window.removeEventListener("scroll", handleNavScroll);
    };
  }, []);

  return { isScrolling };
}

export default useScrollToTop;
