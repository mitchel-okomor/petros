import Layout from './components/MyLayout';
import Link from 'next/link';

export default function Innovations() {
  return (
    <Layout>
      <div className="innovations">
      <h2>Home > Innovations</h2>
        <hr/>
        <h1> Innovations</h1>
        <img src="/innovations.jpg" alt="innovations"/>
        <p>PetroGas Group is a leading provider of premium rig services, specialist engineering and design and land rig manufacture for the international oil and gas industry. Our breadth of services distinguishes us from the vast majority of international drilling contractors. </p>
<br/>
<br />
<article>
  <section>
    <h2>Land</h2>
    <p>
    While we are known for our superior safety and operational performance, the technology and innovation we bring to our equipment and drilling operations are proven to deliver outstanding long-term efficiencies – meaning tangible time and financial savings.

It's this well of innovation that means choosing PetroGas offers you hard dollar value opportunities, both today and in the future.

    </p>
  </section>
</article>

      </div>
      <style jsx>{`
.innovations{
    height: 100vh;
    margin: 5em;
}
.innovations img{
  width: 100%;
}
.innovations p{
  font-size: 1em;
  line-heigth: 1em;
  margin: 1em 0 1em 0;
}
.innovations h1{
  margin: 1em 0 0.2em 0;

}

.innovations h2{
  color:grey;
}
    `}</style>
    </Layout>
  );
}