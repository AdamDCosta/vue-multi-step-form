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