import { motion } from "framer-motion";
import { fadeIn } from "../utils/variants";

function Card({ dropShadow = true, imgSrc, alt, title, desc }) {
  return dropShadow ? (
    <motion.div
      variants={fadeIn("up", 0.8)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="backd flex flex-col items-center justify-center gap-3 rounded-lg bg-white py-4 drop-shadow-md"
    >
      <img src={imgSrc} alt={alt} />
      <h2 className="text-base font-semibold lg:text-lg">{title}</h2>
      <p className="w-[85%] text-center text-sm leading-tight lg:text-base">
        {desc}
      </p>
    </motion.div>
  ) : (
    <motion.div
      variants={fadeIn("up", 0.5)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="backd flex flex-col items-center justify-center gap-3 rounded-lg bg-white py-6"
    >
      <img className="w-[25px] lg:w-[30px]" src={imgSrc} alt={alt} />
      <h3 className="text-lg font-semibold lg:text-xl">{title}</h3>
      <p className="w-[60%] text-center text-xs leading-tight lg:text-base">
        {desc}
      </p>
    </motion.div>
  );
}

export default Card;
