import hassanStyles from "../../styles/team/HassanTahseen.module.css";
import { useRouter } from 'next/router'
import Image from "next/image";
import { useRef } from "react";
import { useState } from "react";

export default function HassanTahseen() {
  const navigate = useRouter();
  const themesSpanRef = useRef();
  const [theme, setTheme] = useState({
    mainBgColor: "#023047",
    borderBoxColor: "white",
    waterMarkTextColor: "rgba(142, 198, 230, 0.05)",
    BoxsBgColor: "#023047",
    headerBoxColor: "white",
    headerBoxH1Color: "#8EC6E6",
    headerBoxBtnBgColor: "#FB8500",
    headerBoxBtnColor: "black",
    headerBoxBtnHoverBgColor: "#9e5502",
    gobackBoxColor: "white",
    mainContentColor: "white",
    mainContentBtnColor: "black",
    mainContentBtnBgColor: "#FB8500",
    mainContentBtnHoverColor: "#9e5502",
  })

function selectTheme(target) {
    if(target.nodeName === "SPAN") {
        const parent = target.parentNode;

        for(let i = 0; i < parent.children.length; i++) {
            parent.children[i].classList.remove("themeActive");
        }

        target.classList.add("themeActive");
        console.log(target.id)
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
          <h4>Strong, Kind, Better</h4>
          <button>Call Me</button>
        </header>
        <div id="themeBox" ref={themesSpanRef} onClick={(e) => selectTheme(e.target, themesSpanRef.current)} className={hassanStyles.themeBox}>
          <span id="blue" className="themeActive"></span>
          <span id="purple"></span>
          <span id="white"></span>
        </div>
        <div id="goBackBox" onClick={() => { navigate.push('/')}} className={hassanStyles.gobackBox}>
          <i className="fa-solid fa-caret-left"></i>
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
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the</p>
              <button>Call me</button>
            </div>
            <div>
              <h2>Why Hassan?</h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the</p>
              <button>Call me</button>
            </div>
          </div>

          <div className={hassanStyles.contentRight}>
            <div>
              <h2>Why Hassan?</h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the</p>
              <button>Call me</button>
            </div>
            <div>
              <h2>Why Hassan?</h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the</p>
              <button>Call me</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}