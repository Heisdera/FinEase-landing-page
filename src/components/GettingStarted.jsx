import Card from "./Card";
import RegisterIcon from "../assets/register.svg";
import PaymentCardIcon from "../assets/payment-card.svg";
import SuccessIcon from "../assets/success.svg";

function GettingStarted() {
  return (
    <section
      id="about"
      className="mx-auto max-w-[1225px] space-y-10 px-7 py-10 sm:px-7"
    >
      <div className="space-y-4">
        <h2 className="text-center text-2xl font-semibold xl:text-2xl">
          How it works
        </h2>
        <p className="text-center text-sm ">
          FinEase continues to innovate and develop products that are in line
          with time to meet user needs
        </p>
      </div>

      <div className="grid gap-4 rounded-xl bg-main-color px-11 py-8 sm:grid-cols-2 sm:gap-5 sm:px-5 sm:py-5 md:px-6 md:py-8 lg:grid-cols-3">
        <Card
          imgSrc={RegisterIcon}
          alt="wallet-icon"
          title="Register"
          desc="Register yourself as a FinEase application user"
          dropShadow={false}
        />

        <Card
          imgSrc={PaymentCardIcon}
          alt="payment-card-icon"
          title="Add new card"
          desc="Create a new card for you to use anytime and anywhere"
          dropShadow={false}
        />

        <Card
          imgSrc={SuccessIcon}
          alt="success-icon"
          title="Success"
          desc="You can use FinEase for all your transactions"
          dropShadow={false}
        />
      </div>
    </section>
  );
}

export default GettingStarted;
