import Layout from './components/MyLayout';
import Link from 'next/link';

export default function Innovations() {
  return (
    <Layout>
      <div className="innovations">
      <h5>Home > The PetroGas Way</h5>
        <hr/>
        <h1> The PetroGas Way</h1>
        <img src="/innovations.jpg" alt="The petroGas Way"/>
        <br />
        <p><b>At PetroGas Group, we believe in operating the PetroGas Group Way. This defines the type of company that we are and will continue to be for our people, our clients, the environment and the communities in which we operate. It’s a global approach that every person believes in and it is our responsibility to work the PetroGas Group Way. </b></p>
<hr />

  <section>
<div>
  <p>The PetroGas Grroup Way is the combination of worldwide standards, tried and tested policies and procedures, pragmatic work guidelines and core behaviours that help us live and work by our values. It governs how we behave as colleagues and as a company.  It ensures we operate safely, succeed globally and our customers enjoy a world class service.

</p>
<p>The PetroGas Group Way is underpinned by our six core values.</p>
<ul>
<li>Health and safety</li>
<li>Valuing all people</li>
<li>Performance improvement</li>
<li>Environmental stewardship</li>
<li>Business integrity</li>
<li>Sustainable growth</li>
</ul>
<p>The PetroGas Group Way prioritises health and safety. Our worldwide activities are driven by our belief that we can achieve safe, effective and trouble-free operations 365 days a year. Our employees have the right to work in an accident free workplace and have the responsibility to create and maintain a safe environment. We proactively work to reduce the chances of harm to anyone.</p>
<p>We plan for trouble-free operations by ensuring we have the right people with the right training and competence, using the right equipment in the right way, on well planned, well led projects.</p>
<p>The PetroGas Group Way values all people. We employ, either directly or through our affiliates, more than 9,000 talented people across the world. Our team enjoys experience from every stage of the drilling life-cycle from engineering design, rig build, equipment manufacture, safety leadership to drilling operations.
</p>
<p>The PetroGas Group Way promotes a constructive corporate culture built on honest, open communication, consensus and positive decision making. We enjoy our work and celebrate success.</p>
</div>

<div>
  <p>The PetroGas Group Way drives continuous performance improvement. We strive to make each well better drilled than the last. We proactively measure our performance well by well. We analyse performance of every single job in order to recommend and promptly implement improvements. We learn from our achievements and successes to continually enhance operations.

World class training through DART® is a key contributor to continuous business improvement. DART® uses state-of-the-art drilling simulators to train crews. It offers a realistic and practical solution to train crews how to identify issues and deliver safe, effective and trouble-free drilling operations.

The PetroGas Group Way takes pride in environmental stewardship. Our international experience of working in more than 22 countries in the last 10 years includes working in the world’s most challenging environments.  

Wherever we operate we proactively work to reduce the chance of harm to the environment and take this responsibility seriously.

The PetroGas Group Way preserves business integrity under all circumstances. We have a reputation for principled behaviour and address potentially unethical practices with our robust ‘zero tolerance’ policy. We would rather not accept business, than win or facilitate it by paying bribes. Our people have explicit accountability to comply under our worldwide standards, policies and procedures.</p>

<p>
The PetroGas Group Way aims to achieve profitable and long term sustainable growth. We promote a culture of financial discipline across the group. We aim to invest wisely in new projects and operate our business as efficiently as possible to deliver a continuous improvement in our financial performance.
</p>
</div>
  </section>
  <hr />


      </div>
      <style jsx>{`
.innovations{
    margin: 5em;
}
.innovations img{
  width: 100%;
}
.innovations p{
  font-size: 1.2em;
  line-height: 1.5em;
  margin: 1em 0 1em 0;
}
.innovations h1{
  margin: 1em 0 0.2em 0;

}

.innovations h2{
  color:grey;
}

.innovations section{
  display: grid;
  grid-template-columns: auto auto;
  grid-column-gap: 4em;
  font-size: .9em;
          font-family: Arial;
          color: #002222;
}

.innovations section div ul li{
  list-style-type: disc;
  font-weight: bold;
  font-size: 1.1em;
}

.innovations section a{
  color: red;
}
.innovations section a::before{
    content: url("/read-icon.png");
    margin-right: .3em;
}
@media only screen and (max-width: 800px){
  .innovations{
    margin:1em;
    padding-top:30px;
  }
  .innovations section{
    display: block;
  }
}
   
    `}</style>
    </Layout>
  );
}