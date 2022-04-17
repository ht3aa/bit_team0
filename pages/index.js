import { useRef } from 'react'
import homeStyles from '../styles/Home.module.css';
import heroStyles from '../styles/Hero.module.css';
import messageStyles from '../styles/Message.module.css';
import projectsStyles from '../styles/Projects.module.css';
import customersStyles from '../styles/Customers.module.css';
import statisticNumber from '../globalFunctions/statisticNumber';
import { useEffect } from 'react';
import Image from 'next/dist/client/image';
import aboutUsStyles from "../styles/AboutUs.module.css";
import { forward, backward } from '../globalFunctions/slider';


export default function Home() {

  const statisticNumberElement = useRef();
  const sliderRef = useRef();
  
  useEffect(() => {
    statisticNumber(statisticNumberElement.current);
  }, [])

  return (
    <div className={homeStyles.container}>
      <header className={heroStyles.hero}>
        <div className={heroStyles.mainContent}>
          <h1>From idea to Project</h1>
          <h5>In Bit we have all you need to make your idea comes true</h5>
          <form className={heroStyles.mainContentForm}>
            <input type="text" placeholder="Your name"/>
            <input type="text" placeholder="Your email"/>
            <input type="text" placeholder="Your password"/>
            <button>Send</button>
          </form>
        </div>
        <i className="fa-solid fa-arrow-down"></i>
        <div ref={statisticNumberElement} className={heroStyles.statistics}>
          <div className={heroStyles.box}>
            <div  className={heroStyles.merroirBox}>
              <h3></h3>
              <p>Customers</p>
            </div>
            <div className={heroStyles.bgCircle}></div>
          </div>                    
          <div className={heroStyles.box}>
            <div className={heroStyles.merroirBox}>
              <h3></h3>
              <p>Team Members</p>
            </div>
            <div className={heroStyles.bgCircle}></div>
          </div>                    
          <div className={heroStyles.box}>
            <div className={heroStyles.merroirBox}>
              <h3></h3>
              <p>Projects</p>
            </div>
            <div className={heroStyles.bgCircle}></div>
          </div>
          <div className={heroStyles.box}>
            <div className={heroStyles.merroirBox}>
              <h3></h3>
              <p>Followers on Instagram</p>
            </div>
            <div className={heroStyles.bgCircle}></div>
          </div>                    
          <div className={heroStyles.box}>
            <div className={heroStyles.merroirBox}>
              <h3></h3>
              <p>Followers on Facebook</p>
            </div>
            <div className={heroStyles.bgCircle}></div>
          </div>                    
          <div className={heroStyles.box}>
            <div className={heroStyles.merroirBox}>
              <h3></h3>
              <p>Services</p>
            </div>
            <div className={heroStyles.bgCircle}></div>
          </div>                    
        </div>
      </header>
      <main>
        <div id="ourMessage" className={messageStyles.messageBox}>
          <h2>From Idea to project</h2>
          <h5>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the  standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</h5>
          <button>Message Us</button>
        </div>
        <div className={messageStyles.contacts}>
          <a href='https://instagram.com/bit_team0' target="_blank" rel="noreferrer">
            <div className={messageStyles.box}>
              <div className={messageStyles.socialMediaBox}>
                <h3></h3>
                <p>Instagram</p>
              </div>
              <div className={messageStyles.socialMediaImg}>
                <Image src={"/instagram.png"} alt="instagram" width="100%" height="100%"/>
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
                <p>Twiter</p>
              </div>
              <div className={messageStyles.socialMediaImg}>
                <Image src={"/twitter.png"} alt="twitter" width="100%" height="100%"/>
              </div>
            </div>
          </a>          
        </div>
        <div id="projects" className={projectsStyles.projectsTypes}>
          <div className={projectsStyles.type}>
            <div className={projectsStyles.smallBox + " programmingPrj"}></div>
            <p>Programming projects</p>
          </div>
        </div>
        <div className={projectsStyles.projectsContainer}>
          <div className={projectsStyles.box + " programmingPrj"}>
            <h3>Logo</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the  
            </p>
          </div>
        </div>
        <button className={projectsStyles.showMoreBtn}>Show more</button>
      </main>
      <div id="customers" className={customersStyles.customersContainer}>
        <div ref={sliderRef} className={customersStyles.slider}>
          <div className={customersStyles.box}>
            <div className={customersStyles.customersImg}>
              <Image src={"/me.jpg"} alt="instagram" width="100%" height="100%"/>
            </div>
            <p><b>Bob says:</b> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the  standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make  </p>
          </div>
          <div className={customersStyles.box}>
            <div className={customersStyles.customersImg}>
              <Image src={"/me.jpg"} alt="instagram" width="100%" height="100%"/>
            </div>
            <p><b>Bob says:</b> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the  standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make  </p>
          </div>
          <div className={customersStyles.box}>
            <div className={customersStyles.customersImg}>
              <Image src={"/me.jpg"} alt="instagram" width="100%" height="100%"/>
            </div>
            <p><b>Bob says:</b> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the  standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make  </p>
          </div>
          <div className={customersStyles.box}>
            <div className={customersStyles.customersImg}>
              <Image src={"/me.jpg"} alt="instagram" width="100%" height="100%"/>
            </div>
            <p><b>Bob says:</b> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the  standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make  </p>
          </div>
  
        </div>
        
      </div>
      <div className={customersStyles.btnGroup}>
        <button onClick={() => {
          backward(sliderRef.current);
        }}><i className="fa-solid fa-arrow-left"></i></button>
        <button onClick={() => {
          forward(sliderRef.current);
        }}><i className="fa-solid fa-arrow-right"></i></button>
      </div>
      <div id="aboutUs" className={aboutUsStyles.container}>
        <Image src="/me.jpg" width="400" height="400" alt="personal Img"/>
        <div className={aboutUsStyles.content}>
          <h1>Who are we?</h1>
          <p>Lorem</p>
        </div>
      </div>
      <footer>&copy; made by @bit_team0</footer>
    </div>
  )
}
