import { RootState } from "../store";

export const selectProducts = (state: RootState) => state.products.items;

export const selectIsLoading = (state: RootState) => state.products.isLoading;

export const selectError = (state: RootState) => state.products.error;

export const selectMobileMenuIsOpen = (state: RootState) =>
  state.products.mobileMenuIsOpen;

export const selectmodalFormIsOpen = (state: RootState) =>
  state.products.modalFormIsOpen;

export const selectSelectedProduct = (state: RootState) =>
  state.products.selectedProduct;

export const selectConfirmModalIsOpen = (state: RootState) =>
  state.products.confirmModalIsOpen;

export const selectProductToDelete = (state: RootState) =>
  state.products.productToDelete;
