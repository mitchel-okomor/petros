import AdminNav from './AdminNav';
//import AdminFooter from './AdminFooter';
import AdminHead from './AdminHead';



const AdminLayout = props => (
      <div id="layout">
        <AdminHead />
        <AdminNav />
    {props.children}
  
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


export default AdminLayout;