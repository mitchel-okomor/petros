import Layout from './components/MyLayout';
import Link from 'next/link';

export default function Services() {
  return (
    <Layout>
      <div className="services">
        <h2>Home > Business and Services</h2>
        <hr/>
        <h1> Business and Services</h1>
        <img src="/business.jpg" alt="business and services"/>
        <p>KCA Deutag is a leading provider of premium rig services, specialist engineering and design and land rig manufacture for the international oil and gas industry. Our breadth of services distinguishes us from the vast majority of international drilling contractors. </p>
<br/>
<br />
<article>
  <section>
    <h2>Land</h2>
    <p>
    Land

KCA Deutag owns and operates a fleet of 77 high quality land rigs ranging from highly mobile units to large rigs capable of drilling extended reach wells. We operate in a wide range of environments, from the extreme temperatures of the Sahara to the remote and arctic conditions of Siberia.

We have an ongoing rig building and upgrade programme which develops new and innovative rig designs helping us deliver our vision of operating safely, succeeding globally.

We are also innovating the software and hardware of our existing rigs to improve performance and deliver value through cost efficient well construction.

In addition, we offer the rental of a wide portfolio of high quality drilling and production equipment, maintained and certified in accordance with recognised industry standards and KCA Deutag's own worldwide standards. Our Equipment Rentals brochure can be found here.

“KCA Deutag has a strong track record in delivering value for our clients through cost effective well construction.  Our focus is on meeting our clients’ goals for their drilling projects, whilst ensuring safe, effective, trouble-free operations. Our presence in most key energy regions and our focus on developing local personnel means we are well placed to continue to successfully deliver for our clients whilst developing local value and skills in the countries in which we operate.”


    </p>
  </section>
</article>

        </div>
      <style jsx>{`
.services{
  min-hieght: 100vh;
  margin: 5em;
}

.services img{
   width: 100%;
}

.services p{
  font-size: 1em;
  line-heigth: 1em;
  margin: 1em 0 1em 0;
}
.services h1{
  margin: 1em 0 0.2em 0;

}

    `}</style>
    </Layout>
  );
}