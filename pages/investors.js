import Layout from './components/MyLayout';
import Link from 'next/link';

export default function Investors() {
  return (
    <Layout>
      <div className="investors">
      <h2>Home > Investors</h2>
        <hr/>
        <img src="/investors.jpg" alt="Investors"/>
<br/>
<br />
<article>
  <section>
    <h2>Investors</h2>
    <p>
    PetroGas Group is one of the world’s leading drilling and engineering contractors working onshore and offshore.  The group consists of four divisions: Land, Offshore, RDS and Bentec. It operates approximately 110 drilling rigs in 20 countries, employing staff in Africa, Europe, Russia, the Middle East, the Caspian Sea and Canada.
 
<br />
<br />
PetroGas Group’s vision is to be recognised as the world’s most successful drilling and engineering contractor through measurable performance improvement, delivering safe, effective, trouble-free operations. 
    </p>
    <br />
    <hr />
    <br />
   <h2> Enquiries</h2>
   <br />
<h3>Jan Hetherington</h3>
Head of Corporate Development & Treasury
<br />Tel: +44 7451 278 898
<br />Email: investor.relations@petrogasservices.com
<br />
<br />
<hr />
  </section>
</article>

      </div>
      <style jsx>{`
.investors{
    margin: 5em;
}
.investors img{
  width: 100%;
}
    
.investors p{
  font-size: 1em;
  margin: 1em 0 1em 0;
}
.investors h1{
  margin: 1em 0 0.2em 0;

}

.investors h2{
  color:grey;
}
@media only screen and (max-width: 800px){
  .investors{
    margin:1em;
    padding-top:30px;
  }
}
   
    `}</style>
    </Layout>
  );
}