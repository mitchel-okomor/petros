import Layout from './components/MyLayout';
import Link from 'next/link';

export default function Contact() {
  return (
    <Layout>
      <div className="contact">
      <h5>Home > Contact us</h5>
       <hr/>
     
       <br />
       <br />
       <div className="address">

<div id="office1">
  <h3>United Kingdom</h3>
  <p>
 PetroGas Group Office:
Burnage, Levensulme M19
<br />
T: +44 7451 278 898
<br />
E: info@petrogasservices.com
<br />
  </p>
</div>

<div id="office2">
  <h3>Texas, USA</h3>
  <p>
  PetroGas Group Office:
<br/>
PO Box 971638, El Paso, TX.
<br />
79997-1638
<br />
+1 409 287 6101
  </p>
</div>


<div id="office3">
  <h3>Belgium</h3>
  <p>
  PetroGas Group Office:
<br/>
Street: Luchthavenlaan 409. City:
<br />
Millen. State/province/area: Limburg
<br />
Belgium
<br />
T: +32 460 220 832
<br />
E: info@petrogasservices.com
  </p>
</div>

       </div>
      </div>
      <style jsx>{`
        .address{
          display: grid;
          grid-template-columns: auto auto auto;
          grid-column-gap: 2em;
          text-align: center;
          margin:auto;
          min-height: 20em;
        }
.contact{
    margin: 5em;
    
}


.contact h2{
  color:grey;
}
.contact h3{
  color:grey;
}



@media only screen and (max-width: 800px) {
  .contact{
    margin: 1em;
}


.contact h3{
  color:grey;
}
.address{
  display: block;
  margin: auto;
  text-align:center;
}
 .address div{
   margin-bottom: 2.3em;
 }
 
}
    `}</style>
    </Layout>
  );
}