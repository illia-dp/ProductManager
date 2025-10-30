import { createPortal } from "react-dom";
import { useEffect } from "react";
import { closeModalForm, setSelectedProduct } from "../../redux/products/slice";
import { useAppDispatch } from "../../redux/hooks";
import { FormModalProps } from "./FormModal.types";
import { CgClose } from "react-icons/cg";
import ProductForm from "../ProductForm/ProductForm";

const FormModal: React.FC<FormModalProps> = ({
  initialValues,
  onSubmit,
  btnText,
}) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [dispatch]);

  const closeModal = () => {
    dispatch(closeModalForm());
    dispatch(setSelectedProduct(null));
  };

  return createPortal(
    <div
      className="fixed top-0 left-0 z-[998] w-screen h-screen bg-custom-gray flex justify-center items-center"
      role="dialog"
      aria-modal="true"
      onClick={closeModal}
    >
      <div
        className="relative bg-white rounded-[30px] w-[335px] h-[400px] flex flex-col justify-center md:w-[500px] md:h-[461px]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-5 right-5 border-none cursor-pointer flex items-center justify-center text-text transition-colors hover:text-button-hover"
          aria-label="close modal"
          onClick={closeModal}
        >
          <CgClose className="w-6 h-6" />
        </button>

        <div className="px-5">
          <ProductForm
            initialValues={initialValues}
            onSubmit={onSubmit}
            btnText={btnText}
          />
        </div>
      </div>
    </div>,
    document.body
  );
};

export default FormModal;
