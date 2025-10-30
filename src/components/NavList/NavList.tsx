import { NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { selectMobileMenuIsOpen } from "../../redux/products/selectors";
import { closeMobileMenu } from "../../redux/products/slice";
import clsx from "clsx";

const addActive = ({ isActive }: { isActive: boolean }) => {
  return clsx(
    "flex items-center justify-center font-medium transition-colors",
    "text-[20px] h-12 md:text-[16px] md:h-18 md:flex-row",
    isActive && "text-button hover:text-button-hover",
    !isActive && "text-main hover:text-button-hover"
  );
};

const NavList = () => {
  const dispatch = useAppDispatch();
  const MobileMenuIsOpen = useAppSelector(selectMobileMenuIsOpen);

  const handleClick = () => {
    if (MobileMenuIsOpen) dispatch(closeMobileMenu());
  };

  return (
    <div className="flex flex-col gap-8 md:flex-row">
      <NavLink
        className={addActive}
        to="/"
        aria-label="link to home"
        onClick={handleClick}
      >
        Home
      </NavLink>
      <NavLink
        className={addActive}
        to="/catalog"
        aria-label="link to products"
        onClick={handleClick}
      >
        Catalog
      </NavLink>
    </div>
  );
};

export default NavList;
