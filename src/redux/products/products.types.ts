export interface Product {
  id: string;
  name: string;
  price: number | string;
  category: string;
}

export interface ProductsState {
  items: Product[];
  isLoading: boolean;
  error: string | null;
  mobileMenuIsOpen: boolean;
  modalFormIsOpen: boolean;
  selectedProduct: Product | null;
  confirmModalIsOpen: boolean;
  productToDelete: string;
}

export interface EditProductPayload {
  id: string;
  productData: Omit<Product, "id">;
}
