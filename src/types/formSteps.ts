import { z } from "zod";

export type Steps = typeof formSteps;

export type StepProgress = {
  number: number;
  step: string;
  title: string;
};

export const formSteps = [
  {
    number: 1,
    step: "STEP 1",
    title: "YOUR INFO",
  },
  {
    number: 2,
    step: "STEP 2",
    title: "SELECT PLAN",
  },
  {
    number: 3,
    step: "STEP 3",
    title: "ADD-ONS",
  },
  {
    number: 4,
    step: "STEP 4",
    title: "SUMMARY",
  },
] as const;

export type FormStepData<T extends InputType | TextInputType> = {
  title: string;
  subtitle: string;
  inputs: Input<T>[];
};

export type Input<T> = {
  type: T;
  label: string;
  information: string;
  vModel: string;
};


export type TextInput = {
  type: TextInputType;
  label: string;
  information: string;
  vModel: string;
};

export type InputType = "text" | "radio" | "checkbox" | "tel";
export type TextInputType = Extract<InputType, "text" | "tel">;

export const formStepOne: FormStepData<TextInputType> = {
  title: "Personal info",
  subtitle: "Please provide your name, email address and phone number",
  inputs: [
    {
      type: "text",
      label: "Name",
      information: "e.g, Stephen King",
      vModel: "name",
    },
    {
      type: "text",
      label: "Email Address",
      information: "e.g, stephenking@lorem.com",
      vModel: "email",
    },
    {
      type: "tel",
      label: "Phone Number",
      information: "e.g, +44 7123 456 789",
      vModel: "phoneNumber",
    },
  ],
};
