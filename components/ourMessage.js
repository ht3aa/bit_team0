import Image from 'next/dist/client/image';
import messageStyles from '../styles/Message.module.css';

export default function OurMessage() {
  return (
    <>
        <section id="ourMessage" className={messageStyles.messageBox}>
          <h2>From Idea to project</h2>
          <h5>Every creative idea that comes to mind has no value if it isn&apos;t documented and transformed into a lived reality. We seize the opportunity to transform ideas into reality. We aim to provide services of various kinds to the public. The success of your idea and providing the necessary needs for that is our goal 💗.</h5>
          <a href="https://wa.me/message/IIQ6HP4HSSATC1" target="_blank" rel="noreferrer"><button>Message Us</button></a>
        </section>
        <section className={messageStyles.contacts}>
          <a href='https://instagram.com/bit_team0' target="_blank" rel="noreferrer">
            <div className={messageStyles.box}>
              <div className={messageStyles.socialMediaBox}>
                <h3></h3>
                <p>Instagram</p>
              </div>
              <div className={messageStyles.socialMediaImg}>
                <Image priority src={"/instagram.png"} alt="instagram" width="100%" height="100%"/>
              </div>
            </div>
          </a>
          <a href="https://www.facebook.com/BIT-for-services-106050172059404/" target="_blank" rel="noreferrer">
            <div className={messageStyles.box}>
              <div className={messageStyles.socialMediaBox}>
                <h3></h3>
                <p>Facebook</p>
              </div>
              <div className={messageStyles.socialMediaImg}>
                <Image src={"/facebook.png"} alt="facebook" width="100%" height="100%"/>
              </div>
            </div>
          </a>
          <a href="https://twitter.com/bit_team0?t=XSM8Of7E12p4lHC3o_X0cw&s=09" target="_blank" rel="noreferrer">
            <div className={messageStyles.box}>
              <div className={messageStyles.socialMediaBox}>
                <h3></h3>
                <p>Twitter</p>
              </div>
              <div className={messageStyles.socialMediaImg}>
                <Image src={"/twitter.png"} alt="twitter" width="100%" height="100%"/>
              </div>
            </div>
          </a>          
        </section>
    </>
  )
}