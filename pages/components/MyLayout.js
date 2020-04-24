import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import Head from './Head';



const Layout = props => (
      <div id="layout">
        <Head />
        <Header /> 
        <Nav />
    {props.children}
    <Footer />
    <style jsx global>{`
*{
  margin:0;
  font-family: Arial, Helvetica, sans-serif;
}

p{
  line-height: 1.5em;

}
a{
  text-decoration:none;
  list-style:none;
}
li{
  list-style:none;
}

     #layout{
       background-color: white;
       color: black;
  border: '1px solid #DDD';
box-sizing: border-box;
     }
      
    `}</style>
      </div> 
  
   
    );


export default Layout