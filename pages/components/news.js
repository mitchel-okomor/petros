import Link from "next/link";

export default function News() {
  return (
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

      <style jsx>
        {`
    
    
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

    `}
      </style>
    </div>
  );
}
