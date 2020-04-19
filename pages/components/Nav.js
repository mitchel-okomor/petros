import Link from "next/link";

const Nav = () => (
  
  <nav>
    
    <ul>
    <li id="home">
        <Link href="/">
          <a> Home</a>
        </Link>
      </li>
      <li>
        <Link href="/whoweare">
          <a> Who we are</a>
        </Link>
      </li>
      <li>
        <Link href="/services">
          <a> Business and Services </a>
        </Link>
      </li>
      <li>
        {" "}
        <Link href="/rigs">
          <a> Rigs</a>
        </Link>{" "}
      </li>
      <li>
        {" "}
        <Link href="/innovations">
          <a> A well of Innovation</a>
        </Link>{" "}
      </li>
      <li>
        {" "}
        <Link href="/careers">
          <a> Careers</a>
        </Link>{" "}
      </li>
      <li>
        <Link href="/investors">
          <a> Investors</a>
        </Link>{" "}
      </li>
      <li>
        <Link href="/media">
          <a> Media</a>
        </Link>
      </li>
      <li>
        <Link href="/contact">
          <a> Contact Us</a>
        </Link>
      </li>
    </ul>
    <style jsx>{`
      nav {
        position: absolute;
        width: 100%;
        display: flex;
        background-color: rgb(48, 48, 48);
        color: red;
        height: 40px;
        z-index: 2;
      }
      @media only screen and (max-width: 800px) {
        nav {
          position: relative;
          width: 100%;
          margin:auto;
          text-align: center;
          background-color: rgb(48, 48, 48);
          height: auto;
          z-index: 2;
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
      }
      {/** End of media query*/}

      nav a {
        color: rgb(245, 245, 245);
        display: block;
        padding: 8px 0px 10px 0px;
        text-decoration: none;
      }

      nav a:hover {
        color: rgb(128, 128, 128);
      }
      nav li:hover {
        background-color: rgb(245, 245, 245);
      }

      nav a:active {
        color: white;
      }

      nav li:active {
        background-color: red;
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

export default Nav;
