import { motion, AnimatePresence } from "framer-motion";
import { menuSlide, pop, slide } from "../utils/variants";
import { Link } from "react-scroll";
import { navLinks } from "../data/navLinks";
import Button from "./Button";

function SideMenu({ nav, activeNav, handleActiveNav, toggleNav }) {
  return (
    <AnimatePresence>
      {nav && (
        <motion.div
          variants={menuSlide}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed right-0 top-0 h-dvh w-[55vw] bg-primary-color px-6 pt-[100px]"
        >
          <ul className="flex flex-col divide-y divide-[#e5e5e5] px-2">
            {navLinks.map(({ link, path }, i) => (
              <motion.li
                variants={slide(i)}
                key={path}
                className={`${activeNav === path && "text-main-color"} cursor-pointer py-2 text-xl hover:text-main-color`}
              >
                <Link
                  to={path}
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  className="flex"
                  onClick={() => {
                    handleActiveNav(path);
                    toggleNav();
                  }}
                >
                  {link}
                </Link>
              </motion.li>
            ))}
          </ul>

          <div className="mt-5 flex flex-col gap-4">
            <motion.div variants={pop}>
              <Button text="Login" type="border" />
            </motion.div>

            <motion.div variants={pop}>
              <Button text="Sign up" py="2" px="4" />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default SideMenu;
