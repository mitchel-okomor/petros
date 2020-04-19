import Layout from './components/MyLayout';
import Link from 'next/link';

export default function Whoweare() {
  return (
    <Layout>
      <div className="who-we-are">
      <h2>Home > Who we are</h2>
        <hr/>
        <h1> Who we are</h1>
        <img src="/whoweare.jpg" alt="Who we are"/>
        <p>KCA Deutag is a leading provider of premium rig services, specialist engineering and design and land rig manufacture for the international oil and gas industry. Our breadth of services distinguishes us from the vast majority of international drilling contractors. </p>
<br />
<article>
  <section>
    <p>
    With over 130 years of experience, KCA Deutag is one of the world’s leading drilling and engineering contractors working onshore and offshore with a focus on safety, quality and operational performance. 

We operate  approximately 110 drilling rigs in 20 countries, either directly or through our affiliates, employing people in Africa, Europe, Russia, the Middle East, the Caspian Sea and Canada.

    </p>
  </section>
</article>
      </div>
      <style jsx>{`
.who-we-are{
    min-height: 100vh;
    margin: 5em;
}


.who-we-are p{
  font-size: 1em;
  line-heigth: 1em;
  margin: 1em 0 1em 0;
}
.who-we-are h1{
  margin: 1em 0 0.2em 0;

}
.who-we-are img{
  width:100%;
}
     
    `}</style>
    </Layout>
  );
}