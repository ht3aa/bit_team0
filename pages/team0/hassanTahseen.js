import hassanStyles from "../../styles/team/HassanTahseen.module.css";
import { useRouter } from 'next/router'
import { useRef } from "react";
import { useState } from "react";
import Db from "../../db/db";

export default function HassanTahseen() {
  
  // variables section
  const navigate = useRouter();
  const themesSpanRef = useRef();
  const [theme, setTheme] = useState({
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
  const [customersTextLimit, setCustomersTextLimit] = useState(1);
  const [friendsTextLimit, setFriendsTextLimit] = useState(1);
  
  
  // functions section
  function showMoreOfCustomerOpinion() {
    setCustomersTextLimit(customersTextLimit + 1);
  }
  function showMoreOfFriendsOpinion() {
    setFriendsTextLimit(friendsTextLimit + 1);
  }

  function selectTheme(target) {
    if(target.nodeName === "SPAN") {

        if(target.id === "blue") {
          setTheme({
            mainBgColor : "#023047",
            borderBoxColor : "#8EC6E6",
            waterMarkTextColor : "rgba(142, 198, 230, 0.05)",
            BoxsBgColor : "#023047",
            headerBoxColor : "white",
            headerBoxH1Color : "#8EC6E6",
            headerBoxBtnBgColor : "#FB8500",
            headerBoxBtnColor : "black",
            headerBoxBtnHoverBgColor : "#9e5502",
            gobackBoxColor : "#8EC6E6",
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

  // hooks section

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
        #mainContent span {
          color: ${theme.headerBoxH1Color};
          font-weight: bold;
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
          <span id="blue"></span>
          <span id="purple"></span>
          <span id="white"></span>
        </div>
        <div id="goBackBox" onClick={() => { navigate.push('/')}} className={hassanStyles.gobackBox}>
          <i  className="fa-solid fa-caret-left"></i>
        </div>
        <div id="mainContent" className={hassanStyles.mainContent}>
          <div className={hassanStyles.contentLeft}>
            <div>
              <h2>Friends Opinion:</h2>
              {Db.team0.hassanTahseen.friendsOpinionAr.slice(0, friendsTextLimit).map(opinion => {
                return (
                  <p key={ opinion.id } className="ar">
                    <span>{ opinion.username } </span>
                    { opinion.message }
                  </p>
                )
              })}
              {Db.team0.hassanTahseen.friendsOpinionEn.slice(0, friendsTextLimit).map(opinion => {
                return (
                  <p key={ opinion.id }>
                    <span>{ opinion.username } </span>
                    { opinion.message }
                  </p>
                )
              })}              
              <button onClick={showMoreOfFriendsOpinion}>Show more</button>
            </div>
            <div>
              <h2>Customers Opinion</h2>
              {Db.team0.hassanTahseen.customerOpinonAr.slice(0, customersTextLimit).map(opinion => {
                return (
                  <p key={ opinion.id } className="ar">
                    <span>{ opinion.username } </span>
                    { opinion.message }
                  </p>
                )
              })}   

              <button onClick={showMoreOfCustomerOpinion}>Show more</button>
            </div>
          </div>

          <div className={hassanStyles.contentRight}>
            <div>
              <h2>His background</h2>
              <p>hassan tahseen abd-alretha, 21 years old, lives in Iraq/Baghdad. student at the university of technology biomedical engineering department. from a family of 4 members, a passion for programming and learning it. allhamdallah.</p>
              <a href="tel:07708246418"><button>Call Me</button></a>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}