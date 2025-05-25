import React from "react";

const Layout = ({children}) => {

  return(
    <div className="layout">
      <main className="portfolio-page">
       {children}
     </main>
    </div>
  )
}

export default Layout;