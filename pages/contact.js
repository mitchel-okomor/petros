import Layout from './components/MyLayout';
import Link from 'next/link';

export default function Contact() {
  return (
    <Layout>
      <div className="contact">
      <h2>Home > Locations</h2>
       <hr/>
       <h1>Our addresses</h1> 
       <div className="address">
<div id="office1">
  <h3>United Kingdom</h3>
  <p>
  KCA Deutag Group Headquarters & Registered Office:
Bankhead Drive, City South Office Park,
Portlethen, Aberdeenshire, AB12 4XX
Registered in Scotland No. 31961.
<br />
<br />
T: +44 1224 987 000
<br />
E: info@kcadeutag.com
  </p>
  <Link href="#" ><a className="main-read-more">The KCA Deutag Way</a></Link>
</div>

<div id="office2">
  <h3>United Kingdom</h3>
  <p>
  KCA Deutag Group Headquarters & Registered Office:
Bankhead Drive, City South Office Park,
Portlethen, Aberdeenshire, AB12 4XX
Registered in Scotland No. 31961.
<br/>
<br />
T: +44 1224 987 000
<br />
E: info@kcadeutag.com
  </p>
  <Link href="#" ><a className="main-read-more">The KCA Deutag Way</a></Link>
</div>
       </div>
      </div>
      <style jsx>{`
.contact{
    margin: 1em;
}

.contact h1{
  text-align:center;
  margin-top: 2em;
}
.contact h3{
  color:grey;
}
.address{
  display: flex;
  margin: auto;
}
#office1{
  width: 30%;
  margin: 2em;
  padding: 2em;
}
#office2{
  width:30%;
  margin: 2em;
  padding: 2em;
}

@media only screen and (max-width: 800px) {
  .contact{
    margin: 1em;
}

.contact h1{
  text-align:center;
  margin-top: 2em;
}
.contact h3{
  color:grey;
}
.address{
  display: block;
  margin: auto;
}
#office1{
  width: 80%;
}
#office2{
  width:80%;
}
 
}
    `}</style>
    </Layout>
  );
}