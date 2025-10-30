import { createPortal } from "react-dom";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  closeConfirmModal,
  setProductToDelete,
} from "../../redux/products/slice";
import { selectProductToDelete } from "../../redux/products/selectors";
import { deleteProduct } from "../../redux/products/operations";
import { CgClose } from "react-icons/cg";
import Button from "../Button/Button";
import toast from "react-hot-toast";

const ConfirmModal = () => {
  const dispatch = useAppDispatch();
  const productToDelete = useAppSelector(selectProductToDelete);

  const handleCancel = () => {
    dispatch(closeConfirmModal());
    dispatch(setProductToDelete(""));
  };

  const handleDelete = async () => {
    try {
      await dispatch(deleteProduct(productToDelete)).unwrap();
      dispatch(closeConfirmModal());
      toast.success("Product deleted successfully");
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message || "Something went wrong");
      } else {
        toast.error("Something went wrong");
      }
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleCancel();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [dispatch]);

  return createPortal(
    <div
      className="fixed top-0 left-0 z-[998] w-screen h-screen bg-custom-gray flex justify-center items-center"
      role="dialog"
      aria-modal="true"
      onClick={handleCancel}
    >
      <div
        className="relative bg-white rounded-[30px] w-[335px] h-[200px] flex flex-col justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-5 right-5 border-none cursor-pointer flex items-center justify-center text-text hover:text-button-hover"
          aria-label="close modal"
          onClick={handleCancel}
        >
          <CgClose className="w-6 h-6" />
        </button>
        <div className="p-5 flex flex-col justify-between items-center h-full">
          <div className="flex justify-center gap-6 mt-auto">
            <Button
              className="w-[120px] h-[40px]"
              onClick={handleCancel}
              aria-label="cancel deleting"
            >
              Cancel
            </Button>
            <Button
              className="w-[120px] h-[40px]"
              onClick={handleDelete}
              aria-label="delete selected product"
            >
              Confirm
            </Button>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default ConfirmModal;
