import { useState, useEffect } from "react";
import NavBar from "./navbar/navBar";

export default function Layout({ children }) {
  const [showUpButton, setShowUpButton] = useState(false);

  useEffect(() => {
      document.addEventListener("scroll", () => {
          if(window.scrollY > 300) {
              setShowUpButton(true);
          } else {
              setShowUpButton(false);
          }
      })
  }, [])
  return (
    <>
      <NavBar /> 
      <main>{children}</main>
      {showUpButton && <button onClick={() => window.scrollTo(0, 0)} className="upButton">
        <i className="fa-solid fa-arrow-up"></i>
      </button>}
    </>
  )
}