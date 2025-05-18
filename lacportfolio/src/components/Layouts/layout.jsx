import React from "react";
import '.../App.css';

const Layout = ({children}) => {

  return(
    <main className="page">
      {children}
    </main>
  )
}

export default Layout;