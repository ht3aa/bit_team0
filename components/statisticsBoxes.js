import heroStyles from '../styles/Hero.module.css';

export default function StatisticsBoxes() {
  return (
    <>
        <div className={heroStyles.box}>
            <div  className={heroStyles.merroirBox + " defaultMerrioBox"}>
              <h3></h3>
              <p>Customers</p>
            </div>
            <div className={heroStyles.bgCircle}></div>
          </div>                    
          <div className={heroStyles.box}>
            <div className={heroStyles.merroirBox + " defaultMerrioBox"}>
              <h3></h3>
              <p>Team Members</p>
            </div>
            <div className={heroStyles.bgCircle}></div>
          </div>                    
          <div className={heroStyles.box}>
            <div className={heroStyles.merroirBox + " defaultMerrioBox"}>
              <h3></h3>
              <p>Projects</p>
            </div>
            <div className={heroStyles.bgCircle}></div>
          </div>
          <div className={heroStyles.box}>
            <div className={heroStyles.merroirBox + " defaultMerrioBox"}>
              <h3></h3>
              <p>Followers on Instagram</p>
            </div>
            <div className={heroStyles.bgCircle}></div>
          </div>                    
          <div className={heroStyles.box}>
            <div className={heroStyles.merroirBox + " defaultMerrioBox"}>
              <h3></h3>
              <p>Followers on Facebook</p>
            </div>
            <div className={heroStyles.bgCircle}></div>
          </div>                    
          <div className={heroStyles.box}>
            <div className={heroStyles.merroirBox + " defaultMerrioBox"}>
              <h3></h3>
              <p>Services</p>
            </div>
            <div className={heroStyles.bgCircle}></div>
        </div>   
    </>
  )
}