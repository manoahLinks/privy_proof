/* eslint-disable react/prop-types */

import Logo from "./Logo";

function HomeNav({ children }) {
  return (
    <div className="flex items-center justify-between bg-white px-4 py-2 md:px-[80px] md:py-6">
      <Logo />
      {children}
    </div>
  );
}

export default HomeNav;
