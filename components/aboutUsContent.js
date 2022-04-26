import aboutUsStyles from "../styles/AboutUs.module.css";
import Image from 'next/dist/client/image';

export default function AboutUsContent() {

  return (
    <section id="aboutUs" className={aboutUsStyles.container}>
        <Image src="/company.jpg" width="400" height="400" alt="personal Img"/>
        <div className={aboutUsStyles.content}>
        <h2>Who are we?</h2>
        <p>
        4 young people from Iraq set a goal, which is to form a team that provides software solutions. The idea of the team stems from a common hobby, because it is the techniques of the virtual world, providing assistance and a love of learning and development. From the University of Technology, Hassan Tahseen 21-years-old a website programmer and team official,
            Malak Hassan is a 20-years-old medical engineering student at Al-Nahrain University responsible for accounting, human resources, and project management,
            Zahraa Majeed 20-years-old medical engineering student at the University of Technology responsible for Marketing Officer and Jafar Ali 21-years-old a medical engineering student at the University of Technology responsible for graphic design
        </p>
        </div>
    </section>
  )
}