import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { EditProductPayload, Product } from "./products.types";
import { BASE_URL } from "../../constants/api";

export const instance = axios.create({
  baseURL: BASE_URL,
});

export const getProducts = createAsyncThunk<Product[]>(
  "products/getProducts",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await instance.get("/products");
      return data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const addProduct = createAsyncThunk<Product, Omit<Product, "id">>(
  "products/addProduct",
  async (productData, { rejectWithValue }) => {
    try {
      const { data } = await instance.post("/products", productData);
      return data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const editProduct = createAsyncThunk<Product, EditProductPayload>(
  "products/editProduct",
  async ({ id, productData }, { rejectWithValue }) => {
    try {
      const { data } = await instance.put(`/products/${id}`, productData);
      return data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteProduct = createAsyncThunk<any, string>(
  "products/deleteProduct",
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await instance.delete(`/products/${id}`);
      return data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);
