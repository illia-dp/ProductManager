import { useEffect, useRef, useState } from "react";
import { useAppDispatch } from "../../redux/hooks";
import { openModalForm } from "../../redux/products/slice";
import Button from "../Button/Button";
import { IoIosAddCircleOutline } from "react-icons/io";

const AddButton = () => {
  const dispatch = useAppDispatch();

  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const prevScrollY = useRef(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > prevScrollY.current && currentScrollY > 100) {
      setIsScrollingDown(true);
    } else if (currentScrollY < prevScrollY.current) {
      setIsScrollingDown(false);
    }

    prevScrollY.current = currentScrollY;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative">
      <Button
        className={`fixed bottom-6 right-6 w-12 h-12 text-xs rounded-full transition-transform ${
          isScrollingDown ? "transform translate-y-[96px]" : ""
        }`}
        onClick={() => dispatch(openModalForm())}
        aria-label="Open search menu"
      >
        <IoIosAddCircleOutline className="w-6 h-6" />
      </Button>
    </div>
  );
};

export default AddButton;
