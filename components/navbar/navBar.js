import navBarStyles from "../../styles/Navbar.module.css";
import Image from "next/image";
import toggleHamAnimation from "./hamAnimationController";
import { useRef, useState, useEffect } from "react";
import Link from "next/dist/client/link";
import { useRouter } from "next/router";

export default function NavBar() {

    // variables section
    const [showNavigationList, setShowNavigationList] = useState(false);
    const hamContainerRef = useRef();
    const ulListRef = useRef();
    const router = useRouter();

    // functions section
    function toggleHamAnimationAndShowNavigationList() {
        toggleHamAnimation(hamContainerRef.current);
        setShowNavigationList(!showNavigationList);
    }

    function removeNavigationActiveClass() {    
        for(let i = 0; i < ulListRef.current.children.length; i++) {
            ulListRef.current.children[i].children[0].classList.remove("navigationActive");
        }
    }

    // hooks section
    useEffect(() => {
        const bitteam0 = document.getElementById("bitteam0");
        const ourMessage = document.getElementById("ourMessage");
        const projects = document.getElementById("projects");
        const customers = document.getElementById("customers");
        const aboutUs = document.getElementById("aboutUs");
        let startNewSectionUpNumber = 350;
        if(parseInt(screen.width) > 650 && router.pathname === '/') {    
            document.addEventListener("scroll", () => {
                if(customers && projects && ourMessage && aboutUs && parseInt(screen.width) > 650 && ulListRef.current !== null) {
                    removeNavigationActiveClass();  
                    if(window.scrollY + startNewSectionUpNumber < ourMessage.offsetTop) {
                        ulListRef.current.children[0].children[0].classList.add("navigationActive"); 
                    } else if(window.scrollY + startNewSectionUpNumber > ourMessage.offsetTop && window.scrollY + startNewSectionUpNumber < projects.offsetTop) {
                        ulListRef.current.children[1].children[0].classList.add("navigationActive"); 
                    } else if(window.scrollY + startNewSectionUpNumber > projects.offsetTop && window.scrollY + startNewSectionUpNumber < customers.offsetTop) {
                        ulListRef.current.children[2].children[0].classList.add("navigationActive");  
                    } else if(window.scrollY + startNewSectionUpNumber > customers.offsetTop && window.scrollY + startNewSectionUpNumber < aboutUs.offsetTop) {
                        ulListRef.current.children[3].children[0].classList.add("navigationActive");  
                    } else if(window.scrollY + startNewSectionUpNumber > aboutUs.offsetTop && window.scrollY + startNewSectionUpNumber < bitteam0.offsetTop) {
                        ulListRef.current.children[4].children[0].classList.add("navigationActive"); 
                    } else if(window.scrollY + startNewSectionUpNumber > bitteam0.offsetTop) {
                        ulListRef.current.children[5].children[0].classList.add("navigationActive");
                    }
                }
            })
        }
    }, [router.pathname]);

    return (
        <div className={navBarStyles.navbar}>
            <div className={navBarStyles.logoBox}>
                <Image src="/bit_logo.png" alt="Logo" width={50} height={30}/>     
            </div>
            <ul ref={ulListRef} className={navBarStyles.navigationList}>
                <Link href='/'><li><p className="navigationActive">Home</p></li></Link>
                <Link href='/#ourMessage'><li><p>Our message</p></li></Link>
                <Link href='/#projects'><li><p>Projects</p></li></Link>
                <Link href='/#customers'><li><p>Customers</p></li></Link>
                <Link href='/#aboutUs'><li><p>About us</p></li></Link>
                <Link href='/#bitteam0'><li><p>bit team</p></li></Link>
            </ul>
            <div ref={hamContainerRef} className="ham_Container" onClick={toggleHamAnimationAndShowNavigationList}>
                    <div className="circle"></div>
                    <div className="ham_4">
                        <div className="middleBar"></div>
                    </div>
                <div className="hide"></div>
            </div>
            {showNavigationList && <nav className={navBarStyles.mobileNavigationList}>
                <ul className={navBarStyles.mobileNavigationListUl}>
                    <Link href='/'><li onClick={toggleHamAnimationAndShowNavigationList}><p>Home</p></li></Link>
                    <Link href='/#ourMessage'><li onClick={toggleHamAnimationAndShowNavigationList}><p>Our message</p></li></Link>
                    <Link href='/#projects'><li onClick={toggleHamAnimationAndShowNavigationList}><p>Projects</p></li></Link>
                    <Link href='/#customers'><li onClick={toggleHamAnimationAndShowNavigationList}><p>Customers</p></li></Link>
                    <Link href='/#aboutUs'><li onClick={toggleHamAnimationAndShowNavigationList}><p>About us</p></li></Link>
                    <Link href='/#bitteam0'><li onClick={toggleHamAnimationAndShowNavigationList}><p>bit team</p></li></Link>
                </ul>
            </nav>}
        </div>
    )
}