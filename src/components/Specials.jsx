import { motion } from "framer-motion";
import { fadeIn } from "../utils/variants";
import checkMark from "../assets/check-mark.svg";
import Button from "./Button";
import LgLogo from "../assets/LG.png";
import MetaLogo from "../assets/Meta.png";
import YouTubeLogo from "../assets/Youtube.png";
import GiantAtmCard from "../assets/giant-card.png";
import CeoAvatar from "../assets/ceo-avatar.png";

function Specials() {
  return (
    <section className="mx-auto grid max-w-[1225px] gap-10 px-4 py-10 sm:px-7 md:grid-cols-2 xl:gap-16">
      <motion.div
        variants={fadeIn("right", 0.5)}
        initial="hidden"
        viewport={{ once: true }}
        whileInView="visible"
        className="space-y-8"
      >
        <h2 className="mx-auto w-[80%] text-center text-xl font-semibold xl:text-2xl">
          Manage and Monitor Payments Conveniently Using Your Smartphone
        </h2>

        <div className="flex flex-col items-center gap-4 text-sm">
          <div className="flex items-center gap-3 self-start">
            <img src={checkMark} alt="check-mark-icon" />
            <p>
              Streamline your monthly expenses by easily paying bills on your
              smartphone.
            </p>
          </div>

          <div className="flex items-center gap-2 self-start">
            <img src={checkMark} alt="check-mark-icon" />
            <p>
              Stay in control with instant updates on your payment history and
              transaction status.
            </p>
          </div>

          <div className="flex items-center gap-2 self-start">
            <img src={checkMark} alt="check-mark-icon" />
            <p>
              Enjoy peace of mind knowing your payments are protected, all
              through a user-friendly mobile interface.
            </p>
          </div>

          <Button text="Learn More" py="2" />
        </div>
      </motion.div>

      <motion.div
        variants={fadeIn("appear", 0.2)}
        initial="hidden"
        viewport={{ once: true }}
        whileInView="visible"
        className="relative mb-[20px] h-[230px] w-[92%] rounded-2xl bg-[#eee] drop-shadow-md md:row-start-1 md:ml-1 md:h-[260px] lg:ml-6"
      >
        <div className="absolute -right-6 left-6 top-6 lg:-left-6 lg:right-6">
          <div className="flex flex-col gap-3">
            <motion.div
              initial={{
                x: "var(--fade-from)",
                opacity: 0,
              }}
              whileInView={{
                x: "var(--fade-to)",
                opacity: 1,
                transition: {
                  type: "tween",
                  duration: 0.3,
                  delay: 0.4,
                  ease: "linear",
                },
              }}
              viewport={{ once: true }}
              className="mx-auto flex w-[100%] items-center justify-between rounded-xl bg-white px-3 py-3 [--fade-from:20px] [--fade-to:0px] lg:[--fade-from:-20px]"
            >
              <div className="space-y-3">
                <img className="w-[60px]" src={LgLogo} alt="lg-logo" />
                <p className="text-xs md:text-sm">
                  TVs, Home Entertainment & Appliances
                </p>
              </div>

              <span className="font-medium">-$100.00</span>
            </motion.div>
            <motion.div
              initial={{
                x: "var(--fade-from)",
                opacity: 0,
              }}
              whileInView={{
                x: "var(--fade-to)",
                opacity: 1,
                transition: {
                  type: "tween",
                  duration: 0.3,
                  delay: 0.6,
                  ease: "linear",
                },
              }}
              viewport={{ once: true }}
              className="mx-auto flex w-[100%] items-center justify-between rounded-xl bg-white px-3 py-3 [--fade-from:20px] [--fade-to:0px] lg:[--fade-from:-20px]"
            >
              <div className="space-y-3">
                <img className="w-[75px]" src={MetaLogo} alt="meta-logo" />
                <p className="text-xs md:text-sm">Facebook Ads payment</p>
              </div>

              <span className="font-medium">-$100.00</span>
            </motion.div>
            <motion.div
              initial={{
                x: "var(--fade-from)",
                opacity: 0,
                // visibility: "hidden",
              }}
              whileInView={{
                x: "var(--fade-to)",
                opacity: 1,
                transition: {
                  type: "tween",
                  duration: 0.3,
                  delay: 0.8,
                  ease: "linear",
                },
              }}
              viewport={{ once: true }}
              className="mx-auto flex w-[100%] items-center justify-between rounded-xl bg-white px-3 py-3 [--fade-from:20px] [--fade-to:0px] lg:[--fade-from:-20px]"
            >
              <div className="space-y-3">
                <img
                  className="w-[80px]"
                  src={YouTubeLogo}
                  alt="youtube-logo"
                />
                <p className="text-xs md:text-sm">
                  Youtube monthly subscription
                </p>
              </div>

              <span className="font-medium">-$100.00</span>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={fadeIn("appear", 0.2)}
        initial="hidden"
        viewport={{ once: true }}
        whileInView="visible"
        className="mx-auto my-auto md:ml-1 lg:ml-6"
      >
        <img src={GiantAtmCard} alt="giant-atm-card" />
      </motion.div>

      <motion.div
        variants={fadeIn("left", 0.5)}
        initial="hidden"
        viewport={{ once: true }}
        whileInView="visible"
        className="space-y-3 md:row-start-2"
      >
        <h2 className="mx-auto w-[80%] text-center text-2xl font-medium lg:text-3xl">
          Stay focused on your{" "}
          <span className="font-bold">financial goals</span>
        </h2>

        <div className="flex flex-col items-center gap-6 text-sm md:items-start">
          <p className="text-center md:text-left">
            Enhance your financial habits with personalized goals that provide
            ongoing motivation. Whether your&apos;re saving for a home,
            conquering debt, or preparing for the future, we&apos;ve got you
            covered
          </p>

          <div className="flex flex-col items-center gap-4 md:flex-row">
            <img className="w-[50px]" src={CeoAvatar} alt="check-mark-icon" />

            <div className="flex flex-col items-center gap-2 md:items-start">
              <p className="w-2/3 text-center leading-tight md:text-left">
                &quot;FinEase has helped reduce our fees by over 20%&quot;
              </p>

              <span className="text-xs">Joanah Brown - CEO</span>
            </div>
          </div>

          <Button text="Learn More" py="2" />
        </div>
      </motion.div>
    </section>
  );
}

export default Specials;
