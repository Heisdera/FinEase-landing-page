import { motion } from "framer-motion";
import { fadeIn } from "../utils/variants";
import TwitterIcon from "../assets/twitter.svg";
import InstagramIcon from "../assets/instagram.svg";
import FacebookIcon from "../assets/facebook.svg";
import DownloadAppImg from "../assets/download-image.png";
import CopyIcon from "../assets/copy.svg";

function currentYear() {
  const year = new Date().getFullYear();

  return year;
}

function Footer() {
  const text = "FinEase".split("");
  const year = currentYear();

  return (
    <footer className="w-full bg-main-color text-white" id="contact">
      <div className="mx-auto grid max-w-[1050px] grid-cols-3 gap-5 gap-y-9 px-5 py-7 tracking-wider md:py-6 lg:grid-cols-5 lg:gap-10">
        {/* Grid 1 */}
        <div className="col-span-2 flex flex-col gap-2">
          <div>
            <div className="mb-2 flex">
              {text.map((letter, i) => (
                <motion.p
                  initial={{ opacity: 0 }}
                  viewport={{ once: true }}
                  whileInView={{ opacity: 1 }}
                  transition={{
                    duration: 0.25,
                    delay: i / 10,
                  }}
                  key={i}
                  className="text-[18px] font-semibold"
                  role="banner"
                >
                  {letter}
                </motion.p>
              ))}
            </div>

            <p className="text-xs">
              FinEase visualize and comprehend your financial data, variety of
              features that allows you to monitor and analyze your financial
              perfomance.
            </p>
          </div>

          <div className="flex flex-col gap-3 text-xs font-medium">
            <p>Follow us on:</p>

            <div className="flex gap-3">
              <motion.a
                initial={{
                  opacity: 0,
                }}
                viewport={{ once: true }}
                whileInView={{
                  opacity: 1,
                  transition: {
                    type: "tween",
                    duration: 0.6,
                    delay: 0.3,
                    ease: "linear",
                  },
                }}
                href="https://twitter.com/Heisdera_Tech"
                target="_blank"
              >
                <img src={TwitterIcon} alt="twitter-icon" />
              </motion.a>
              <motion.a
                initial={{
                  opacity: 0,
                }}
                viewport={{ once: true }}
                whileInView={{
                  opacity: 1,
                  transition: {
                    type: "tween",
                    duration: 0.6,
                    delay: 0.5,
                    ease: "linear",
                  },
                }}
                href="https://instagram.com/heisdera"
                target="_blank"
              >
                <img src={InstagramIcon} alt="instagram-icon" />
              </motion.a>
              <motion.a
                initial={{
                  opacity: 0,
                }}
                viewport={{ once: true }}
                whileInView={{
                  opacity: 1,
                  transition: {
                    type: "tween",
                    duration: 0.6,
                    delay: 0.7,
                    ease: "linear",
                  },
                }}
                href=""
              >
                <img src={FacebookIcon} alt="facebook-icon" />
              </motion.a>
            </div>

            <div className="flex items-center gap-1">
              <p className="whitespace-nowrap leading-none">Design credits:</p>
              <span>
                <motion.a
                  initial={{
                    opacity: 0,
                  }}
                  viewport={{ once: true }}
                  whileInView={{
                    opacity: 1,
                    transition: {
                      type: "tween",
                      duration: 0.6,
                      delay: 0.9,
                      ease: "linear",
                    },
                  }}
                  href="https://twitter.com/Oluwakemi_J1/status/1726903844448116785?t=BOFPSGPP0LpHsi1MmLvYLw&s=19"
                  target="_blank"
                >
                  <img src={TwitterIcon} alt="twitter-icon" />
                </motion.a>
              </span>
            </div>
          </div>
        </div>

        {/* Grid 2 */}
        <div className="lg:mx-auto">
          <h4 className="cursor-pointer pb-5 text-sm font-semibold">Pages</h4>
          <ul className="flex flex-col gap-[10px] text-xs font-medium">
            <li className="cursor-pointer">Home Page</li>
            <li className="cursor-pointer">About</li>
            <li className="cursor-pointer">Pricing</li>
            <li className="cursor-pointer">Features</li>
          </ul>
        </div>

        {/* Grid 3 */}
        <motion.div
          variants={fadeIn("left", 0.6)}
          initial="hidden"
          viewport={{ once: true }}
          whileInView="visible"
          className="col-span-2 flex flex-col gap-2 lg:col-span-1"
        >
          <h3 className="text-sm font-semibold">Download App</h3>

          <button className="">
            <img
              className="w-32"
              src={DownloadAppImg}
              alt="get FinEase app on Play Store or App Store"
            />
          </button>
        </motion.div>

        {/* Grid 4 */}
        <div className="lg:col-start-4 lg:row-start-1">
          <h4 className="cursor-pointer pb-5 text-sm font-semibold">Support</h4>
          <ul className="flex flex-col gap-[10px] text-xs font-medium">
            <li className="cursor-pointer">FAQs</li>
            <li className="cursor-pointer">Support Center</li>
            <li className="cursor-pointer">Security</li>
            <li className="cursor-pointer">Accessibility</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-[#ccc] py-2 text-center text-xs text-[#ddd]">
        <p>
          Copyright
          <img className="mx-1 inline-block w-5" src={CopyIcon} alt="&copy;" />
          {year} FinEase. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
