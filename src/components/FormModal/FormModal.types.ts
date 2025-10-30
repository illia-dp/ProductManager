import { Product } from "../../redux/products/products.types";

export type FormModalProps = {
  initialValues: Omit<Product, "id">;
  onSubmit: (
    values: Omit<Product, "id">,
    helpers: { resetForm: () => void }
  ) => void | Promise<void>;
  btnText: string;
};
