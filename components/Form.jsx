import React, { useState } from "react";

import { useFormContext } from "@/store/FormContext";

import { FormInput } from "@/components/FormInput";
import { PlanAdvancedIcon, PlanArcadeIcon, PlanProIcon } from "./svg/PlanIcon";
import { ToggleIcon } from "./svg/ToggleIcon";
import FormCheckbox from "./FormCheckbox";

const Form = () => {
  const { activeStep, setFormAnswers, formError, formAnswers, addonsList } =
    useFormContext();

  const [checkedAddon, setCheckedAddon] = useState([]);

  const plansArray = [
    {
      id: 1,
      planIcon: <PlanArcadeIcon />,
      planName: "Arcade",
      planPriceMonthly: "$9/mo",
      planPriceYearly: "$90/yr",
      planPriceYearlyFree: "2 months free",
    },
    {
      id: 2,
      planIcon: <PlanAdvancedIcon />,
      planName: "Advanced",
      planPriceMonthly: "$12/mo",
      planPriceYearly: "$120/yr",
      planPriceYearlyFree: "2 months free",
    },
    {
      id: 3,
      planIcon: <PlanProIcon />,
      planName: "Pro",
      planPriceMonthly: "$15/mo",
      planPriceYearly: "$150/yr",
      planPriceYearlyFree: "2 months free",
    },
  ];

  const currentPlan =
    formAnswers[activeStep]?.plan !== undefined
      ? formAnswers[2].plan
      : plansArray[0]?.id;
  const planFrequency =
    formAnswers[activeStep]?.frequency != undefined
      ? formAnswers[activeStep].frequency
      : true;

  const onInputChange = (inputField, val) => {
    setFormAnswers((prev) => {
      return {
        ...prev,
        1: {
          ...prev[1],
          [inputField]: val,
        },
      };
    });
  };

  const selectPlan = (id) => {
    setFormAnswers((prev) => {
      return {
        ...prev,
        2: {
          ...prev[2],
          plan: id,
        },
      };
    });
  };

  const handleToggle = () => {
    setFormAnswers((prev) => {
      return {
        ...prev,
        2: {
          ...prev[2],
          frequency: !planFrequency,
        },
      };
    });
  };

  const addAddon = () => {
    setFormAnswers((prev) => {
      return {
        ...prev,
        3: {
          ...prev[3],
          addons: checkedAddon,
        },
      };
    });
  };

  const checkHandler = (isChecked, id) => {
    let checkedArr = [...checkedAddon];

    if (isChecked) {
      checkedArr = [...checkedArr, id];
    } else {
      checkedArr = checkedArr.filter((item) => item !== id);
    }
    console.log({ checkedArr });
    // setCheckedAddon([...checkedArr]);
    // addAddon();
    console.log({ checkedArray: checkedArr });
  };

  return (
    <div className={` flex flex-col mt-6 md:mt-9 space-y-4  md:space-y-6`}>
      {activeStep === 1 && (
        <>
          <FormInput
            value={formAnswers[1]?.name ? formAnswers[1]?.name : ""}
            error={formError.name}
            labelFor={"name"}
            label={"Name"}
            placeholder={"e.g. Stephen King"}
            onInputChange={onInputChange}
          />
          <FormInput
            value={formAnswers[1]?.email ? formAnswers[1]?.email : ""}
            error={formError.email}
            labelFor={"email"}
            label={"Email Address"}
            placeholder={"e.g. stephenking@lorem.com"}
            onInputChange={onInputChange}
          />
          <FormInput
            value={formAnswers[1]?.phone ? formAnswers[1]?.phone : ""}
            error={formError.phone}
            labelFor={"phone"}
            label={"Phone Number"}
            placeholder={"e.g. +63 987 654 3211"}
            onInputChange={onInputChange}
          />
        </>
      )}

      {activeStep === 2 &&
        (() => {
          if (formAnswers[activeStep] === undefined) {
            setFormAnswers((prev) => {
              return {
                ...prev,
                2: {
                  ...prev[2],
                  frequency: planFrequency,
                  plan: currentPlan,
                },
              };
            });
          }
          return (
            <>
              <div
                className={` flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4`}>
                {plansArray.map((plan) => {
                  return (
                    <button
                      onClick={() => selectPlan(plan.id, planFrequency)}
                      key={plan.id}
                      className={` ${
                        plan.id === currentPlan
                          ? "border-fmblue-one bg-fmgrey-greyligher"
                          : "border-fmgrey-greylight bg-white"
                      } border  rounded-lg px-4 py-5 flex flex-row items-start md:flex-col md:flex-1 md:justify-between`}>
                      <div className={` mr-4 md:mb-10`}>{plan.planIcon}</div>
                      <div
                        className={` flex flex-col items-start space-y-1 md:space-y-2`}>
                        <p className={` text-fmblue-dark font-medium`}>
                          {plan.planName}
                        </p>
                        <p className={` text-sm text-fmgrey-grey`}>
                          {planFrequency
                            ? plan.planPriceMonthly
                            : plan.planPriceYearly}
                        </p>
                        {!planFrequency && (
                          <p className={` text-xs text-fmblue-dark`}>
                            {plan.planPriceYearlyFree}
                          </p>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
              <div
                className={` flex justify-center items-center space-x-3 h-12 bg-fmgrey-greyligher rounded-lg `}>
                <p
                  className={` text-sm font-medium ${
                    planFrequency ? " text-fmblue-dark " : " text-fmgrey-grey"
                  }`}>
                  Monthly
                </p>
                <button onClick={handleToggle}>
                  <ToggleIcon planFreq={planFrequency} />
                </button>
                <p
                  className={` text-sm font-medium ${
                    !planFrequency ? " text-fmblue-dark " : " text-fmgrey-grey"
                  }`}>
                  Yearly
                </p>
              </div>
            </>
          );
        })()}
      {activeStep === 3 &&
        (() => {
          return (
            <>
              {addonsList.map((addon) => {
                return (
                  <div
                    key={addon.id}
                    className={` ${
                      formAnswers[3]?.addons.includes(addon.id)
                        ? "border-fmblue-one bg-fmgrey-greyligher"
                        : "border-fmgrey-greylight bg-white"
                    } border  rounded-lg px-4 py-5  flex justify-between items-center`}>
                    <FormCheckbox
                      id={addon.id}
                      addon={addon}
                      checkHandler={checkHandler}
                      checkedItems={formAnswers[3]?.addons}
                    />
                    {planFrequency ? (
                      <div className={` text-fmblue-one text-xs`}>
                        {addon.addonPriceMonthly}
                      </div>
                    ) : (
                      <div className={` text-fmblue-one text-xs`}>
                        {addon.addonPriceYearly}
                      </div>
                    )}
                  </div>
                );
              })}
            </>
          );
        })()}
      {activeStep === 4 && (
        <>
          <div className={` bg-fmgrey-greyligher px-6 py-4`}>
            <div className={` flex justify-between items-center`}>
              <div>
                <p className={` text-fmblue-dark`}>Arcade (Monthly)</p>
                <button
                  className={` hover:text-fmblue-one text-fmgrey-greylight  underline text-sm`}>
                  Change
                </button>
              </div>
              <p>$9/mo</p>
            </div>
            <hr className={` mt-6 mb-4`} />
            <div className={` space-y-4`}>
              <div className={` flex justify-between items-center`}>
                <p className={` text-fmgrey-grey text-sm`}>Online Service</p>
                <p className={` text-fmblue-dark text-sm`}>+$1/mo</p>
              </div>
              <div className={` flex justify-between items-center`}>
                <p className={` text-fmgrey-grey text-sm`}>Online Service</p>
                <p className={` text-fmblue-dark text-sm`}>+$1/mo</p>
              </div>
            </div>
          </div>
          <div className={` flex justify-between items-center px-6 py-4`}>
            <p className={` text-fmgrey-grey text-sm `}>Total per month</p>
            <p className={` text-xl text-fmblue-dark font-bold`}>$12/mo</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Form;
