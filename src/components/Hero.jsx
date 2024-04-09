import { motion } from "framer-motion";
import { fadeIn } from "../utils/variants";
import Button from "./Button";
import HeroImg1 from "../assets/hero-1.png";
import HeroImg2 from "../assets/hero-2.png";
import HeroImg3 from "../assets/hero-3.png";
import HeroImg4 from "../assets/hero-4.png";
import HeroImg5 from "../assets/hero-5.png";
import HeroImg6 from "../assets/hero-6.png";
import HeroImg7 from "../assets/hero-7.png";
import HeroImg8 from "../assets/hero-8.png";
import HeroImg9 from "../assets/hero-9.png";

function Hero() {
  return (
    <section className="px-3 sm:px-7" id="home">
      <div className="mx-auto grid max-w-[1240px] lg:h-[400px] lg:grid-cols-2">
        <div className="max-xs:py-4 flex flex-col justify-center py-3 md:py-8">
          <motion.h1
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-xs:leading-[1.4] text-center leading-[1.2] lg:text-left"
          >
            <span className="max-xs:text-[30px] block text-[37px] font-medium text-main-color md:text-3xl lg:text-4xl xl:text-[42px]">
              Intelligent Banking To
            </span>

            <span className="max-xs:text-[27px] block text-[34px] font-semibold text-black md:text-3xl lg:text-4xl xl:text-[42px]">
              Manage Your Top Up Money & Transactions.
            </span>
          </motion.h1>

          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-xs:text-xs max-xs:pt-2 max-xs:leading-normal pb-1 pt-4 text-center text-[13px] font-medium leading-tight lg:text-left xl:text-base"
          >
            <span className="block">
              We will help you manage your money and transactions easily.
            </span>

            <span>
              Follow the instructions so that you can manage your money here
            </span>
          </motion.p>

          <motion.div
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-3 self-center lg:self-start"
          >
            <Button text="Start your free trial" />
          </motion.div>
        </div>

        <div className="my-auto h-[370px]">
          <div className="relative mx-auto h-full w-1 bg-transparent">
            <motion.div
              variants={fadeIn("appear", 0.7)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-xs:w-[130px] absolute -left-5 top-28 w-[140px]"
            >
              <div className="relative">
                <img src={HeroImg1} alt="hero-person-1" />
                <img
                  src={HeroImg2}
                  className="absolute -bottom-12 max-sm:-bottom-9"
                  alt="account-balance-card"
                />
              </div>
            </motion.div>

            <motion.div
              variants={fadeIn("right", 1.2)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-xs:w-[85px] max-xs:left-[90px] absolute left-[100px] top-56 z-10 w-[100px]"
            >
              <img src={HeroImg5} alt="settings-card" />
            </motion.div>

            <motion.div
              variants={fadeIn("appear", 1.5)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-xs:w-[145px] absolute right-0 top-40 z-10 w-[170px]"
            >
              <img src={HeroImg3} alt="payment-card" />
            </motion.div>

            <motion.div
              variants={fadeIn("appear", 1.8)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-xs:w-[90px] max-xs:left-[80px] absolute left-[92px] top-14 z-10 w-[100px]"
            >
              <img src={HeroImg4} alt="monthly-expense-report" />
            </motion.div>

            <motion.div
              variants={fadeIn("appear", 2.1)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-xs:w-[97px] absolute right-6 top-14 z-10 w-[110px]"
            >
              <motion.img src={HeroImg6} alt="analytics-chart" />
            </motion.div>

            <motion.div
              variants={fadeIn("appear", 2.4)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-xs:w-[45px] max-xs:right-[125px] absolute right-36 top-24 z-10 w-[50px]"
            >
              <motion.img src={HeroImg8} alt="hero-person-3" />
            </motion.div>

            <motion.div
              variants={fadeIn("appear", 2.7)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-xs:w-[45px] absolute left-0 top-8 z-10 w-[50px]"
            >
              <motion.img src={HeroImg9} alt="hero-person-4" />
            </motion.div>

            <motion.div
              variants={fadeIn("appear", 3.0)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-xs:w-[45px] max-xs:top-[270px] max-xs:right-[105px] absolute right-28 top-[290px] z-10 w-[50px]"
            >
              <motion.img src={HeroImg7} alt="hero-person-2" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
