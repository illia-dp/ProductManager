import { createPortal } from "react-dom";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { selectMobileMenuIsOpen } from "../../redux/products/selectors";
import { closeMobileMenu } from "../../redux/products/slice";
import { CgClose } from "react-icons/cg";
import NavList from "../NavList/NavList";
import clsx from "clsx";

const MobileMenu = () => {
  const dispatch = useAppDispatch();
  const mobileMenuOpen = useAppSelector(selectMobileMenuIsOpen);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") dispatch(closeMobileMenu());
    };
    document.addEventListener("keydown", handleKeyDown);

    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen, dispatch]);

  return createPortal(
    <div
      className={clsx(
        "fixed inset-0 bg-white/40 z-[1001] transition-opacity duration-300",
        mobileMenuOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      )}
      onClick={() => dispatch(closeMobileMenu())}
    >
      <div
        className={clsx(
          "fixed top-0 right-0 w-full h-full bg-white p-12 flex flex-col justify-center transform transition-transform duration-300 z-[1002]",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-6 right-6 p-0"
          aria-label="close mobile menu"
          onClick={() => dispatch(closeMobileMenu())}
        >
          <CgClose className="w-6 h-6 text-main transition-colors hover:text-button" />
        </button>
        <div className="flex flex-col justify-center items-center">
          <NavList />
        </div>
      </div>
    </div>,
    document.body
  );
};

export default MobileMenu;
