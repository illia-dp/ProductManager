import { useAppSelector } from "../../redux/hooks";
import { selectProducts } from "../../redux/products/selectors";
import { Product } from "../../redux/products/products.types";
import ProductsItem from "../ProductsItem/ProductsItem";

const ProductsList = () => {
  const products = useAppSelector(selectProducts);
  return (
    <ul className="flex flex-wrap gap-5">
      {products.length !== 0 &&
        products.map((product: Product) => (
          <ProductsItem key={product.id} product={product} />
        ))}
    </ul>
  );
};

export default ProductsList;
