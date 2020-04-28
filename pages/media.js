import Layout from './components/MyLayout';

export default function Media() {
  return (
    <Layout>
      <div className="media">
      <h5>Home > Media> News</h5>
        <hr/>
       
        <img src="/business.jpg" alt="business and services"/>
        <p>Welcome to our media centre.  Stay up to date with the latest news from KCA Deutag.  If you are a journalist and have a media enquiry please contact:
</p>
PetroGas Group Head Office, <br />
         United Kingdom.<br />
        Tel:  +44 7451 278 898 <br />
        Email: communications@petrogasservices.com
<br/>
<br />
<article>
 
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