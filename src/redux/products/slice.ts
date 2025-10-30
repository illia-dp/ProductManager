import { createSlice, isRejectedWithValue } from "@reduxjs/toolkit";
import {
  addProduct,
  deleteProduct,
  editProduct,
  getProducts,
} from "./operations";
import { ProductsState } from "./products.types";

const initialState: ProductsState = {
  items: [],
  isLoading: false,
  error: null,
  mobileMenuIsOpen: false,
  modalFormIsOpen: false,
  selectedProduct: null,
  confirmModalIsOpen: false,
  productToDelete: "",
};

const slice = createSlice({
  name: "campers",
  initialState,
  reducers: {
    openMobileMenu(state) {
      state.mobileMenuIsOpen = true;
    },
    closeMobileMenu(state) {
      state.mobileMenuIsOpen = false;
    },
    openModalForm(state) {
      state.modalFormIsOpen = true;
    },
    closeModalForm(state) {
      state.modalFormIsOpen = false;
    },
    setSelectedProduct(state, { payload }) {
      state.selectedProduct = payload;
    },
    openConfirmModal(state) {
      state.confirmModalIsOpen = true;
    },
    closeConfirmModal(state) {
      state.confirmModalIsOpen = false;
    },
    setProductToDelete(state, { payload }) {
      state.productToDelete = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.fulfilled, (state, { payload }) => {
        state.items = payload;
      })
      .addCase(addProduct.fulfilled, (state, { payload }) => {
        state.items.push(payload);
      })
      .addCase(editProduct.fulfilled, (state, { payload }) => {
        const updatedProduct = payload;
        state.items = state.items.map((product) =>
          product.id === updatedProduct.id ? updatedProduct : product
        );
      })
      .addCase(deleteProduct.fulfilled, (state, { payload }) => {
        state.items = state.items.filter(
          (product) => product.id !== payload.id
        );
      })
      .addMatcher(
        (action) => action.type.startsWith("products/"),
        (state, action) => {
          if (action.type.endsWith("/pending")) {
            state.isLoading = true;
            state.error = null;
          } else if (action.type.endsWith("/fulfilled")) {
            state.isLoading = false;
            state.error = null;
          } else if (action.type.endsWith("/rejected")) {
            if (isRejectedWithValue(action)) {
              state.isLoading = false;
              state.error = action.payload as string;
            }
          }
        }
      );
  },
});

export const {
  openMobileMenu,
  closeMobileMenu,
  openModalForm,
  closeModalForm,
  setSelectedProduct,
  openConfirmModal,
  closeConfirmModal,
  setProductToDelete,
} = slice.actions;

export const productsReducer = slice.reducer;
