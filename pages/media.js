import Layout from './components/MyLayout';

export default function Media() {
  return (
    <Layout>
      <div className="media">
      <h5>Home > Media> News</h5>
        <hr/>
        <h1> Media</h1>
        <img src="/business.jpg" alt="business and services"/>
<br/>
<br />
<article>
  <section>
    <h2>Media</h2>
    <p>

    PetroGas Group owns and operates a fleet of 77 high quality land rigs ranging from highly mobile units to large rigs capable of drilling extended reach wells. We operate in a wide range of environments, from the extreme temperatures of the Sahara to the remote and arctic conditions of Siberia.

We have an ongoing rig building and upgrade programme which develops new and innovative rig designs helping us deliver our vision of operating safely, succeeding globally.

We are also innovating the software and hardware of our existing rigs to improve performance and deliver value through cost efficient well construction.

In addition, we offer the rental of a wide portfolio of high quality drilling and production equipment, maintained and certified in accordance with recognised industry standards and PetroGas's own worldwide standards. Our Equipment Rentals brochure can be found here.

“PetroGas Group has a strong track record in delivering value for our clients through cost effective well construction.  Our focus is on meeting our clients’ goals for their drilling projects, whilst ensuring safe, effective, trouble-free operations. Our presence in most key energy regions and our focus on developing local personnel means we are well placed to continue to successfully deliver for our clients whilst developing local value and skills in the countries in which we operate.”


    </p>
  </section>
  <section>
  <div className="news">
      <h2>Latest News</h2>
      <ul>
        <li>
          <h3>Contract Awarded to PetroGas and Benny William Consults</h3>
            <p> <b>Contractor</b>: George Gales
              <br />
             <b>Contract Amount</b> :   Ten Million US Dollars
              <br />
             <b> Beneficiary</b>:   PETROGAS & BENNY WILLIAM CONSULTANTS
              <br />
              <b> Ministry Involved</b> :   FEDERAL MINISTRY OF CONSTRUCTION
              <br />
              <b>Contract Desccription</b>:   Construction
              <br />
              <b> Contract Location</b>:  United Kingdom
              </p> 
              <p>27 April 2020</p>
        </li>
       
      </ul>
    </div>
  </section>
</article>

      </div>
      <style jsx>{`
.media{
   margin: 5em;
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

  @media only screen and (max-width: 800px){
  .media{
    margin:1em;
    padding-top:30px;
  }
}
   
    `}</style>
    </Layout>
  );
}