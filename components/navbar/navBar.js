import navBarStyles from "../../styles/Navbar.module.css";
import Image from "next/image";
import toggleHamAnimation from "./hamAnimationController";
import { useRef } from "react";
import { useState } from "react";
import Link from "next/dist/client/link";
import { useEffect } from "react";

export default function NavBar() {
    const [showNavigationList, setShowNavigationList] = useState(false);
    const hamContainerRef = useRef();
    const ulListRef = useRef();

    function toggleHamAndShowHam() {
        toggleHamAnimation(hamContainerRef.current);
        setShowNavigationList(!showNavigationList);
    }

    useEffect(() => {
        // document.addEventListener("scroll", () => {
        //     const aboutUs = document.getElementById("aboutUs");
        //     if(aboutUs && parseInt(screen.width) > 650) {
        //         if(window.scrollY + 50 > aboutUs.offsetTop ) {
        //             ulListRef.current.children[0].children[0].classList.add("navigationActive");  
        //             ulListRef.current.children[1].children[0].classList.remove("navigationActive");    
        //         } else if(window.scrollY < aboutUs.offsetTop) {
        //             ulListRef.current.children[1].children[0].classList.add("navigationActive"); 
        //             ulListRef.current.children[0].children[0].classList.remove("navigationActive");  
        //         }
        //     }
        // })
    }, [])
    return (
        <div className={navBarStyles.navbar}>
            <div className={navBarStyles.logoBox}>
                <Image src="/bit_logo.png" alt="Logo" width={50} height={30}/>     
            </div>
            <ul ref={ulListRef} className={navBarStyles.navigationList}>
                <Link href='/'><li><p className={navBarStyles.navigationListParagraph}>Home</p></li></Link>
                <Link href='/#ourMessage'><li><p className={navBarStyles.navigationListParagraph}>Our message</p></li></Link>
                <Link href='/#projects'><li><p className={navBarStyles.navigationListParagraph}>Projects</p></li></Link>
                <Link href='/#customers'><li><p className={navBarStyles.navigationListParagraph}>Customers</p></li></Link>
                <Link href='/#aboutUs'><li><p className={navBarStyles.navigationListParagraph}>About us</p></li></Link>
            </ul>
            <div ref={hamContainerRef} className="ham_Container" onClick={toggleHamAndShowHam}>
                    <div className="circle"></div>
                    <div className="ham_4">
                        <div className="middleBar"></div>
                    </div>
                <div className="hide"></div>
            </div>
            {showNavigationList && <nav className={navBarStyles.mobileNavigationList}>
                <ul className={navBarStyles.mobileNavigationListUl}>
                    <Link href='/'><li onClick={toggleHamAndShowHam}><p className={navBarStyles.navigationListParagraph}>Home</p></li></Link>
                    <Link href='/#customers'><li onClick={toggleHamAndShowHam}><p className={navBarStyles.navigationListParagraph}>Customers</p></li></Link>
                    <Link href='/#projects'><li onClick={toggleHamAndShowHam}><p className={navBarStyles.navigationListParagraph}>Projects</p></li></Link>
                    <Link href='/#ourMessage'><li onClick={toggleHamAndShowHam}><p className={navBarStyles.navigationListParagraph}>Our message</p></li></Link>
                    <Link href='/#aboutUs'><li onClick={toggleHamAndShowHam}><p className={navBarStyles.navigationListParagraph}>About us</p></li></Link>
                </ul>
            </nav>}
        </div>
    )
}