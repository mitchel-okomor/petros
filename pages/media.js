import Layout from './components/MyLayout';

export default function Media() {
  return (
    <Layout>
      <div className="media">
      <h5>Home > Media> News</h5>
        <hr/>
       
        <img src="/business.jpg" alt="business and services"/>
        <p>Welcome to our media centre.  Stay up to date with the latest news from Petrogas Group.  If you are a journalist and have a media enquiry please contact:
</p>
The Group Head of communications <br />
        Tel:  +44 2030 957 641 <br />
        Email: communications@petrogasgrouponline.com
        <hr />
<br/>
<br />
<br />
<article>
<section className="news-section">
  <img src="/gale.jpeg" alt="media news image"/>
  <div className="article">
<h4>4th May, 2020</h4>
<h3>$15m contract awarded to petrogas & Benny William consultant</h3>
<p> $15m contract awarded to petrogas & Benny William consultant by Federal Ministry of Construction United Kingdom. <br />
Contractor: George Adam Gales</p>
  </div>

  </section>
  <hr />
  <section className="news-section">
  <img src="/martin.jpeg" alt="media news image"/>
  <div className="article">
<h4>28th January, 2020</h4>
<h3>PetroGas awards Vlat Martin Engineering Consults an $80million drilling contract
</h3>
<p> PetroGas awards Vlat Martin Engineering Consults an $80million drilling contract for three UK North Sea platforms. The contract will run for two years and will be renewed subject to review and agreement of terms by both parties.</p>
  </div>

  </section>
    <hr />
 
    <section className="news-section">
  <img src="/1.jpg" alt="media news image"/>
  <div className="article">
<h4>15th December 2019</h4>
<h3>PetroGas secures $850million of Land drilling contracts in Middle East, Africa and Europe. </h3>
<p>

PetroGas secures $850million of Land drilling contracts in Middle East, Africa and Europe. 
Petrogas today announces it's land drilling operation has won new contracts worth approximately $850million in the Middle East, Africa and Europe.</p>
  </div>

  </section>
  
    <hr />
    <section className="news-section">
  <img src="/2.jpg" alt="media news image"/>
  <div className="article">
<h4>18th October 2019</h4>
<h3>Bontec wins multi-million euro contract for nine 320t cluster slider drilling rigs.</h3>
<p>
Bontec, a subsidiary of Petrogas one of the world’s leading manufacturers of drilling rigs and oilfield equipment, today announces that it has signed a multi-million euro contract with the drilling division of INK-Service Group (“INK”) for the manufacture of nine latest generation 320t cluster slider rigs. INK is the oilfield service unit of Russia’s Irkutsk Oil Company.</p>
 
  </div>

  </section>
    <hr />
    <section className="news-section">
  <img src="/3.png" alt="media news image"/>
  <div className="article">
<h4>
3rd September, 2019</h4>
<h3>BRG wins Hypser Energy conceptual study contract</h3>
<p>
BRG, Petrogas's global provider of engineering and design solutions to the oil and gas, renewable and alternative energy sectors, is pleased to announce that it has won a new contract to carry out a conceptual study for Hypser Energy.</p>

  </div>

  </section>
    <hr />
    <section className="news-section">
  <img src="/4.jpg" alt="media news image"/>
  <div className="article">
<h4>5th July, 2019
</h4>
<h3>PetroGas Land Operation Wins $268m of New Drilling Contracts in Russia</h3>
<p>
Global drilling and engineering contractor PetroGas is delighted to announce that its land drilling operation has won three new contracts in Russia worth approximately $268m.</p>
  </div>

  </section>
    <hr />
</article>

      </div>
      <style jsx>{`
.media{
   margin: 3em;
}

.media img{
   width: 100%;
}

.media p{
  font-size: 1.2em;
  line-height: 1.4em;
  margin: 1em 0 1em 0;
}
.media h1{
  margin: 1em 0 0.2em 0;

}

.media h2{
  color:grey;
}

.news{
  margin:auto;
     min-height:400px;
      width:100%;
    

}
  .news ul{
    justify-content: space-between;
margin:0;
padding:0;
  }

  .news ul li{
    list-style: none;
    margin-bottom: 2em;
    padding:0;
    margin:0;
    box-shadow: 1px 1px gray;

  }

 .news ul li h3 ::before{
  content:"►︎";
  color: red;
  margin-right: .3em;
}
  
.news h2{
  margin: 30px;
  padding: 0;
font-size: 2em;
}
.news p{
    margin: 8px;
    padding:8px;
    line-height:1.5em;
    background-color: white;
    color: black;
  }

  .news-section{
    box-sizing:border-box;
    display:grid;
    grid-template-columns: 25% 75%;
    grid-gap: 3em;
   min-height:220px;

  }
  .news-section h3{
   width:95%;
    
  }
  .news-section h4{
   box-sizing:border-box;

  }
  .news-section p{
   box-sizing:border-box;
   width:95%;
   font-size: 1.5em;
  }
  .news-section a{
   color:red;
   font-size: 15px;
    
  }
  .news-section div{
   box-sizing:border-box;
    
  }
  .news-section img{
  width: 20em;
  height: 17em;
  }

  @media only screen and (max-width: 800px){
  .media{
    margin:1em;
    padding-top:30px;
  }
  .news-section{
    display:block;
  min-height:35em;
  width:100%;
  }
  .news-section div{
width: 100%;
    
  }
  .news-section img{
     width: 100%;

  }
}
   
    `}</style>
    </Layout>
  );
}