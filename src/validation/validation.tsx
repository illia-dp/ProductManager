import * as Yup from "yup";

export const validationProductFormSchema = Yup.object({
  name: Yup.string()
    .min(3, "Too short")
    .max(20, "Max 20")
    .required("Name is required"),
  price: Yup.number()
    .min(1, "Too short")
    .max(1000000, "Too long")
    .required("Price is required"),
  category: Yup.string()
    .min(3, "Too short")
    .max(20, "Max 20")
    .required("Category is required"),
});
