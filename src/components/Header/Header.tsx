import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { useAppDispatch } from "../../redux/hooks";
import { openMobileMenu } from "../../redux/products/slice";
import MobileMenu from "../MobileMenu/MobileMenu";
import Container from "../Container/Container";
import NavList from "../NavList/NavList";

const Header = () => {
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
    <header
      className={`fixed top-0 left-0 z-[997] w-full border-b border-badges bg-inputs transition-transform duration-300 ${
        isScrollingDown ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <Container>
        <div className="flex justify-between items-center w-full h-header relative">
          <Link
            className="flex items-center h-full w-[136px]"
            to="/"
            aria-label="Link to home"
          >
            <p>
              <span className="text-button-hover">Product</span>Manager
            </p>
          </Link>
          <div className="hidden md:flex md:items-center md:gap-8 xl:absolute xl:left-1/2 xl:-translate-x-1/2">
            <NavList />
          </div>

          <button
            className="md:hidden cursor-pointer"
            onClick={() => dispatch(openMobileMenu())}
            aria-label="Open mobile menu"
          >
            <GiHamburgerMenu className="w-6 h-6 text-main transition-colors duration-250 hover:text-button-hover" />
          </button>

          <MobileMenu />
        </div>
      </Container>
    </header>
  );
};

export default Header;
