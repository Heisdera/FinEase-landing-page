import { motion } from "framer-motion";

const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="#000"
    strokeLinecap="round"
    {...props}
  />
);

export const MenuToggle = ({ toggle, nav }) => (
  <motion.button
    initial={false}
    animate={nav ? "open" : "closed"}
    onClick={toggle}
    className="absolute right-6 top-5 z-10 flex rounded-md p-1"
  >
    <svg width="29" height="23" viewBox="0 -1 20 20">
      <Path
        variants={{
          closed: { d: "M 0 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 18 2.5" },
        }}
      />
      <Path
        d="M 0 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: "M 0 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 18 16.346" },
        }}
      />
    </svg>
  </motion.button>
);
