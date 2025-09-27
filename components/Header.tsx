import Link from "next/link";
import React from "react";
import NavItems from "./NavItems";
import Image from "next/image";
import UserDropdown from "./userDropdown";

const Header = () => {
  return (
    <header className="sticky top-0 header">
      <div className="header-wrapper container">
        <Link href="/">
          <Image
            src="/assets/icons/logo.png"
            alt="Signalist logo"
            width={140}
            height={100}
          />
        </Link>
        <nav className="hidden sm:block ">
          {/* NavItems */}
          <NavItems />
        </nav>
        {/* User Dropdowns */}
        <UserDropdown />
      </div>
    </header>
  );
};

export default Header;
