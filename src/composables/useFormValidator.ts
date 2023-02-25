import type { TextInputType } from "@/types/formSteps";
import { z, ZodError } from "zod";
import { ValidationError, isValidationErrorLike, fromZodError } from 'zod-validation-error';

const name = z
  .string({
    required_error: "Name is required",
    invalid_type_error: "Name must be a string",
  })
  .trim();

const email = z
  .string({
    required_error: "Email is required",
  })
  .email({ message: "Invalid email address" })
  .trim();

const phoneNumber = z.string({
  required_error: "Phone no is required",
});

export const inputSchema = z.object({
  name: name,
  email: email,
  phoneNumber: phoneNumber,
});

export type InputSchema = z.infer<typeof inputSchema>;

export const useFormValidator = (inputs: InputSchema): void => {
  // parse some invalid value
try {
  inputSchema.parse({
    name: 1,
    email: 'foobar', // note: invalid email
    phoneNumber
  });
} catch (err) {
  const validationError = fromZodError(err as ZodError);
  // the error now is readable by the user
  // you may print it to console
  // or return it via an API
  console.log("Error", validationError);
};
}