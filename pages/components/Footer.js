import Link from "next/link";
const Footer = () => {
  return (
    <footer>
    <div id="footer">

      <div id="address">
        <p>
          KCA Deutag Group Headquarters & Registered Office <br></br>
          Bankhead Drive, City South Office Park,<br></br>
          Portlethen, Aberdeenshire<br></br>
          AB12 4XX
        </p><br></br>
        <Link href="#" className="viel-all-news">
          <a>Search all global locations</a>
        </Link>
      </div>
      <div>
        <p>
          Tel: +44 1224 987 000 <br></br>Email: info@kcadeutag.com
        </p>
        <a href="#" className="fa fa-linkedin"></a>
      </div>
      <div id="last-div">
        Email: info@kcadeutag.com<br></br>© KCA Deutag 2020<br></br>
        Registered in Scotland No 31961.
        <br></br>
        <br></br>
        Terms and Conditions<br></br>
        Privacy Statement<br></br>
        Modern Slavery Statement
      </div>
   
    </div>
     
      <style jsx>
        {`

          footer {
            display: flex;
            flex-wrap: wrap;
            min-height: 200px;
            width:100%;
            background-color: rgb(48, 48, 48);
            color: white;
            text-align: center;
            margin: auto;
            border-top: 5px solid red;
          }
          #footer{
              display:flex;
              width:80%;
              text-align: center;
              margin:auto;
              justify-content: space-between;

          }

          #footer div{
              margin: 20px;
          }

          @media only screen and (max-width: 800px) {
              footer{
                  height:auto;
                  width:100%;
                  margin:auto;
                  text-align: center;
                  padding:0;
              }
            #footer{
              display:block;
              width:100%;
              height: auto;
              text-align: center;
              margin:auto;
              justify-content: space-between;

          }
          #last-div {
            display: block;
          }
          }
          {/** End of media query */}



          #address {
            float: left;
          }
          #address a {
            display:inline-block;
            width: 200px;
    height:30px;
    font-size: 1.1em;
    text-align:center;
    margin:auto;
            background-color: white;
            color: black;
            text-decoration: none;
            border-radius: 3px;
            padding-top:3px;
          }

          #last-div {
            float: right;
          }


          .fa {
            padding: 15px;
            font-size: 2em;
            width: 2em;
            height:2em;
            text-align: center;
            text-decoration: none;
            margin: auto;
            background-color: white;
          }

          {/**social media links */}

          .fa:hover {
            opacity: 0.7;
          }
          .fa-linkedin {
            background-color: white;
            color: grey;
          }

          div {
            text-align: left;
          }
        `}
      </style>
    </footer>
  );
};

export default Footer;
