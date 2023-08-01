import { useEffect, useState } from "react";
import Button from "../Elements/button";

export default function Navbar() {
  const [navbarBackground, setNavbarBackground] = useState(false);

  const handleScroll = () => {
    const navbarHeight = 100;
    const isNavbarBackground = window.scrollY > navbarHeight;
    setNavbarBackground(isNavbarBackground);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarClass = navbarBackground ? "bg-base-100 transition-opacity duration-1000" : "bg-transparent transition-opacity duration-300";

  return (
    <div className={`container fixed ${navbarClass}  z-50`}>
      <div className="navbar">
        <div className="flex-1">
          <Button className="btn btn-ghost normal-case text-xl">Nations</Button>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Button link={"/"}>Home</Button>
            </li>
            <li>
              <Button link={"/explore"}>Explore</Button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
