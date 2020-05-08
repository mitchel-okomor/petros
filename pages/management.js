import Layout from './components/MyLayout';

export default function Investors() {
  return (
    <Layout>
      <div className="investors">
      <h5>Home > The Managament Team</h5>
        <hr/>
<br />
<article>
  <section>
    <h2>The Managment Team</h2>
    <br/>
        </section>
        <section className="card-list">
         <div className="product-card">
            <img src="/petrov.jpeg" alt="Alex Petrov" />
            <h4><a href="">Alex Petrov</a></h4>
            <p>Chief Executive Officer</p>
        </div>
     
        <div className="product-card">
            <img src="/mabel.jpg" alt="image 1" />
            <h4><a href="">Mabel Hartman</a></h4>
            <p >Senior Vice President<br />Hr</p>
            
        </div>
        <div className="product-card">
            <img src="/john.jpeg" alt="image 1" />
            <h4><a href="">John Carlos</a></h4>
            <p >General Counsel</p>
         
        </div>
        <div className="product-card">
            <img src="/james.jpeg" alt="image 1" />
            <h4><a href="">James Hudson </a></h4>
            <p >President <br /> OffShore</p>
         
        </div>
        <div className="product-card">
            <img src="vyone.jpeg" alt="image 1" />
            <h4><a href="">Yvonne Fisher</a></h4>
            <p >President <br />Land</p>
         
        </div>
        <div className="product-card">
            <img src="/gale.jpeg" alt="image 1" />
            <h4><a href="">Gearge Gale</a></h4>
            <p >Group head of HSE and Operational Integrity</p> 
        </div>
  </section>
</article>

      </div>
      <style jsx>{`
.investors{
    margin: 5em;
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
  text-align:auto;
  margin:auto;
}

.card-list{
  text-align: auto;
  margin: auto;
  display:flex;
  flex-basis: auto;
  flex-wrap: wrap;
}
.product-card{
              display: inline-block;
              box-sizing: border-box;
              width: 20em;
              margin: 30px;
              background-color: grey;
              color: white;
              height: 27em;
          }

          .product-card:hover{
              background-color: red;
          }
          .product-card img{
              width: 100%;
              height: 65%;
              border: 8px solid lightgrey;
          }
          .product-card h4 {
    margin: 30px 0 15px;
  }
  .product-card a {
    color: white;
    text-decoration: none;
    padding-left: 8px;
    padding-right:8px;
  }
  .product-card p {
    line-height: 1.5;
    padding-left: 8px;
    padding-right:8px;
  }
 

@media only screen and (max-width: 800px){
  .investors{
    margin:1em;
    padding-top:30px;
  }
  .product-card{
              display: inline-block;
              box-sizing: border-box;
              width: 100%;
              margin: 20px;
              background-color: grey;
              color: white;
              height: 30em;
          }
}
   
    `}</style>
    </Layout>
  );
}