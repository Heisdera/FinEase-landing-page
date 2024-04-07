import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { MenuToggle } from "./MenuToggle";
import SideMenu from "./SideMenu";
import { Link } from "react-scroll";
import { navLinks } from "../data/navLinks";
import Button from "./Button";
import { pathVariant } from "@/utils/variants";

function Navbar() {
  const [activeNav, setActiveNav] = useState(navLinks[0].path);

  const [nav, setNav] = useState(false);
  const ref = useRef(null);

  useEffect(function () {
    function handleOutsideClick(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        setNav(false);
      }
    }

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  function handleActiveNav(nav) {
    setActiveNav(nav);
  }

  function handleToggleNav() {
    setNav((show) => !show);
  }

  return (
    <nav className="fixed left-0 right-0 top-0 z-30 mx-auto flex h-[72px] max-w-[1280px] items-center justify-between bg-white px-6 md:h-[64px]">
      <div className="flex items-center gap-2">
        <svg
          width="31"
          height="31"
          viewBox="0 0 46 31"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            variants={pathVariant(0.1)}
            initial="hidden"
            animate="visible"
            d="M12.0732 22.124H3.33749L0.000244141 30.7616H8.53966L12.0732 22.124Z"
            fill="#5140B1"
          />
          <motion.path
            variants={pathVariant(0.3)}
            initial="hidden"
            animate="visible"
            d="M12.0732 22.2223L15.6068 13.4866H32.6856L29.2012 22.2223H12.0732Z"
            fill="#4DC7EA"
          />
          <motion.path
            variants={pathVariant(0.5)}
            initial="hidden"
            animate="visible"
            d="M45.6419 0.824463H15.6067L12.1223 9.41296H42.0102L45.6419 0.824463Z"
            fill="#5140B1"
          />
        </svg>

        <p className="text-xl font-bold lg:text-[28px]" role="banner">
          Fin
          <span className="text-main-color">Ease</span>
        </p>
      </div>

      <ul className="hidden w-[40%] justify-between md:!flex lg:w-[33%]">
        {navLinks.map(({ link, path }) => (
          <Link
            key={path}
            to={path}
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-70}
            onClick={() => handleActiveNav(path)}
          >
            <button
              key={path}
              onClick={() => setActiveNav(path)}
              className={`${activeNav === path ? "text-main-color" : "text-stone-500 hover:text-main-color"} relative whitespace-nowrap py-1.5 text-sm font-semibold transition-all duration-200 lg:text-lg`}
            >
              <span>{link}</span>

              {activeNav === path && (
                <motion.div
                  layoutId="active"
                  transition={{
                    type: "spring",
                    duration: 1,
                  }}
                  className="absolute left-0 right-0 mx-auto h-1 w-[80%] bg-black"
                  style={{
                    borderRadius: 9999,
                  }}
                />
              )}
            </button>
          </Link>
        ))}
      </ul>

      <div className="hidden space-x-6 md:!flex">
        <Button text="Login" type="border" />

        <Button text="Sign up" py="1" px="4" />
      </div>

      <div className="z-50 md:hidden" ref={ref}>
        <MenuToggle toggle={handleToggleNav} nav={nav} />
        <SideMenu
          nav={nav}
          activeNav={activeNav}
          handleActiveNav={handleActiveNav}
          toggleNav={handleToggleNav}
        />
      </div>
    </nav>
  );
}

export default Navbar;
