import Layout from "@/components/Layout";
import { FormInput } from "@/components/FormInput";

export default function Home() {
  return (
    <Layout>
      <div
        className={` -top-20 z-50 bg-white w-[90%] rounded-lg absolute px-6 py-8 md:static`}>
        <h2 className={` text-fmblue-dark font-bold text-2xl mb-2`}>
          Personal info
        </h2>
        <p className={` text-fmgrey-grey`}>
          Please provide your name, email address, and phone number.
        </p>

        <div className={` flex flex-col mt-6 space-y-4`}>
          <FormInput
            error={false}
            labelFor={"name"}
            label={"Name"}
            placeholder={"e.g. Stephen King"}
          />
          <FormInput
            error={false}
            labelFor={"email"}
            label={"Email Address"}
            placeholder={"e.g. stephenking@lorem.com"}
          />
          <FormInput
            error={false}
            labelFor={"phone"}
            label={"Phone Number"}
            placeholder={"e.g. +63 987 654 3211"}
          />
        </div>
      </div>
    </Layout>
  );
}
