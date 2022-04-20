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

    function removeNavigationActiveClass() {
        for(let i = 0; i < ulListRef.current.children.length; i++) {
            ulListRef.current.children[i].children[0].classList.remove("navigationActive");
        }
    }

    useEffect(() => {
        const ourMessage = document.getElementById("ourMessage");
        const projects = document.getElementById("projects");
        const customers = document.getElementById("customers");
        const aboutUs = document.getElementById("aboutUs");
        let startNewSectionUpNumber = 350;
        if(parseInt(screen.width) > 650) {      
            document.addEventListener("scroll", () => {
                if(customers && projects && ourMessage && aboutUs && parseInt(screen.width) > 650) {
                    removeNavigationActiveClass();  
                    if(window.scrollY + startNewSectionUpNumber < ourMessage.offsetTop) {
                        ulListRef.current.children[0].children[0].classList.add("navigationActive"); 
                    } else if(window.scrollY + startNewSectionUpNumber > ourMessage.offsetTop && window.scrollY + startNewSectionUpNumber < projects.offsetTop) {
                        ulListRef.current.children[1].children[0].classList.add("navigationActive"); 
                    } else if(window.scrollY + startNewSectionUpNumber > projects.offsetTop && window.scrollY + startNewSectionUpNumber < customers.offsetTop) {
                        ulListRef.current.children[2].children[0].classList.add("navigationActive");  
                    } else if(window.scrollY + startNewSectionUpNumber > customers.offsetTop && window.scrollY + startNewSectionUpNumber < aboutUs.offsetTop) {
                        ulListRef.current.children[3].children[0].classList.add("navigationActive");  
                    } else if(window.scrollY + startNewSectionUpNumber > aboutUs.offsetTop) {
                        ulListRef.current.children[4].children[0].classList.add("navigationActive"); 
                    }
                }
            })
        }
    }, [])
    return (
        <div className={navBarStyles.navbar}>
            <div className={navBarStyles.logoBox}>
                <Image src="/bit_logo.png" alt="Logo" width={50} height={30}/>     
            </div>
            <ul ref={ulListRef} className={navBarStyles.navigationList}>
                <Link href='/'><li><p className={navBarStyles.navigationListParagraph + " navigationActive"}>Home</p></li></Link>
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