import { motion } from "framer-motion";
import toyotaLogo from "../assets/Toyota.png";
import chaseLogo from "../assets/Chase.png";
import samsungLogo from "../assets/Samsung.png";
import tencentLogo from "../assets/Tencent.png";
import pepsiLogo from "../assets/Pepsi.png";
import hyundaiLogo from "../assets/hyundai-motor-group.png";
import verizonLogo from "../assets/verizon.png";
import { fadeIn } from "@/utils/variants";

function OurPartners() {
  return (
    <div className="bg-[#f7f7f7]">
      <div className="mx-auto max-w-[1225px] space-y-7 py-7">
        <motion.h3
          variants={fadeIn("down", 0.5)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center text-sm font-semibold sm:text-base xl:text-xl"
        >
          Trusted by over 200+ businesses worldwide!
        </motion.h3>

        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex items-center justify-around"
        >
          <img
            className="w-[55px] sm:w-[70px] lg:w-fit"
            src={toyotaLogo}
            alt="toyota-logo"
          />
          <img
            className="w-[55px] sm:w-[70px] lg:w-fit"
            src={chaseLogo}
            alt="toyota-logo"
          />
          <img
            className="w-[55px] sm:w-[70px] lg:w-fit"
            src={samsungLogo}
            alt="toyota-logo"
          />
          <img
            className="w-[55px] sm:w-[70px] lg:w-fit"
            src={tencentLogo}
            alt="toyota-logo"
          />
          <img
            className="w-[55px] sm:w-[70px] lg:w-fit"
            src={pepsiLogo}
            alt="toyota-logo"
          />
          <img
            className="hidden lg:!block"
            src={hyundaiLogo}
            alt="toyota-logo"
          />
          <img
            className="hidden lg:!block"
            src={verizonLogo}
            alt="toyota-logo"
          />
        </motion.div>
      </div>
    </div>
  );
}

export default OurPartners;
