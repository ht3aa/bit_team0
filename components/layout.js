import NavBar from "./navbar/navBar";

export default function Layout({ children }) {
  return (
    <>
        <NavBar /> 
        <main>{children}</main>
    </>
  )
}