import { ErrorMessage, Field, Form, Formik } from "formik";
import { validationProductFormSchema } from "../../validation/validation";
import { FormModalProps } from "../FormModal/FormModal.types";
import { Product } from "../../redux/products/products.types";
import Button from "../Button/Button";

const ProductForm: React.FC<FormModalProps> = ({
  initialValues,
  onSubmit,
  btnText,
}) => {
  return (
    <Formik<Omit<Product, "id">>
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationProductFormSchema}
    >
      <Form className="mx-auto">
        <div className="mb-5 relative">
          <Field
            className="w-full h-[60px] px-5 py-4 rounded-xl bg-inputs outline-transparent border-none"
            type="text"
            name="name"
            placeholder="Name *"
          />
          <ErrorMessage
            className="absolute bottom-[-18px] text-xs px-5 text-button"
            name="name"
            component="div"
          />
        </div>

        <div className="mb-5 relative">
          <Field
            className="w-full h-[60px] px-5 py-4 rounded-xl bg-inputs outline-transparent border-none"
            type="number"
            name="price"
            placeholder="Price *"
          ></Field>
          <ErrorMessage
            className="absolute bottom-[-18px] text-xs px-5 text-button"
            name="price"
            component="div"
          />
        </div>

        <div className="mb-5 relative">
          <Field
            className="w-full h-[60px] px-5 py-4 rounded-xl bg-inputs outline-transparent border-none"
            type="text"
            name="category"
            placeholder="Category *"
          ></Field>
          <ErrorMessage
            className="absolute bottom-[-18px] text-xs px-5 text-button"
            name="category"
            component="div"
          />
        </div>

        <Button
          className="mt-5 mx-auto w-[166px] h-[56px]"
          type="submit"
          style="confirm"
          aria-label="submit product form"
        >
          {btnText}
        </Button>
      </Form>
    </Formik>
  );
};

export default ProductForm;
