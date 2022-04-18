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
import { useState } from 'react';
import axios from 'axios';


export default function Home() {

  const statisticNumberElement = useRef();
  const sliderRef = useRef();
  const [isMobileDevice, setIsMobileDevice] = useState(false);
  const [limitNumberOfVisibileProjects,  setLimitNumberOfVisibileProjects] = useState(6);
  const [limitNumberOfCustomersOpinion,  setLimitNumberOfCustomersOpinion] = useState(3);
  const projects = [
    {id: 0, type: "programmingBorder", title: "Covid-19", description: "(done with the help of Hussein telegram: @Hussein_SH09) In this project, We talk about what is the disease of the Coronavirus and what are the symptoms that will appear on the injured, treatment, and method of prevention. And the most important part is what are the types of vaccines used and available in all the governorates of Iraq, including Baghdad, showing the percentage of infected, recovery, and death cases, and the method of booking to receive the vaccine.", link: null , btnText: "See webiste"},


  ]
  const customersOpinion = [
    {id: 0, type: "programmingCustomerColor", img: "/me.jpg", name: "hassan", description: "bla bla bla"},
    {id: 1, type: "programmingCustomerColor", img: "/me.jpg", name: "hassan", description: "bla bla bla"},
    {id: 2, type: "programmingCustomerColor", img: "/me.jpg", name: "hassan", description: "bla bla bla"},
    {id: 3, type: "programmingCustomerColor", img: "/me.jpg", name: "hassan", description: "bla bla bla"},
  ]

  function showMoreProjects() {
    setLimitNumberOfVisibileProjects(limitNumberOfVisibileProjects + 6);
  }
  function showMoreCustomersOpinion() {
    setLimitNumberOfCustomersOpinion(limitNumberOfCustomersOpinion + 3);
  }
  async function handleSumbit(e) {

    const { data } = await axios.post("/api/sendEmail/", {
      subject: e.target.elements[0].value,  
      message: e.target.elements[1].value,
      customerEmail: e.target.elements[2].value,
    });
    console.log(data);
  }
  useEffect(() => {
    if(parseInt(screen.width) < 450) {
      console.log('a')
      setIsMobileDevice(true);
    }
    statisticNumber(statisticNumberElement.current);
  }, [])

  return (
    <div className={homeStyles.container}>
      <header id="hero" className={heroStyles.hero}>
        <div className={heroStyles.mainContent}>
          <h1>From idea to Project</h1>
          <h5>In Bit we have all you need to make your idea comes true</h5>
          <form className={heroStyles.mainContentForm} onSubmit={(e) => {
              e.preventDefault();
              handleSumbit(e)
            }}>
            <input type="text" placeholder="Project name or title"/>
            <textarea  rows="4" cols="50" placeholder="Project details and contanct information"></textarea>
            <input type="text" placeholder="Your email"/>
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
          <a href="https://wa.me/message/IIQ6HP4HSSATC1" target="_blank" rel="noreferrer"><button>Message Us</button></a>
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
                <p>Twitter</p>
              </div>
              <div className={messageStyles.socialMediaImg}>
                <Image src={"/twitter.png"} alt="twitter" width="100%" height="100%"/>
              </div>
            </div>
          </a>          
        </div>
        <div id="projects" className={projectsStyles.projectsTypes}>
          <div className={projectsStyles.type}>
            <div className={projectsStyles.smallBox + " programmingBorder" + " programmingBg"}></div>
            <p>Programming projects</p>
          </div>
        </div>
        <div className={projectsStyles.projectsContainer}>
          {projects.slice(0, limitNumberOfVisibileProjects).map(project => {
            return (
              <div key={ project.id } className={projectsStyles.box + ` ${ project.type }`}>
                <h3>{ project.title }</h3>
                <p>{ project.description }</p>
                {project.link && <button className={projectsStyles.projectBtn}>{ project.btnText }</button>}
              </div>
            )
          })}
        </div>
        {projects.length > 6 && limitNumberOfVisibileProjects < projects.length && <button onClick={showMoreProjects} className={projectsStyles.showMoreBtn}>Show more</button>}
      </main>
      <div id="customers" className={customersStyles.customersContainer}>
        <div ref={sliderRef} className={customersStyles.slider}>

          {!isMobileDevice && customersOpinion.map(opinion => {
            return (
              <div key={opinion.id} className={customersStyles.box}>
                <div className={customersStyles.customersImg}>
                  <Image src={ opinion.img } alt={ opinion.name } width="100%" height="100%"/>
                </div>
                <p><b className={opinion.type}>{ opinion.name } says:</b>{ opinion.description }</p>
              </div>
            )
          })}

          {isMobileDevice && customersOpinion.slice(0, limitNumberOfCustomersOpinion).map(opinion => {
            return (
              <div key={opinion.id} className={customersStyles.box}>
                <div className={customersStyles.customersImg}>
                  <Image src={ opinion.img } alt={ opinion.name } width="100%" height="100%"/>
                </div>
                <p><b className={opinion.type}>{ opinion.name } says:</b>{ opinion.description }</p>
              </div>
            )
          })}
  
        </div>
        

      </div>
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
