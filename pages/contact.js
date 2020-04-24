import Layout from './components/MyLayout';
import Link from 'next/link';

export default function Contact() {
  return (
    <Layout>
      <div className="contact">
      <h2>Home > Contact us</h2>
       <hr/>
       <h1>Our addresses</h1> 
       <div className="address">
<div id="office1">
  <h3>United Kingdom</h3>
  <p>
 PetroGas Group Office:
Burnage, Levensulme M19
<br />
<br />
T: +44 7451 278 898
<br />
E: info@petrogasservices.com
<br />
PO Box 971638, El Paso, TX.
<br />
79997-1638
<br />
+1 409 287 6101
  </p>
</div>

<div id="office2">
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
<br />
T: +32 460 220 832
<br />
E: info@petrogasservices.com
  </p>
</div>
       </div>
      </div>
      <style jsx>{`
.contact{
    margin: 5em;
}

.contact h1{
  text-align:center;
  margin-top: 2em;
}
.contact h2{
  color:grey;
}
.contact h3{
  color:grey;
}
.address{
  display: flex;
  margin: auto;
}
#office1{
  width: 30%;
  margin: 2em;
  padding: 2em;
}
#office2{
  width:30%;
  margin: 2em;
  padding: 2em;
}

@media only screen and (max-width: 800px) {
  .contact{
    margin: 1em;
    padding-top:30px;
}

.contact h1{
  text-align:center;
  margin-top: 2em;
}
.contact h3{
  color:grey;
}
.address{
  display: block;
  margin: auto;
}
#office1{
  width: 80%;
}
#office2{
  width:80%;
}
 
}
    `}</style>
    </Layout>
  );
}