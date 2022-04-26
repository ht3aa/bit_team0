import Image from 'next/dist/client/image';
import bitteam0Styles from "../styles/bitteam0.module.css";

export default function Bitteam0() {
  return (
    <section id="bitteam0" className={bitteam0Styles.bitteam0Conatiner}>
        <div className={bitteam0Styles.member}>
          <a href="/bit_leader.jpg"><Image src="/bit_leader.jpg" alt="hassan tahseen" width="500" height="500"/></a>
          <div className={bitteam0Styles.contact}> 
            <a href="https://www.linkedin.com/in/hassan-tahseen-7a4530224/" target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin"></i></a>
            <a href="https://instagram.com/ht3aa" target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram"></i></a>
            <a href="https://github.com/ht3aa" target="_blank" rel="noreferrer"><i className="fa-brands fa-github"></i></a>
          </div>
        </div>    
    </section>
  )
}