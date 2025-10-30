import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { useEffect } from "react";
import { Product } from "../../redux/products/products.types";
import {
  selectConfirmModalIsOpen,
  selectIsLoading,
  selectmodalFormIsOpen,
  selectProducts,
  selectSelectedProduct,
} from "../../redux/products/selectors";
import {
  closeModalForm,
  openModalForm,
  setSelectedProduct,
} from "../../redux/products/slice";
import {
  addProduct,
  editProduct,
  getProducts,
} from "../../redux/products/operations";
import ProductsList from "../../components/ProductsList/ProductsList";
import ConfirmModal from "../../components/ConfirmModal/ConfirmModal";
import EmptyList from "../../components/EmptyList/EmptyList";
import AddButton from "../../components/AddButton/AddButton";
import Container from "../../components/Container/Container";
import FormModal from "../../components/FormModal/FormModal";
import Section from "../../components/Section/Section";
import Button from "../../components/Button/Button";
import toast from "react-hot-toast";

const CatalogPage = () => {
  const dispatch = useAppDispatch();
  const loading = useAppSelector(selectIsLoading);
  const products = useAppSelector(selectProducts);
  const selectedProduct = useAppSelector(selectSelectedProduct);
  const modalIsOpen = useAppSelector(selectmodalFormIsOpen);
  const confirmModalIsOpen = useAppSelector(selectConfirmModalIsOpen);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const initialValues: Omit<Product, "id"> = {
    name: selectedProduct?.name || "",
    price: selectedProduct?.price || "",
    category: selectedProduct?.category || "",
  };

  const handleSubmit = async (
    values: Omit<Product, "id">,
    { resetForm }: { resetForm: () => void }
  ) => {
    try {
      if (selectedProduct) {
        await dispatch(
          editProduct({ id: selectedProduct.id, productData: values })
        ).unwrap();
        toast.success("Product updated successfully");
      } else {
        await dispatch(addProduct(values)).unwrap();
        toast.success("Product added successfully");
      }
      resetForm();
      dispatch(closeModalForm());
      dispatch(setSelectedProduct(null));
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Something went wrong"
      );
    }
  };

  const btnText = selectedProduct ? "Confirm" : "Add";

  return (
    <Container>
      <Section>
        <Button
          className="w-full h-[56px] mb-6"
          style="more"
          onClick={() => dispatch(openModalForm())}
          aria-label="button to open filter menu"
        >
          Add Product
        </Button>

        {modalIsOpen && (
          <FormModal
            initialValues={initialValues}
            onSubmit={handleSubmit}
            btnText={btnText}
          />
        )}

        {confirmModalIsOpen && <ConfirmModal />}

        {!loading && products.length === 0 ? <EmptyList /> : <ProductsList />}

        <AddButton />
      </Section>
    </Container>
  );
};

export default CatalogPage;
