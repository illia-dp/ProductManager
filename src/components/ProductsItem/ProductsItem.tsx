import { useAppDispatch } from "../../redux/hooks";
import {
  openConfirmModal,
  openModalForm,
  setProductToDelete,
  setSelectedProduct,
} from "../../redux/products/slice";
import { MdOutlineDelete } from "react-icons/md";
import { TiPencil } from "react-icons/ti";
import { Product } from "../../redux/products/products.types";
import Button from "../Button/Button";

interface ProductsItemProps {
  product: Product;
}

const ProductsItem = ({ product }: ProductsItemProps) => {
  const dispatch = useAppDispatch();

  const handleEdit = () => {
    dispatch(openModalForm());
    dispatch(setSelectedProduct(product));
  };

  const handleDelete = () => {
    dispatch(openConfirmModal());
    dispatch(setProductToDelete(product.id));
  };

  return (
    <li className="flex flex-col p-5 border border-gray-light rounded-[20px] gap-6 overflow-hidden w-full md:w-[calc((100%-20px)/2)] lg:w-[calc((100%-40px)/3)] xl:w-[calc((100%-60px)/4)]">
      <div className="text-center">
        <p className="text-sm">Name</p>
        <p className="text-lg">{product.name}</p>
      </div>

      <div className="flex justify-between">
        <div className="text-center">
          <p className="text-sm">Price</p>
          <p className="text-lg">{product.price}</p>
        </div>

        <div className="text-center">
          <p className="text-sm">Category</p>
          <p className="text-lg">{product.category}</p>
        </div>
      </div>

      <div className="flex gap-5 justify-between">
        <Button
          className="w-[100px] h-[40px]"
          onClick={handleEdit}
          aria-label="edit selected product"
        >
          <TiPencil className="w-[24px] h-[24px]" />
        </Button>

        <Button
          style="more"
          className="w-[100px] h-[40px]"
          onClick={handleDelete}
          aria-label="delete selected product"
        >
          <MdOutlineDelete className="w-[24px] h-[24px]" />
        </Button>
      </div>
    </li>
  );
};

export default ProductsItem;
