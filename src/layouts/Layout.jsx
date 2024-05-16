// Layout.jsx

import Header from "./Header";
import Footer from "./Footer";

// eslint-disable-next-line react/prop-types
const Layout = ({ children, currentPath }) => {
  // Set the global text color using the imported color

  return (
    <>
      <Header currentPath={currentPath} />
      <main>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
