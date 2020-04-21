const Header = () => (
  <header className="header">
    <div className="logo">
      <img src="/petro-logo.jpg" alt="Logo"></img>
    </div>

    <style jsx>
      {`
        header {
          height: 90px;
          width: 100%;
          margin: auto;
          text-align: center;
        }
        .logo {
          height: 100%;
          z-index: 1;
          margin: auto;
          text-align: center;
        }
        .logo img {
          width: 150px;
          height: 80px;
        }
        @media only screen and (max-width: 800px){
          header{
            display: none;
          }
        }
      `}
    </style>
  </header>
);

export default Header;
