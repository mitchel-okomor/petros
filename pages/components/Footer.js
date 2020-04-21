import Link from "next/link";
const Footer = () => {
  return (
    <footer>
    <div id="footer">

      <div id="address">
        <p>
          PetroGas Group Headquarters & Registered Office <br></br>
          Bankhead Drive, City South Office Park,<br></br>
          Portlethen, Aberdeenshire<br></br>
          AB12 4XX
        </p><br></br>
        <Link href="#">
          <a id="search-locations">Search locations</a>
        </Link>
      </div>
      <div id="second-div">
        <p>
          Tel: +44 1224 987 000 <br></br>Email: info@kcadeutag.com
        </p>
        <a href="#" className="fa fa-linkedin"></a>
      </div>
      <div id="last-div">
        Email: info@kcadeutag.com<br></br>© PetroGas 2020<br></br>
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

          #footer {
            box-sizing:border-box;
            display: flex;
            flex-wrap: wrap;
            min-height: 200px;
            width:100%;
            background-color: rgb(48, 48, 48);
            color: white;
            text-align: center;
            margin: auto;
            border-top: 5px solid red;
             justify-content: space-between;
          }
         

          #footer div{
              margin: 20px;
          }

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

          #search-locations{
            font-size: 1.1em;
            width:auto;

          }


          .fa {
            padding: 5px;
            font-size: 2em;
            width: 0.8em;
            height:0.8em;
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

          @media only screen and (max-width: 800px) {
              #footer{
                display: relative;
                background-color: rgb(48, 48, 48);
              box-sizing:border-box;
                  height:auto;
                  width:100%;
                  margin:auto;
                  text-align: center;
                  padding:0;
              }
          .address{
            display:block;
            width: 100%;
            
          }
          #second-div{
            display:block;
            width: 100%;
          }
          #last-div {
            display: block;
            margin: 0;
            padding:0;
          }
          }
          {/** End of media query */}
        `}
      </style>
    </footer>
  );
};

export default Footer;
