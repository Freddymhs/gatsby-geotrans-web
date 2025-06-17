import * as React from "react";

import HeaderInfo from "../../old-componentss/layout/headerInfo/index.js";
import MainNavigation from "../../old-componentss/layout/mainNavigation/index.js";
import Footer from "../../old-componentss/layout/footer/index.js.js";
import SectionDivider from "../../old-componentss/layout/herlpers/SectionDivider.jsx";

const Layout = ({ children }) => {
  return (
    <main className="bg-light">
      <HeaderInfo />
      <MainNavigation />
      <SectionDivider />
      {children}
      <Footer />
    </main>
  );
};

export default Layout;
