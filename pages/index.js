import { useRef, useState, useEffect } from 'react'
import homeStyles from '../styles/Home.module.css';
import heroStyles from '../styles/Hero.module.css';
import customersStyles from '../styles/Customers.module.css';
import Image from 'next/dist/client/image';
import { forward, backward } from '../globalFunctions/slider';
import axios from 'axios';
import { customersOpinion } from '../db/db';
import AboutUsContent from '../components/aboutUsContent';
import StatisticsBoxes from '../components/statisticsBoxes';
import OurMessage from '../components/ourMessage';
import Projects from '../components/projects';
import Bitteam0 from '../components/bitteam0';
import NavBar from '../components/navbar/navBar';


export default function Home() {

  const statisticNumberElement = useRef();
  const sliderRef = useRef();
  const [isMobileDevice, setIsMobileDevice] = useState(false);
  const [limitNumberOfCustomersOpinion,  setLimitNumberOfCustomersOpinion] = useState(3);
  const [notificationType, setNotificationType] = useState("");
  const [notificationMessage, setNotificationMessage] = useState("");
  const [showUpButton, setShowUpButton] = useState(false);
  
  function showMoreCustomersOpinion() {
    setLimitNumberOfCustomersOpinion(limitNumberOfCustomersOpinion + 3);
  }

  async function handleSumbit(e) {
    for(let i = 0; i < e.target.elements.length - 1; i++) {
      if(e.target.elements[i].value === "") {
        setNotificationType("redColor");
        setNotificationMessage("some fields are empty");
        return;
      } 
    }

    if(!e.target.elements[2].value.includes("@")) {
      setNotificationType("redColor");
      setNotificationMessage("A correct email must provied");
      return;
    }
    const { data } = await axios.post("/api/sendEmail/", {
      subject: e.target.elements[0].value,  
      message: e.target.elements[1].value,
      customerEmail: e.target.elements[2].value,
    });

    if(data !== "done") {
      setNotificationType("redColor");
      setNotificationMessage("something went wrong");
    } else {
      setNotificationType("greenColor");
      setNotificationMessage("email sent to bit successfully, we will contact you as soon as possible");
    }
    
  }

  function upButton() {
    if(window.scrollY > 300) {
      setShowUpButton(true);
    } else {
      setShowUpButton(false);
    }
  }

  useEffect(() => {
    document.removeEventListener("scroll", upButton);
    document.addEventListener("scroll", upButton);
  }, [])

  useEffect(() => {
    if(parseInt(screen.width) < 450) {
      setIsMobileDevice(true);
    }
  }, [])

  return (
    <>
      <NavBar />
      <div className={homeStyles.container}>
        <header id="hero" className={heroStyles.hero}>
          <div className={heroStyles.mainContent}>
            <h1>From idea to Project</h1>
            <h5>In Bit, we have all you need to make your idea comes true. (For now, programming solutions and building full-stack websites are available)</h5>
            <form className={heroStyles.mainContentForm} onSubmit={(e) => {
                e.preventDefault();
                handleSumbit(e)
              }}>
              <input type="text" placeholder="Enter project name or title"/>
              <textarea  rows="4" cols="50" placeholder="Enter project details and contanct information"></textarea>
              <input type="text" placeholder="Enter your email"/>
              <button>Send</button>
              <p className={heroStyles.notification + ` ${notificationType}`}>{notificationMessage}</p>
            </form>
          </div>
          <div ref={statisticNumberElement} className={heroStyles.statistics}>
            <StatisticsBoxes />
          </div>
        </header>
        <main>
          <OurMessage />
          <Projects />
        </main>
        <section id="customers" className={customersStyles.customersContainer}>
          <div ref={sliderRef} className={customersStyles.slider}>
            {!isMobileDevice && customersOpinion.map(opinion => {
              return (
                <div key={opinion.id} className={customersStyles.box + " defaultMerrioBox"}>
                  {opinion.img && <div className={customersStyles.customersImg}>
                    <Image src={ opinion.img } alt={ opinion.name } width="100%" height="100%"/>
                  </div>}
                  <p className={opinion.langType}><b className={opinion.type}>{ opinion.name }</b>{ opinion.description }</p>
                </div>
              )
            })}

            {isMobileDevice && customersOpinion.slice(0, limitNumberOfCustomersOpinion).map(opinion => {
              return (
                <div key={opinion.id} className={customersStyles.box + " defaultMerrioBox"}>
                {opinion.img && <div className={customersStyles.customersImg}>
                    <Image src={ opinion.img } alt={ opinion.name } width="100%" height="100%"/>
                  </div>}
                  <p className={opinion.langType}><b className={opinion.type}>{ opinion.name }</b>{ opinion.description }</p>
                </div>
              )
            })}
          </div>
        </section>
        {isMobileDevice && customersOpinion.length > 3 && limitNumberOfCustomersOpinion < customersOpinion.length && <div className={customersStyles.showMoreBtnContainer}>
          <button onClick={showMoreCustomersOpinion} className={customersStyles.showMoreBtn}>Show more</button>
        </div>}

        {!isMobileDevice &&<div className={customersStyles.btnGroup}>
          <button onClick={() => {
            backward(sliderRef.current);
          }}><i className="fa-solid fa-arrow-left"></i></button>
          <button onClick={() => {
            forward(sliderRef.current);
          }}><i className="fa-solid fa-arrow-right"></i></button>
        </div>}

        <AboutUsContent />
        <Bitteam0 />
        {showUpButton && <button onClick={() => window.scrollTo(0, 0)} className="upButton">
          <i className="fa-solid fa-arrow-up"></i>
        </button>}
        <footer>&copy; made by @bit_team0</footer>
      </div>
    </>
  )
}
