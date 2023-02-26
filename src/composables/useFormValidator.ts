import { ref } from "vue";
import { z, type ZodFormattedError } from "zod";

const name = z
  .string({
    required_error: "Name is required",
    invalid_type_error: "Name must be a string",
  })
  .trim()
  .min(2, { message: "Name must be at least 2 characters" });

const email = z
  .string({
    required_error: "Email is required",
  })
  .email({ message: "Invalid email address" })
  .trim();

const phoneNumber = z
  .string({
    required_error: "Phone no is required",
  })
  .trim()
  .min(2, { message: "This field is required" });

export const inputSchema = z.object({
  name: name,
  email: email,
  phoneNumber: phoneNumber,
});

export type InputSchema = z.infer<typeof inputSchema>;

export type FormErrors = ZodFormattedError<{ name: string; email: string; phoneNumber: string; }, string>

export const useFormValidator = (input: InputSchema) => {
  const isValid = ref(false);
  const errors = ref<FormErrors>();

  const result = inputSchema.safeParse({
    name: input.name,
    email: input.email,
    phoneNumber: input.phoneNumber,
  });

  isValid.value = result.success;

  if (!result.success) {
    errors.value = result.error.format();
  }

  return { isValid, errors };
};
