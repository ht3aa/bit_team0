import Link from 'next/link';
import { useState } from 'react';
import Db from '../db/db';
import projectsStyles from '../styles/Projects.module.css';

export default function Projects() {

  // variables section
  const [limitNumberOfVisibileProjects,  setLimitNumberOfVisibileProjects] = useState(6);
  
  
  // functions section
  function showMoreProjects() {
    setLimitNumberOfVisibileProjects(limitNumberOfVisibileProjects + 6);
  }
  
  
  // hooks section
  
  return (
    <>
        <section id="projects" className={projectsStyles.projectsTypes}>
          <div className={projectsStyles.type}>
            <div className={projectsStyles.smallBox + " greenBg"}></div>
            <p>Programming projects</p>
          </div>
          <div className={projectsStyles.type}>
            <div className={projectsStyles.smallBox + " redBg"}></div>
            <p>Desing projects</p>
          </div>
        </section>
        <section className={projectsStyles.projectsContainer}>
          {Db.projects.slice(0, limitNumberOfVisibileProjects).map(project => {
            return (
              <div key={ project.id } className={projectsStyles.box + ` ${ project.type }`}>
                <h3>{ project.title }</h3>
                <p>{ project.description }</p>
                {project.link && <Link href={ project.link } passHref><button className={projectsStyles.projectBtn}>{ project.btnText }</button></Link>}
              </div>
            )
          })}
        </section>
        {Db.projects.length > 6 && limitNumberOfVisibileProjects < Db.projects.length && <button onClick={showMoreProjects} className={projectsStyles.showMoreBtn}>Show more</button>}

    </>
  )
}