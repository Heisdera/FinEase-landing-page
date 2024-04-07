import { motion } from "framer-motion";
import { fadeIn } from "../utils/variants";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/ui/accordion";
import Button from "./Button";

function FAQs() {
  return (
    <section
      id="pricing"
      className="mx-auto flex max-w-[1225px] flex-col gap-10 px-4 py-9 sm:px-7"
    >
      <div className="space-y-1">
        <h2 className="text-center text-lg font-semibold xl:text-2xl">
          Frequently Asked Questions
        </h2>
        <p className="text-center text-xs ">
          Here are common frequently asked questions about FinEase
        </p>
      </div>

      <Accordion
        type="single"
        collapsible
        className="grid gap-4 sm:grid-cols-2"
      >
        <motion.div
          variants={fadeIn("appear", 0.5)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <AccordionItem value="item-1" className="border-none">
            <AccordionTrigger className="rounded-md bg-gray-100 p-3 text-left text-xs data-[state=open]:rounded-b-none data-[state=open]:border-b">
              How do I access my account when I forget my password?
            </AccordionTrigger>
            <AccordionContent className="rounded-b-md bg-gray-100 p-3">
              You can reset your password through the &quot;Forgot
              Password&quot; option on the login screen. Follow the prompts to
              reset it securely.
            </AccordionContent>
          </AccordionItem>
        </motion.div>

        <motion.div
          variants={fadeIn("appear", 0.5)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <AccordionItem value="item-2" className="border-none">
            <AccordionTrigger className="rounded-md bg-gray-100 p-3 text-left text-xs data-[state=open]:rounded-b-none data-[state=open]:border-b">
              Is FinEase security guaranteed?
            </AccordionTrigger>
            <AccordionContent className="rounded-b-md bg-gray-100 p-3">
              Yes, FinEase employs robust security measures to safeguard your
              account and personal information, including encryption and
              authentication protocols.
            </AccordionContent>
          </AccordionItem>
        </motion.div>

        <motion.div
          variants={fadeIn("appear", 0.5)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <AccordionItem value="item-3" className="border-none">
            <AccordionTrigger className="rounded-md bg-gray-100 p-3 text-left text-xs data-[state=open]:rounded-b-none data-[state=open]:border-b">
              Is FinEase available on Android?
            </AccordionTrigger>
            <AccordionContent className="rounded-b-md bg-gray-100 p-3">
              Yes, FinEase is available for download on the Google Play Store
              for Android devices and App Store for iOS devices.
            </AccordionContent>
          </AccordionItem>
        </motion.div>

        <motion.div
          variants={fadeIn("appear", 0.5)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <AccordionItem value="item-4" className="border-none">
            <AccordionTrigger className="rounded-md bg-gray-100 p-3 text-left text-xs data-[state=open]:rounded-b-none data-[state=open]:border-b">
              How do I get started with FinEase?{" "}
            </AccordionTrigger>
            <AccordionContent className="rounded-b-md bg-gray-100 p-3">
              Simply download the FinEase app from the Google Play Store, create
              an account, and follow the setup instructions to start using our
              services.
            </AccordionContent>
          </AccordionItem>
        </motion.div>

        <motion.div
          variants={fadeIn("appear", 0.5)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <AccordionItem value="item-5" className="border-none">
            <AccordionTrigger className="rounded-md bg-gray-100 p-3 text-left text-xs data-[state=open]:rounded-b-none data-[state=open]:border-b">
              How does FinEase work?{" "}
            </AccordionTrigger>
            <AccordionContent className="rounded-b-md bg-gray-100 p-3">
              FinEase allows you to conveniently manage your finances, send and
              receive money, pay bills, order food, request rides, and more, all
              from within the app.
            </AccordionContent>
          </AccordionItem>
        </motion.div>

        <motion.div
          variants={fadeIn("appear", 0.5)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <AccordionItem value="item-6" className="border-none">
            <AccordionTrigger className="rounded-md bg-gray-100 p-3 text-left text-xs data-[state=open]:rounded-b-none data-[state=open]:border-b">
              How do I protect my account?{" "}
            </AccordionTrigger>
            <AccordionContent className="rounded-b-md bg-gray-100 p-3">
              To protect your account, ensure you use a strong, unique password,
              enable two-factor authentication if available, and avoid sharing
              your login credentials with anyone.
            </AccordionContent>
          </AccordionItem>
        </motion.div>

        <motion.div
          variants={fadeIn("appear", 0.5)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <AccordionItem value="item-7" className="border-none">
            <AccordionTrigger className="rounded-md bg-gray-100 p-3 text-left text-xs data-[state=open]:rounded-b-none data-[state=open]:border-b">
              How do I connect my credit cards?{" "}
            </AccordionTrigger>
            <AccordionContent className="rounded-b-md bg-gray-100 p-3">
              You can link your credit cards to your FinEase account by
              navigating to the settings or profile section within the app and
              following the prompts to add payment methods.
            </AccordionContent>
          </AccordionItem>
        </motion.div>

        <motion.div
          variants={fadeIn("appear", 0.5)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <AccordionItem value="item-8" className="border-none">
            <AccordionTrigger className="rounded-md bg-gray-100 p-3 text-left text-xs data-[state=open]:rounded-b-none data-[state=open]:border-b">
              Can I register FinEase with my Apple ID?
            </AccordionTrigger>
            <AccordionContent className="rounded-b-md bg-gray-100 p-3">
              Yes, you can register for FinEase using your Apple ID, providing a
              seamless registration process for iOS users.
            </AccordionContent>
          </AccordionItem>
        </motion.div>
      </Accordion>

      <div className="self-center">
        <Button text="Contact us" py="2" />
      </div>
    </section>
  );
}

export default FAQs;
