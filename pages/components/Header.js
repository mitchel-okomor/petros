import Link from 'next/link';
import React, { Component } from 'react'

class Header extends Component {
constructor(props){
  super(props)
  this.state={
    navClass: "hide",
      iconClass: "fa fa-bars",
      buttontext: ""
  };
}


  componentDidMount() {
    this.setState({
      navClass: "hide"
    })
  }

  showNavBar = () =>{
    if(this.state.navClass== "hide")
    this.setState({
       navClass: "show",
        iconClass: "",
         buttontext: "X"
     
    })
    else{
      this.setState({
          navClass: "hide",
      iconClass: "fa fa-bars",
      buttontext: ""
      }) 
    }
    console.log("show navbar");
  }


render(){
return(
  <header className="header">
  <div className="logo">
    <img id="logo-img" src="/petro-logo.jpg" alt="Logo"></img>
<img id="header-logo" src="/header-logo.jpg" alt="Logo"/>
<button onClick={() => this.showNavBar()}><i className={`${this.state.iconClass}`}></i>{this.state.buttontext}
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
      <Link href="/thepetrogasway">
        <a> The PetroGas Way</a>
      </Link>
    </li>
    <li>
      <Link href="/careers">
        <a> Careers</a>
      </Link>
    </li>
    <li>
      <Link href="/management">
        <a> Management</a>
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

      #header-logo{
        float:left;
     display: inline;
     width:100px;
     height:35px;
      } 
      @media only screen and (max-width: 800px){
        header{
          position: fixed;
          top:0;
          box-sizing: border-box;
          display: block;
          width: 100vw;
          height: 45px;
          padding:2px;
          z-index: 3;
          background-color:  rgb(48, 48, 48);
        }
        .logo{
          width: 100%;
        }
        #logo-img{
          display:none;
          float: left;
          width: 80px;
          height:30px;
          margin-left: 20px;
        }
        .logo button {
          float: right;
          height:35px;
          width: 35px;
          color: white;
           font-size: 20px;
           margin-right: 3px;
           color:white;
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
   
   .fa{
     color: white;
   }

   
   .header-logo{
     display: inline;
     float: left;
        color:red;
        font-size:1.8em;
        font-weight: bold;
        margin-left: .8em;
        margin-top: .4em;
      } 
      }
      @media only screen and (min-width: 800px){
        .logo button{
        display: none;
     
      }
      .logo label{ 
        display: none;

      }
      header ul, header span{
        display:none;
      }
      #header-logo{
display: none;
      }

      }
    `}
  </style>
</header>
)
}

 
};

export default Header;
