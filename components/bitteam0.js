import Image from 'next/dist/client/image';
import bitteam0Styles from "../styles/bitteam0.module.css";

export default function Bitteam0() {
  return (
    <section id="bitteam0" className={bitteam0Styles.bitteam0Conatiner}>
        <a href="/bit_leader.jpg"><Image src="/bit_leader.jpg" alt="hassan tahseen" width="500" height="500"/></a>
    </section>
  )
}