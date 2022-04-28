import { useState, useEffect } from "react";
import NavBar from "./navbar/navBar";

export default function Layout({ children }) {

  return (
    <>
      
      <main>{children}</main>

      
    </>
  )
}