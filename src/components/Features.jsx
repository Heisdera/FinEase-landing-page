import { motion } from "framer-motion";
import Card from "./Card";
import WalletIcon from "../assets/arcticons_budgetbakers-wallet.svg";
import SafetyIcon from "../assets/ant-design_safety-outlined.svg";
import PaymentIcon from "../assets/arcticons_eset-payment-protection.svg";
import OurPartners from "./OurPartners";
import { fadeIn } from "@/utils/variants";

function Features() {
  return (
    <section id="features">
      <div className="mx-auto max-w-[1225px] px-7 py-10 sm:px-7">
        <div>
          <motion.h2
            variants={fadeIn("down", 0.8)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center text-xl font-extrabold xl:text-2xl"
          >
            <span className="text-main-color">Features</span>{" "}
            <span>our users love</span>
          </motion.h2>

          <div className="grid gap-3 pt-8 sm:grid-cols-2 lg:grid-cols-3 xl:gap-5">
            <Card
              imgSrc={WalletIcon}
              alt="wallet-icon"
              title="Easy Budgeting"
              desc="Democratize investment opportunities, allowing individuals to invest in stocks, bonds and other assests with smaller amounts of capital."
            />

            <Card
              imgSrc={SafetyIcon}
              alt="safety-icon"
              title="Safety Guaranteed"
              desc="It priotizies security and use advanced encryption techniques to protect users' financial information. Biometric authentication, two-factor authentication and other security measures add layers..."
            />

            <Card
              imgSrc={PaymentIcon}
              alt="payment-icon"
              title="All in one app"
              desc="Users can perform transactions, manage accounts and access financial information anytime, anywhere, reducing the need for physical visits to banks or financial institutions."
            />
          </div>
        </div>
      </div>

      <OurPartners />
    </section>
  );
}

export default Features;
