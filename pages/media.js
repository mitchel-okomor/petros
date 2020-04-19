import Layout from './components/MyLayout';
import Link from 'next/link';

export default function Media() {
  return (
    <Layout>
      <div className="media">
      <h2>Home > Media> News</h2>
        <hr/>
        <h1> Media</h1>
        <img src="/business.jpg" alt="business and services"/>
<br/>
<br />
<article>
  <section>
    <h2>Media</h2>
    <p>

KCA Deutag owns and operates a fleet of 77 high quality land rigs ranging from highly mobile units to large rigs capable of drilling extended reach wells. We operate in a wide range of environments, from the extreme temperatures of the Sahara to the remote and arctic conditions of Siberia.

We have an ongoing rig building and upgrade programme which develops new and innovative rig designs helping us deliver our vision of operating safely, succeeding globally.

We are also innovating the software and hardware of our existing rigs to improve performance and deliver value through cost efficient well construction.

In addition, we offer the rental of a wide portfolio of high quality drilling and production equipment, maintained and certified in accordance with recognised industry standards and KCA Deutag's own worldwide standards. Our Equipment Rentals brochure can be found here.

“KCA Deutag has a strong track record in delivering value for our clients through cost effective well construction.  Our focus is on meeting our clients’ goals for their drilling projects, whilst ensuring safe, effective, trouble-free operations. Our presence in most key energy regions and our focus on developing local personnel means we are well placed to continue to successfully deliver for our clients whilst developing local value and skills in the countries in which we operate.”


    </p>
  </section>
  <section>
  <div className="news">
      <h2>Latest News</h2>
      <ul>
        <li>
          <Link href="#">
            <a>
              CNRI awards KCA Deutag a multi-million pound drilling contract for
              three UK North Sea platforms<p>2 December 2019</p>
            </a>
          </Link>
        </li>
        <li>
          <Link href="#">
            <a>
              KCA Deutag secures $460m of land drilling contracts in the Middle
              East, Africa and Europe<p>2 December 2019</p>
            </a>
          </Link>
        </li>
        <li>
          <Link href="#">
            <a>
              Bentec wins multi-million euro contract for seven 320t cluster
              slider drilling rigs<p>2 December 2019</p>
            </a>
          </Link>
        </li>
      </ul>
      <Link href="#" className="viel-all-news">
        <a>View all news</a>
      </Link>
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
  font-size: 1em;
  line-heigth: 1em;
  margin: 1em 0 1em 0;
}
.media h1{
  margin: 1em 0 0.2em 0;

}


.news{
  margin:auto;
  text-align:center;
     min-height:400px;
      width:70%;
}
  .news ul{
    display:flex;
    flex-wrap: wrap;
    justify-content: space-between;
margin:0;
padding:0;
    
  }

  .news ul li{
    list-style: none;
    margin: 0;
    padding:0;
  }
  .news ul li a{
    margin: 0;
    padding:0;
    width:15em;
    background-color: white;
    color: black;
  }
  .news ul li a:hover{
  text-decoration: underline;
  }
.news h2{
  margin: 30px;
  padding: 0;
font-size: 2em;
}
.news p{
    margin: 8px;
    padding:8px;
    width:wrap-content;
    background-color: white;
    color: black;
  }
    `}</style>
    </Layout>
  );
}