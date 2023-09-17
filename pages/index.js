import { useFormContext } from "@/store/FormContext";

import Layout from "@/components/Layout";
import FormHeader from "@/components/FormHeader";
import Form from "@/components/Form";

export default function Home() {
  const { activeStep, steps } = useFormContext();

  return (
    <Layout>
      <div
        className={` -top-20 z-50 bg-white w-[90%] rounded-lg absolute px-6 md:px-0 py-8 md:static  md:h-full`}>
        {activeStep <= steps.length ? (
          steps.map((step, index) => {
            if (step.step === activeStep) {
              return (
                <FormHeader
                  key={step.step}
                  title={step.header.title}
                  subtitle={step.header.subtitle}
                />
              );
            } else {
              return null; // or any other JSX if you want to skip rendering
            }
          })
        ) : (
          <></>
        )}
        <Form />
      </div>
    </Layout>
  );
}
