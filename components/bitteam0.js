import Image from 'next/dist/client/image';
import Link from 'next/dist/client/link';
import bitteam0Styles from "../styles/bitteam0.module.css";

export default function Bitteam0() {
  // variables section
  // functions section
  // hooks section
  
  return (
    <section id="bitteam0" className={bitteam0Styles.bitteam0Conatiner}>
        <div className={bitteam0Styles.member}>
            <a href="/hassanTahseen.jpg">
              <Image src="/hassanTahseen.jpg" alt="hassan tahseen" width="500" height="500"/>
            </a>
          <div className={bitteam0Styles.contact}> 
            <a href="https://www.linkedin.com/in/hassan-tahseen-7a4530224/" target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin"></i></a>
            <a href="https://instagram.com/ht3aa" target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram"></i></a>
            <a href="https://github.com/ht3aa" target="_blank" rel="noreferrer"><i className="fa-brands fa-github"></i></a>
            <Link href="/team0/hassanTahseen" passHref><a><button>details</button></a></Link>
          </div>
        </div>    
    </section>
  )
}