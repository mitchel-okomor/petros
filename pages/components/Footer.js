import Link from "next/link";
const Footer = () => {
  return (
    <footer>
    <div id="footer">

      <div id="address">
        <p>
          PetroGas Group Office <br></br>
         Burnage, Levensulme M19, <br></br>
         United Kingdom<br></br>
          +44 7451 278 898
        </p><br></br>
        
      </div>
      <div id="second-div">
        <p>
          Po Box 971638, El Paso, Tx <br></br> +14092876101
        </p>
        <a href="#" className="fa fa-linkedin"></a>
      </div>
      <div id="last-div">
        Email: info@petrogasservices.com<br></br>© PetroGas 2020<br></br>
        <br></br>
        <br></br>
        Terms and Conditions<br></br>
        Privacy Statement<br></br>
      </div>
   
    </div>
     
      <style jsx>
        {`

          #footer {
            box-sizing:border-box;
            display: flex;
            flex-wrap: wrap;
            min-height: 200px;
            padding-left: 80px;
            padding-right: 80px;
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
            color: grey;
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
