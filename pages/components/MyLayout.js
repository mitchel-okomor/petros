import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';



const Layout = props => (
      <div id="layout">
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