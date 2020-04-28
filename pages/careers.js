import Layout from "./components/MyLayout";
import Link from "next/link";

export default function Careers() {
  return (
    <Layout>
      <div className="careers">
        <h5>Home > Careers</h5>
        <hr />
      <h1>Why work for PetroGas Group</h1>
        <br />
        <br />
        <img src="/careers.jpg" alt="career Image"/>
        <br />
        <br />
        <p>PetroGas Group is one of the world’s leading drilling and engineering contractors.  We operate in approximately 20 countries across the world. 
          Our corporate headquarters are in Aberdeen, Scotland where the Land, Offshore and RDS divisions operate from. 
          Our business headquartered is in Bad Bentheim (United Kingdom). We also have offices in all of our key markets and countries of operation. </p> 
        <br />
        <br />
        <p>Petros Group recognises that managing talent is vital to achieving continued growth. 
          We will manage career development to ensure that our employees have every opportunity to develop their skills and pursue ambitions. 
          We promote a culture in which employees are encouraged to communicate openly and honestly on any issues, concerns or suggestions they may have.</p>
          <br />
        <br />
        <p>
        We reward our employees as we know their commitment, dedication and outstanding talent make PetroGas Group the company it is today.  
        We seek more than just technical competence. 
        We have a world leading HSE culture and we look for people with exemplary supervisory skills who can demonstrate a passion and commitment to safety through first class leadership and a proven track record. 
        </p>
       
      </div>
      <style jsx>{`
        .careers {
          margin: 5em;
          min-height: 60vh;
        }
        .careers h2 {
          color: grey;
        }
       
        @media only screen and (max-width: 800px) {
          .careers {
            margin: 1em;
            padding-top: 30px;
          }

          .careers img{
            width: 100%;
          }
        }
      `}</style>
    </Layout>
  );
}
