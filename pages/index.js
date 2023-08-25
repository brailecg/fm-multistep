import { useFormContext } from "@/store/FormContext";

import Layout from "@/components/Layout";
import FormHeader from "@/components/FormHeader";
import Form from "@/components/Form";
import { ThankYouLarge, ThankYouMobile } from "@/components/svg/ThankYou";

export default function Home() {
  const { activeStep } = useFormContext();

  const formHeaderObj = {
    1: {
      title: "Personal Info",
      subtitle: "Please provide your name, email address, and phone number.",
    },
    2: {
      title: "Select your plan",
      subtitle: "You have the option of monthly or yearly billing.",
    },
    3: {
      title: "Pick add-ons",
      subtitle: "Add-ons help enhance your gaming experience.",
    },
    4: {
      title: "Finishing up",
      subtitle: "Double-check everything looks OK before confirming.",
    },
  };

  return (
    <Layout>
      <div
        className={` -top-20 z-50 bg-white w-[90%] rounded-lg absolute px-6 md:px-0 py-8 md:static  md:h-full`}>
        {activeStep <= Object.keys(formHeaderObj).length ? (
          <FormHeader
            title={formHeaderObj[activeStep].title}
            subtitle={formHeaderObj[activeStep].subtitle}
          />
        ) : (
          <div className={` h-full flex flex-col items-center justify-center`}>
            <div className={` hidden md:block`}>
              <ThankYouLarge />
            </div>
            <div className={` block md:hidden`}>
              <ThankYouMobile />
            </div>
            <p
              className={` mt-6 mb-2 text-2xl md:text-3xl text-fmblue-dark font-bold`}>
              Thank you!
            </p>
            <p className={` text-fmgrey-grey text-center`}>
              Thanks for confirming your subscription! We hope you have fun
              using our platform. If you ever need support, please feel free to
              email us at support@loremgaming.com.
            </p>
          </div>
        )}
        <Form />
      </div>
    </Layout>
  );
}
