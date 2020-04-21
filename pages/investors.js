import Layout from './components/MyLayout';
import Link from 'next/link';

export default function Investors() {
  return (
    <Layout>
      <div className="investors">
      <h2>Home > Investors</h2>
        <hr/>
        <h1> Investors</h1>
        <img src="/investors.jpg" alt="Investors"/>
<br/>
<br />
<article>
  <section>
    <h2>Investors</h2>
    <p>
    PetroGas Oil & Construction Ltd owns and operates a fleet of 77 high quality land rigs ranging from highly mobile units to large rigs capable of drilling extended reach wells. We operate in a wide range of environments, from the extreme temperatures of the Sahara to the remote and arctic conditions of Siberia.

We have an ongoing rig building and upgrade programme which develops new and innovative rig designs helping us deliver our vision of operating safely, succeeding globally.

We are also innovating the software and hardware of our existing rigs to improve performance and deliver value through cost efficient well construction.

In addition, we offer the rental of a wide portfolio of high quality drilling and production equipment, maintained and certified in accordance with recognised industry standards and PetroGas's own worldwide standards. Our Equipment Rentals brochure can be found here.

“PetroGas Oil & Construction Ltd has a strong track record in delivering value for our clients through cost effective well construction.  Our focus is on meeting our clients’ goals for their drilling projects, whilst ensuring safe, effective, trouble-free operations. Our presence in most key energy regions and our focus on developing local personnel means we are well placed to continue to successfully deliver for our clients whilst developing local value and skills in the countries in which we operate.”


    </p>
  </section>
</article>

      </div>
      <style jsx>{`
.investors{
    height: 100vh;
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

    `}</style>
    </Layout>
  );
}