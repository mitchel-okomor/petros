import Layout from "./components/MyLayout";
import Head from "./components/Head";
import Link from "next/link";

export default function Index() {
  return (
    <Layout>
      <Head />
      <main>
        <div className="intro">
          <h1>A well of innovation</h1>
          <p>
            Discover how our technology and innovations are transforming the Oil
            and Gas and Construction operations throughout the industry.
          </p>
          <Link href="#">
            <a className="read-more">Find out more</a>
          </Link>
        </div>

        <div className="main-text">
          <p>
            With over 130 years of experience, PetroGas Group
           is one of the world’s leading drilling and engineering contractors
            working onshore and offshore with a focus on safety, quality and
            performance.
          </p>
          <Link href="#">
            <a className="main-read-more">The PetroGas Way</a>
          </Link>
        </div>

        <div className="main-work">
          <ul>
            <li>
              <img src="/offshore.png" alt="" />
              <h3>Offshore</h3>
              <p>Platform drilling operations & maintenance</p>
              <img id="icon-img" src="/logo-KCA.png" alt="icon" />
            </li>
            <li>
              <img src="/land.png" alt="" />
              <h3>Land</h3>
              <p>Platform drilling operations & maintenance</p>
              <img id="icon-img" src="/logo-KCA.png" alt="icon" />
            </li>
            <li>
              <img src="/engineering.png" alt="" />
              <h3>Engineering</h3>
              <p>Platform drilling operations & maintenance</p>
              <img id="icon-img" src="/logo-KCA.png" alt="icon" />
            </li>
            <li>
              <img src="/manufacturing.png" alt="" />
              <h3>Manufacturing</h3>
              <p>Platform drilling operations & maintenance</p>
              <img id="icon-img" src="/logo-KCA.png" alt="icon" />
            </li>
          </ul>
        </div>

        <div id="news">
          <h2>Latest News</h2>
          <ul>
            <li>
              <Link href="#">
                <a>
                  CNRI awards PetroGas Group a multi-million
                  pound drilling contract for three UK North Sea platforms
                  <p>7 April 2018</p>
                </a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>
                PetroGas Group secures $460m of land drilling
                  contracts in the Middle East, Africa and Europe
                  <p>25 October 2018</p>
                </a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>
                PetroGas Group wins multi-million euro
                  contract for seven 320t cluster slider drilling rigs
                  <p>2 December 2019</p>
                </a>
              </Link>
            </li>
          </ul>
          <Link href="#" >
            <a className="viel-all-news">View all news</a>
          </Link>
        </div>
      </main>

      <style jsx>
        {`
 main {
  background-image: url("Homepage.jpg");
  background-repeat: no-repeat;
  background-size: 100% 30em;
min-height: 100vh;
width:100%;}

  .intro{
    padding-top: 100px;
   text-align:center;
   margin:auto;
     min-height:400px;
   
  }
.intro p{
  max-width: 20em;
  margin: auto;
  text-align:center;
}

  .intro a{
   display: inline-block;
    background-color:red;
    color: white;
    border-radius: 4px;
    font-size: 17px;
    width: 150px;
    height:30px;
    text-decoration: none;
 padding-top: 10px;


  }

  
  .intro a:visited{
    background-color:red;
    color: white;
    border-radius: 3px;
    font-size: 17px;
    width: 20px;
    text-decoration: none;
  }

.main-text{
    padding-top: 100px;
    margin:auto;
   text-align:center;
  min-height:250px;
 
}
.main-text p{
text-align:center;
  color:black;
}

.main-work{
  background-color:	rgb(96,96,96);
  min-height: 400px;
  width: 100%;
  text-align:center;
  margin: auto;

}
.main-work ul{
  display flex;
   width: 70%;
   justify-content: space-between;
   margin: auto;
   text-align: center;
  flex-wrap: wrap;
font-size:15px;
}
.main-work ul li{
  list-style: none;
margin:20px;
max-width 12em;
}

.main-work ul li img{
width:120px;
height:120px;
}
.main-work ul li p{
font-size:15px;
}
 #icon-img{
width:150px;
height:30px;
}
 a{
  display: inline-block;
    background-color:red;
    color: white;
    border-radius: 4px;
    font-size: 17px;
    width: 200px;
    height:30px;
    text-decoration: none;
 padding-top: 10px;
 margin-top 30px;

}

 main h1{
  padding: 20px;
    color:white;
    font-size:4em;
  }

  main p{
    padding-bottom: 20px;
    color:white;
    font-size: 1em;
    letter-spacing: 2px;
    font-size:20px;
  }

 

#news{
  margin:auto;
  text-align:center;
     min-height:400px;
      width:70%;
}
  #news ul{
    display:flex;
    flex-wrap: wrap;
    justify-content: space-between;
margin:0;
padding:0;
    
  }

 
  #news ul li a{
    margin: 0;
    padding:0;
    width:15em;
    background-color: white;
    color: black;
  }
  #news ul li a:hover{
  text-decoration: underline;
  }
#news h2{
  margin: 30px;
  padding: 0;
font-size: 2em;
}
#news li{
    margin-bottom: 22px;
    background-color: white;
    color: black;
  }
  #news p{
    color:black;
  }
  @media only screen and (max-width: 800px){
    main {
  background-size: 100% 20em;
min-height: 60px;
width:100%;}


.intro{
    padding-top: 30px;
   text-align:center;
   margin:auto;
     min-height:150px;
   
  }
.intro p{
  max-width: 20em;
  margin: auto;
  text-align:center;
  font-size: 14px;
}
.intro h1{
  font-size: 30px;
}
.main-text{
    padding-top: 50px;
    padding-bottom: 20px;
    margin:auto;
   text-align:center;
  min-height:250px;
 
}
.main-text p{
text-align:center;
  color:black;
  padding: 0px 10px 0px 10px;
}

.main-work{
  display:block;
  background-color:	rgb(96,96,96);
  min-height: 400px;
  width: 100%;
  text-align:center;
  margin: auto;

}

.main-work ul{
margin-left: 5em;
}

.main-work li{
  display:block;
}

#news{
  margin:auto;
  text-align:center;
     min-height:400px;
      width:100%;
      padding-bottom: 20px;
}
#news ul{
  display: block;
}
#news ul li{
  display: block;
}
  }

  `}
      </style>
    </Layout>
  );
}
