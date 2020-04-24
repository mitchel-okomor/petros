import Link from "next/link";

const AdminNav = () => (
  
  <nav>
    <ul>
    <li id="home" className="active">
        <Link href="/">
          <a> Home</a>
        </Link>
      </li>
     
      <li>
        <Link href="#">
          <a> Admin Panel</a>
        </Link>
      </li>
    
    </ul>
    <style jsx>{`
      nav {
        position: relative;
        width: 100%;
        display: flex;
        background-color: rgb(48, 48, 48);
        color: red;
        height: 40px;
        z-index: 2;
        
      }
      @media only screen and (max-width: 800px) {
        nav {
         display: none;
          width: 100%;
          margin:auto;
          text-align: center;
          background-color: rgb(48, 48, 48);
          height: auto;
          z-index: 2;
          padding-top: 40px;
       
        }

        nav ul {
       
          margin: auto;
          width: 100%;
          height: auto;
          list-style: none;
          text-align: center;
        }

        nav ul li {
          border-top: 0.1px solid rgb(80, 80, 80);
          display: block;
          width: 100%;
          text-align: center;
           font-size: 1.2em;
        }

        nav ul li a {
        color: rgb(245, 245, 245);
        display: block;
        text-decoration: none;
        width:100%;
      }
      #home{
        font-size:1.2em;
        font-weight: bold;
        color:red;
      }
      nav a:hover {
        color: red;
        color:white;
      }
      nav li:hover {
        background-color: red;
        color:white;
        border-radius:5px;
      }
      nav a {
        color: rgb(245, 245, 245);
        display: block;
        padding: 5px 0px 5px 0px;
        text-decoration: none;
      }
      }
      {/** End of media query*/}

      nav a {
        color: rgb(245, 245, 245);
        display: block;
        padding: 8px 0px 10px 0px;
        text-decoration: none;
      }

      nav a:hover {
        color: red;
        color: white;
      }
      nav li:hover {
        background-color: red;
        color: white;
        border-radius:5px;
      }

      nav a:active {
        color: red;
        color: white;
      }

      nav li:active {
        background-color: red;
        color:white
      }
      nav ul {
        justify-content: space-between;
        margin: 0em 2em 0em 2em;
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        font-size: 1.0em;
        list-style: none;
        text-align: center;
      }
      nav ul li {
        min-width: 5em;
        text-align: center;
      }
      #home{
        font-size:1.2em;
        font-weight: bold;
        margin-right: 0em 10em 0em 0em;
        color:red;
      }
    `}</style>
  </nav>
);

export default AdminNav;
