import Layout from "./components/MyLayout";
import Link from "next/link";

export default function Whoweare() {
  return (
    <Layout>
      <div className="who-we-are">
        <h5>Home > Who we are</h5>
        <hr />
        <h1> Who we are</h1>
        <img src="/whoweare.jpg" alt="Who we are" />
        <p>
     <b>  PetroGas Group is a leading provider of premium Oil and Gas and Construction services, specialist
          engineering and design and constructions for the international
         industries. Our breadth of services distinguishes us from
          the vast majority of international contractors.</b>
        </p>
        <article>
          <section>
            <p>
              <b>
              With over 130 years of experience, PetroGas Group is one of the
              world’s leading drilling and engineering contractors working
              onshore and offshore with a focus on safety, quality and
              operational performance. We operate approximately 110 drilling
              rigs in 20 countries, either directly or through our affiliates,
              employing people in Africa, Europe, Russia, the Middle East, the
              Caspian Sea and Canada.
              </b>
            </p>
          </section>
        </article>
        <hr />
        <section className="values">
        <div>
            <p>
            PetroGas Group has four world class divisions which provide premium rig services, specialist engineering and design, and land rig manufacture. These are Land, Offshore, Bentec and RDS.  
</p>
<p>
Our aim is to be recognised as the world’s most successful drilling and engineering contractor through measurable performance improvement, delivering safe, effective and trouble-free operations.
</p>
<p>
PetroGas Group's corporate headquarters are in Aberdeen where the Land, Offshore and RDS divisions operate from.  Bentec is headquartered at  its ​manufacturing facility in Bad Bentheim, Germany. ​
            </p>
          </div>
          <div>
            <p>
            We have offices in all of our key markets and countries of operation. and a very strong presence in the Middle East where we are one of the largest owners and operators of drilling rigs.
</p><p>
At the heart of our operations are our Core Values and the PetroGas Way which define the behaviours of our employees and how we work as a company. We are focused on training and retaining our highly-skilled employees, maintaining our strong health and safety track record and ensuring operational and technical integrity.
</p>
<p>
Our relationships with our clients and the quality of service that we provide are of paramount importance to us and we have worked hard to establish strong, long-term relationships with our customers, suppliers and local partners to secure our reputation as a premium drilling contractor.
            </p>
<br />

          </div>
        </section>
        <hr />
        <br />
        <div class="container">
  <div id="myCarousel" class="carousel slide" data-ride="carousel">
   

    {/* <!-- Wrapper for slides --> */}
    <div class="carousel-inner">

      <div class="item active">
        <img src="slide1.jpg" alt="image" />
        <div class="carousel-caption">
        </div>
      </div>

      <div class="item">
        <img src="slide2.jpg" alt="image"/>
        <div class="carousel-caption">
          
        </div>
      </div>
    
      <div class="item">
        <img src="slide1.jpg" alt="image" />
        <div class="carousel-caption">
        </div>
      </div>
  
    </div>

    {/* <!-- Left and right controls --> */}
    <a class="left carousel-control" href="#myCarousel" data-slide="prev">
      <span class="glyphicon glyphicon-chevron-left"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="right carousel-control" href="#myCarousel" data-slide="next">
      <span class="glyphicon glyphicon-chevron-right"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</div>

      </div>
      <style jsx>{`
        .who-we-are {
          min-height: 100vh;
          margin: 5em;
        }

        .who-we-are p {
          font-size: 1em;
          line-height: 1.5em;
          margin: 1em 0 1em 0;
        }
        .who-we-are h1 {
          margin: 1em 0 0.2em 0;
        }
        .who-we-are h2{
  color:grey;
}
        .who-we-are img {
          width: 100%;
        }

        .values{
          display: grid;
          grid-column-gap: 50px;
          grid-template-columns:auto auto;
        }
        .values div{
          margin: 1em 0 1em 0;
          
        }
        .values div p{
          font-size: .9em;
          font-family: Arial;
        }
        @media only screen and (max-width: 800px){
  .who-we-are{
    margin:1em;
    padding-top:30px;
  }
  .values{
          display: block;
        }

}
   
      `}</style>
    </Layout>
  );
}
