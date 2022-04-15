import { useRef } from 'react'
import homeStyles from '../styles/Home.module.css'
import statisticNumber from '../globalFunctions/statisticNumber';
import { useEffect } from 'react';
import Image from 'next/dist/client/image';
import aboutUsStyles from "../styles/AboutUs.module.css";
export default function Home() {

  const statisticNumberElement = useRef();

  useEffect(() => {
    statisticNumber(statisticNumberElement.current);
  }, [])

  return (
    <div className={homeStyles.container}>
      <header className={homeStyles.hero}>
        <div className={homeStyles.mainContent}>
          <h1>From idea to Project</h1>
          <h5>In Bit we have all you need to make your idea comes true</h5>
          <form className={homeStyles.mainContentForm}>
            <input type="text" placeholder="Your name"/>
            <input type="text" placeholder="Your email"/>
            <input type="text" placeholder="Your password"/>
            <button>Send</button>
          </form>
        </div>
        <i className="fa-solid fa-arrow-down"></i>
        <div ref={statisticNumberElement} className={homeStyles.statistics}>
          <div className={homeStyles.box}>
            <div  className={homeStyles.merroirBox}>
              <h3></h3>
              <p>Customers</p>
            </div>
            <div className={homeStyles.bgCircle}></div>
          </div>                    
          <div className={homeStyles.box}>
            <div className={homeStyles.merroirBox}>
              <h3></h3>
              <p>Team Members</p>
            </div>
            <div className={homeStyles.bgCircle}></div>
          </div>                    
          <div className={homeStyles.box}>
            <div className={homeStyles.merroirBox}>
              <h3></h3>
              <p>Projects</p>
            </div>
            <div className={homeStyles.bgCircle}></div>
          </div>
          <div className={homeStyles.box}>
            <div className={homeStyles.merroirBox}>
              <h3></h3>
              <p>Followers on Instagram</p>
            </div>
            <div className={homeStyles.bgCircle}></div>
          </div>                    
          <div className={homeStyles.box}>
            <div className={homeStyles.merroirBox}>
              <h3></h3>
              <p>Followers on Facebook</p>
            </div>
            <div className={homeStyles.bgCircle}></div>
          </div>                    
          <div className={homeStyles.box}>
            <div className={homeStyles.merroirBox}>
              <h3></h3>
              <p>Services</p>
            </div>
            <div className={homeStyles.bgCircle}></div>
          </div>                    
        </div>
      </header>
      <main>
        <div className={homeStyles.merroirBoxMain}>
          <h2>From Idea to project</h2>
          <h5>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the  standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</h5>
          <button>Message Us</button>
        </div>
        <div className={homeStyles.contacts}>
          <div className={homeStyles.box}>
            <div className={homeStyles.merroirBox}>
              <h3></h3>
              <p>Instagram</p>
            </div>
            <div className={homeStyles.socialMedia}>
              <Image src={"/instagram.png"} alt="instagram" width="100%" height="100%"/>
            </div>
          </div>
          <div className={homeStyles.box}>
            <div className={homeStyles.merroirBox}>
              <h3></h3>
              <p>Instagram</p>
            </div>
            <div className={homeStyles.socialMedia}>
              <Image src={"/instagram.png"} alt="instagram" width="100%" height="100%"/>
            </div>
          </div>
          <div className={homeStyles.box}>
            <div className={homeStyles.merroirBox}>
              <h3></h3>
              <p>Instagram</p>
            </div>
            <div className={homeStyles.socialMedia}>
              <Image src={"/instagram.png"} alt="instagram" width="100%" height="100%"/>
            </div>
          </div>
        </div>
        <div className={homeStyles.projectsTypes}>
          <div className={homeStyles.type1}>
            <div className={homeStyles.merroirBoxProject + " programmingPrj"}></div>
            <p>Programming projects</p>
          </div>
          <div className={homeStyles.type1}>
            <div  className={homeStyles.merroirBoxProject + " arduinoPrj"}></div>
            <p>Arduino projects</p>
          </div>
          <div className={homeStyles.type1}>
            <div className={homeStyles.merroirBoxProject + " designPrj"}></div>
            <p>Design projects</p>
          </div>
        </div>
        <div className={homeStyles.projectsContainer}>
          <div className={homeStyles.merroirBoxProject + " designPrj"}>
            <h3>Logo</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the  
            </p>
          </div>
          <div className={homeStyles.merroirBoxProject + " programmingPrj"}>
            <h3>Logo</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the  
            </p>
          </div>
          <div className={homeStyles.merroirBoxProject + " arduinoPrj"}>
            <h3>Logo</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the  
            </p>
          </div>
        </div>
        <button className={homeStyles.showMoreBtn}>Show more</button>
      </main>
      <div className={homeStyles.customersContainer}>
        <div className={homeStyles.slider}>
          <div className={homeStyles.box}>
            <div className={homeStyles.customersImg}>
              <Image src={"/me.jpg"} alt="instagram" width="100%" height="100%"/>
            </div>
            <div className={homeStyles.merroirBox}>
              <p><b>Bob says:</b> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the  standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make  </p>
            </div>
            <div className={homeStyles.bgCircle}></div>
          </div>
        </div>
      </div>
      <div id="aboutUs" className={aboutUsStyles.container}>
        <Image src="/me.jpg" width="400" height="400" alt="personal Img"/>
        <div className={aboutUsStyles.content}>
          <h1>من نحن</h1>
          <p>أنا الطالب علي محمد سلمان أدرس في جامعة الأمام الكاظم (عليه السلام) قسم هندسة تقنيات الحاسوب. هذا الموقع يهدف الى توفير البيئة التعليمية لبرنامج الأكسل لتجعلك قادر على فهم و تعلم دوال الأكسل بسهولة و بسرعة عن طريق توفير ملفات و فيديوات يتم فيها شرح اساسيات و مبادئ تعلم دوال الأكسل. تم الأشراف من قبل أ.م.د مؤيد حنون سلمان</p>
          <div>
              <a href="https://instagram.com/alimuhammed9" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>
              <a href="https://t.me/Ali_M14" target="_blank" rel="noreferrer"><i className="fab fa-telegram"></i></a>
          </div>
        </div>
      </div>
      <footer>&copy; made by @bit_team0</footer>
    </div>
  )
}
