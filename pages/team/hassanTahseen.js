import hassanStyles from "../../styles/team/HassanTahseen.module.css";
import { useRouter } from 'next/router'
import { useRef } from "react";
import { useState } from "react";

export default function HassanTahseen() {
  const navigate = useRouter();
  const themesSpanRef = useRef();
  const [theme, setTheme] = useState({
    mainBgColor: "white",
    borderBoxColor: "#733BF2",
    waterMarkTextColor: "rgba(49, 27, 188, 0.1)",
    BoxsBgColor: "white",
    headerBoxColor: "black",
    headerBoxH1Color: "#733BF2",
    headerBoxBtnBgColor: "#733BF2",
    headerBoxBtnColor: "white",
    headerBoxBtnHoverBgColor: "#4E28A4",
    gobackBoxColor: "#733BF2",
    mainContentColor: "black",
    mainContentBtnColor: "white",
    mainContentBtnBgColor: "#733BF2",
    mainContentBtnHoverColor: "#4E28A4",
  })

  const customersOpinion = [`
    رأي بشار: حبيبي حسوني الحمدلله
    بخير دام شفت حروف منك مشتاقلك💜
    المشروع حلو وعجب الكل وقنعتهم بـ سمنرات سابقة الحمدلله وانت من تحجي ؏ مهندس حسن لا تگلي اتقيد بكلام 5 اسطر لأن انت عملاق وهالشي قليل بحقك من ناحية التعامل ف گايلك انت عبرت النجومية شغل حلو ومرتب واي فجوات ماكو وحتلو اكو ف ما قصرت وما گلت لا ما اكدر بالعكس حتى امور خارج المشروع سعيت بيها واتواصلت ويا كل الاطراف اتمنالك التوفيق بحياتك العلمية والمهنية يا حبيبي💜💜
  `];
  const friendsOpinion = [`
    mohfalih1@ في الأنتسغرام يقول: الصراحة أشوفك دتحاول تسوي الأحسن دائما تحاول تطور نفسك التفاصيل و هذا الصح الله يوفقك ان شاء الله.
    bme.17.050@ في الأنستغرام تقول: شخص طموح يريد يحقق هدف بباله, مو بس هالشي و انما يحب يساعد الغير و يحب يشوفهم مبدعين مثله.
    0toil@ تقول: شخص طموح.
    sadiq_allawi@ في الأنستغرام يقول: شخص يدفع الأشخاص الحوالي يقدمون اكثر و اكثر عاشت ايدك يا بطل.
    masha.23_s@ في الأنستغرام تقول: شخص طموح و ناجح, و عنده اصرار على التنفيذ أذا شي مافهمه او اذا فكرة جديدة عليه.
    t1b1rk@ في الأنستغرام تقول: شخص طموح.
    bol6_@ في الأنتسغرام تقول: طموح كلش و دايحفزني اشتغل على نفسي هم.
    Zahramaheed6@ في التيليكرام تقول: شخص جدي جدا, الفكرة ياخذها و يفكر بيها من كل الجوانب يلا يوافق عليها. القواعد الي مخليها كلش حلوة و منطقية وواقعية. ومهتم بحلمه بشكل كثير.
    `]
  const [customersTextLimt, setCustomersTextLimit] = useState(100);
  const [friendsTextLimt, setFriendsTextLimit] = useState(100);
  
  function showMoreOfCustomerOpinion() {
    setCustomersTextLimit(customersTextLimt + 200);
  }
  function showMoreOfFriendsOpinion() {
    setFriendsTextLimit(friendsTextLimt + 200);
  }

function selectTheme(target) {
    if(target.nodeName === "SPAN") {

        // for(let i = 0; i < themesSpanRef.current.children.length; i++) {
        //   themesSpanRef.current.children[i].classList.remove("themeActive");
        // }
        target.classList.add("themeActive");
        
        if(target.id === "blue") {
          setTheme({
            mainBgColor : "#023047",
            borderBoxColor : "white",
            waterMarkTextColor : "rgba(142, 198, 230, 0.05)",
            BoxsBgColor : "#023047",
            headerBoxColor : "white",
            headerBoxH1Color : "#8EC6E6",
            headerBoxBtnBgColor : "#FB8500",
            headerBoxBtnColor : "black",
            headerBoxBtnHoverBgColor : "#9e5502",
            gobackBoxColor : "white",
            mainContentColor : "white",
            mainContentBtnColor : "black",
            mainContentBtnBgColor : "#FB8500",
            mainContentBtnHoverColor : "#9e5502"
          })
          
          
        } else if (target.id === "purple") {
          setTheme({
            mainBgColor: "#010326",
            borderBoxColor: "#FF03C8",
            waterMarkTextColor: "rgba(49, 27, 188, 0.1)",
            BoxsBgColor: "#010326",
            headerBoxColor: "white",
            headerBoxH1Color: "#FF03C8",
            headerBoxBtnBgColor: "#FF03C8",
            headerBoxBtnColor: "white",
            headerBoxBtnHoverBgColor: "#AC0086",
            gobackBoxColor: "#FF03C8",
            mainContentColor: "white",
            mainContentBtnColor: "white",
            mainContentBtnBgColor: "#733BF2",
            mainContentBtnHoverColor: "#4E28A4",
          })           
        } else if (target.id === "white") {
          setTheme({
            mainBgColor: "white",
            borderBoxColor: "#733BF2",
            waterMarkTextColor: "rgba(49, 27, 188, 0.1)",
            BoxsBgColor: "white",
            headerBoxColor: "black",
            headerBoxH1Color: "#733BF2",
            headerBoxBtnBgColor: "#733BF2",
            headerBoxBtnColor: "white",
            headerBoxBtnHoverBgColor: "#4E28A4",
            gobackBoxColor: "#733BF2",
            mainContentColor: "black",
            mainContentBtnColor: "white",
            mainContentBtnBgColor: "#733BF2",
            mainContentBtnHoverColor: "#4E28A4",
          })           
        }
    }
  }



  return (
    <main style={{ backgroundColor: theme.mainBgColor }} className={hassanStyles.main}>
      <style jsx>{`
        #borderBox {
          border-color: ${theme.borderBoxColor}
        }
        #waterMark {
          color: ${theme.waterMarkTextColor}
        }
        #headerBox {
          background-color: ${theme.BoxsBgColor};
          color: ${theme.headerBoxColor};
        }
        #headerBox h1 {
          color: ${theme.headerBoxH1Color};
        }
        #headerBox button {
          background-color: ${theme.headerBoxBtnBgColor};
          color: ${theme.headerBoxBtnColor};
        }
        #headerBox button:hover,
        #headerBox button:focus {
          background-color: ${theme.headerBoxBtnHoverBgColor};
        }
        #themeBox {
          background-color: ${theme.BoxsBgColor}
        }
        #goBackBox {
          background-color: ${theme.BoxsBgColor};
          color: ${theme.gobackBoxColor};
        }
        #mainContent {
          color: ${theme.mainContentColor}
        }
        #mainContent button {
          background-color: ${theme.mainContentBtnBgColor};
          color: ${theme.mainContentBtnColor};
        }
        #mainContent button:hover,
        #mainContent button:focus {
          background-color: ${theme.mainContentBtnHoverColor};
        }
      `}</style>
      <div id="borderBox" className={hassanStyles.borderBox}>
        <div id="waterMark" className={hassanStyles.waterMark}>
          <span className={hassanStyles.waterMarkText}>Hassan</span>
          <span className={hassanStyles.waterMarkText}>Tahseen</span>
        </div>
        <header id="headerBox" className={hassanStyles.headerBox}>
          <h1>Hassan</h1>
          <h4>Programmer, Kind, Creative</h4>
          <a href="tel:07708246418"><button>Call Me</button></a>
        </header>
        <div id="themeBox" ref={themesSpanRef} onClick={(e) => selectTheme(e.target)} className={hassanStyles.themeBox}>
          <span id="blue" className="themeActive"></span>
          <span id="purple"></span>
          <span id="white"></span>
        </div>
        <div id="goBackBox" onClick={() => { navigate.push('/')}} className={hassanStyles.gobackBox}>
          <i  className="fa-solid fa-caret-left"></i>
        </div>
        {/* <div className={hassanStyles.statisticsBox}>
          <p className={hassanStyles.statistic}><span>+100</span>project</p>
          <p className={hassanStyles.statistic}><span>+100</span>project</p>
          <p className={hassanStyles.statistic}><span>+100</span>project</p>
          <p className={hassanStyles.statistic}><span>+100</span>project</p>
          <p className={hassanStyles.statistic}><span>+100</span>project</p>
          <p className={hassanStyles.statistic}><span>+100</span>project</p>
        </div> */}
        {/* <div className={hassanStyles.socialMediaBox}>
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-github"></i>
          <i className="fa-brands fa-linkedin"></i>
        </div> */}
        <div id="mainContent" className={hassanStyles.mainContent}>
          <div className={hassanStyles.contentLeft}>
            <div>
              <h2>Why Hassan?</h2>
              <p className="ar">{ friendsOpinion[0].substring(0, friendsTextLimt) }</p>
              {/* <p className="ar">{ friendsOpinion[1].substring(0, friendsTextLimt) }</p> */}
              <button onClick={showMoreOfFriendsOpinion}>Show more</button>
            </div>
            <div>
              <h2>Trust worthy?</h2>
              <p className="ar"> { customersOpinion[0].substring(0, customersTextLimt) }</p>
              <button onClick={showMoreOfCustomerOpinion}>Show more</button>
            </div>
          </div>

          <div className={hassanStyles.contentRight}>
            <div>
              <h2>his background?</h2>
              <p>hassan tahseen abd-alretha, 21 years old, lives in Iraq/Baghdad. student at the university of technology biomedical engineering department. from a family of 4 members, a passion for programming and learning it. allhamdallah.</p>
              <a href="tel:07708246418"><button>Call Me</button></a>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}