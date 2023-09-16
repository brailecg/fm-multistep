import {
  PlanAdvancedIcon,
  PlanArcadeIcon,
  PlanProIcon,
} from "@/components/svg/PlanIcon";

export const getAnswers = () => {
  return {
    1: {
      name: "Braile",
      email: "email@email.com",
      phone: "9897654321",
    },
    2: {
      plan: 1, // 1 = arcade, 2 = advanced, 3 = pro
      frequency: 1, // 1 = monthly, 2 = yearly
    },
    3: {
      addons: [], // array of addon ids
    },
    4: {
      summary: {},
    },
  };
};

export const getFormHeaderObj = async () => {
  return {
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
};

export const getStepsArray = async () => [
  {
    id: 1,
    step: 1,
    header: {
      title: "Personal Info",
      subtitle: "Please provide your name, email address, and phone number.",
    },
    title: "Step 1",
    desc: "Your Info",
  },
  {
    id: 2,
    step: 2,
    header: {
      title: "Select your plan",
      subtitle: "You have the option of monthly or yearly billing.",
    },
    title: "Step 2",
    desc: "Select Plan",
  },
  {
    id: 3,
    step: 3,
    header: {
      title: "Pick add-ons",
      subtitle: "Add-ons help enhance your gaming experience.",
    },
    title: "Step 3",
    desc: "Add-ons",
  },
  {
    id: 4,
    step: 4,
    header: {
      title: "Finishing up",
      subtitle: "Double-check everything looks OK before confirming.",
    },
    title: "Step 4",
    desc: "Summary",
  },
];

export const plansArray = [
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

export const getAddonsArray = async () => [
  {
    id: 1,
    addonName: "Online Service",
    addonDescription: "Access to multiplayer games",
    addonPriceMonthly: "+$1/mo",
    addonPriceYearly: "+$10/yr",
    checked: false,
  },
  {
    id: 2,
    addonName: "Larger storage",
    addonDescription: "Extra 1TB of cloud save",
    addonPriceMonthly: "+$2/mo",
    addonPriceYearly: "+$20/yr",
    checked: false,
  },
  {
    id: 3,
    addonName: "Customizable profile",
    addonDescription: "Custom theme on your profile",
    addonPriceMonthly: "+$2/mo",
    addonPriceYearly: "+$20/yr",
    checked: false,
  },
];
