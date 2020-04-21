import Layout from './components/MyLayout';
import Link from 'next/link';

export default function Careers() {
  return (
    <Layout>
      <div className="careers">
      <h2>Home > Careers</h2>
       <hr/>
       <div className="jobs">
        <br />
       <br />
       <h3>Availble Positions</h3> 
       <table>
         <tr>    
          <th>SN</th>
         <th>Position</th>
         <th> Details</th> 
         <th>Action</th>
               </tr>
               <tr>
                 <td>1.</td>
                 <td></td>
                 <td></td>
                 <td></td>
               </tr>
       </table>  
       </div>
      

       
 
      </div>
      <style jsx>{`
.careers{
    margin: 5em;
    min-height: 60vh;
}
.careers h2{
  color:grey;
}
.jobs h3{
text-align: center;
margin: auto;
padding: 1em;
}
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
   
    `}</style>
    </Layout>
  );
}