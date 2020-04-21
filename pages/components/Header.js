import Link from 'next/link';
import React, { Component } from 'react'

class Header extends Component {
constructor(props){
  super(props)
  this.state={};
}


  componentDidMount() {
    this.setState({
      navClass: "hide"
    })
  }

  showNavBar = () =>{
    if(this.state.navClass== "hide")
    this.setState({
      navClass: "show"
    })
    else{
      this.setState({
        navClass: "hide"
      }) 
    }
    console.log("show navbar");
  }


render(){
return(
  <header className="header">
  <div className="logo">
    <img src="/petro-logo.jpg" alt="Logo"></img>

<button onClick={() => this.showNavBar()}><i className="fa fa-bars"></i>
</button>
  </div>
  <ul className={this.state.navClass}>
  <li id="home" className="active">
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
      <Link href="/rigs">
        <a> Rigs</a>
      </Link>
    </li>
    <li>
      <Link href="/innovations">
        <a> A well of Innovation</a>
      </Link>
    </li>
    <li>
      <Link href="/careers">
        <a> Careers</a>
      </Link>
    </li>
    <li>
      <Link href="/investors">
        <a> Investors</a>
      </Link>
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
      .hide{
        display:none
      }
      @media only screen and (max-width: 800px){
        header{
          position: fixed;
          top:0;
          box-sizing: border-box;
          display: block;
          width: 100%;
          height: 40px;
          padding:2px;
          z-index: 3;
          background-color:  rgb(48, 48, 48);
        }
        .logo{
          width: 100%;
        }
        .logo img{
          display:none;
          float: left;
          width: 80px;
          height:30px;
          margin-left: 20px;
        }
        .logo button {
          float: right;
          color: white;
           font-size: 20px;
           margin-right: 3px;
      cursor: pointer;
      background-color:  rgb(48, 48, 48);
        }
        header ul {
          box-sizing:border-box;
          background-color:  rgb(48, 48, 48);
       margin: auto;
       width: 100%;
       height: auto;
       list-style: none;
       text-align: center;
     }

     header ul li {
       border-top: 0.1px solid rgb(80, 80, 80);
       display: block;
       width: 100%;
       margin:auto;
       text-align: center;
        font-size: 1.2em;
     }
  
   header a:hover {
     color: white;
   }
   header li:hover {
     background-color: red;
     border-radius:5px;
   }
   header a {
     color: rgb(245, 245, 245);
     display: block;
     padding: 5px 20px 5px 0px;
     text-decoration: none;
   }
   
      }
      @media only screen and (min-width: 800px){
        .logo button{
        display: none;
      }
      .logo label{ 
        display: none;

      }
      header ul{
        display:none;
      }
      }
    `}
  </style>
</header>
)
}

 
};

export default Header;
