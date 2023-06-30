import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";
import MenuIcon from "../assets/menu-icon.svg";
import CloseIcon from "../assets/close-icon.svg";

const Link = ({ page, selectedPage, setSelectedPage }) => {
  const lowerCasePage = page.toLowerCase();
  return (
    <AnchorLink
      data-cy={`link-${lowerCasePage}`}
      className={`${selectedPage === lowerCasePage ? "text-yellow" : ""} hover:text-yellow transition duration-500`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
};


{/* DESKTOP */}

const DesktopNav = ({ selectedPage, setSelectedPage }) => (
  <div className="flex justify-between gap-16 font-opensans text-lg font-semibold">

    <Link page="Home" 
    selectedPage={selectedPage} 
    setSelectedPage={setSelectedPage} />

    <Link page="Skills" 
    selectedPage={selectedPage} 
    setSelectedPage={setSelectedPage} />

    <Link page="Projects" 
    selectedPage={selectedPage} 
    setSelectedPage={setSelectedPage} />

    <Link page="Contact" 
    selectedPage={selectedPage} 
    setSelectedPage={setSelectedPage} />

  </div>
);

{/* MOBILE */}

const MobileMenu = ({ selectedPage, setSelectedPage, onClose }) => (
  <div className="fixed right-0 bottom-0 h-full bg-blue02 w-[300px]">
    {/* CLOSE ICON */}
    <div className="flex justify-end p-12">
      <button onClick={onClose}>
        <img alt="close-icon" src={CloseIcon} />
      </button>
    </div>

    {/* MENU ITEMS */}
    <div className="flex flex-col gap-10 ml-[33%] text-2xl text-white">
      
      <Link page="Home"
       selectedPage={selectedPage} 
       setSelectedPage={setSelectedPage} />

      <Link page="Skills" 
      selectedPage={selectedPage} 
      setSelectedPage={setSelectedPage} />

      <Link page="Projects" 
      selectedPage={selectedPage} 
      setSelectedPage={setSelectedPage} />

      <Link page="Contact" 
      selectedPage={selectedPage} 
      setSelectedPage={setSelectedPage} />

    </div>
  </div>
);

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const navbarBackground = isTopOfPage ? "" : "bg-blue02";

  const toggleMenu = () => {
    setIsMenuToggled(!isMenuToggled);
  };

  const closeMenu = () => {
    setIsMenuToggled(false);
  };

  return (
    <nav className={`${navbarBackground} z-40 w-full fixed top-0 py-6`}>
      <div className="flex items-center justify-between mx-auto w-5/6">
        <a href="/">
          <h4 className="font-playfair text-3xl font-bold hover:text-yellow transition duration-500">ZAHWA</h4>
        </a>

        {isDesktop ? (
          <DesktopNav selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
        ) : (
          <button className="rounded-full bg-blue02 p-2" onClick={toggleMenu}>
            <img alt="menu-icon" src={MenuIcon} />
          </button>
        )}

        {!isDesktop && isMenuToggled && (
          <MobileMenu selectedPage={selectedPage} setSelectedPage={setSelectedPage} onClose={closeMenu} />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
