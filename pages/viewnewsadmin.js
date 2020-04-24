import React from 'react';
import Link from 'next/link';
import Layout from './components/AdminLayout';


const ViewNesAdmin = () =>{


  
    return(
<Layout>
   <div className="admin">   
      <h1>Admin Page</h1>
  <div className="panels"> 
  
    <div className="news-panel">
        <h2> News Panel</h2>
        <hr />
        <ul>
            <li>
            <Link href="/newsarticle"><a>View all news</a></Link>
            </li>
            <li>
                <Link href="/newsarticle"><a>Write a new article</a></Link>
            </li>
        </ul>
    </div>

    <div className="job-panel">
        <h2>Job Panel</h2>
        <hr />
        <ul>
            <li>
                <Link href="#"><a>View all job posting</a></Link>
            </li>
            <li>
                <Link href="#"><a>Create New Job Posting</a></Link>
            </li>
            </ul>
    </div>
    </div>
  </div>

  <style jsx>
      {`
      .admin{
          margin: 2em;
         
      }
      .admin h1{
          margin:auto;
          text-align:center;
      }

      

      .panels{
          box-sizing: border-box;
        display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          background-color:hsl(179, 2%, 96%);
          min-height: 70vh;
          margin: 5em;
          padding: 5em;
          border-radius: 20px;
      }

      .news-panel{
        box-shadow: 2px 2px 2px 2px #888888;
        border-radius: 10px;
        padding: 5px;
        width: 40%;
      }
      .news-panel:hover{
          width:41%;
      }

      .news-panel h2{
          margin: auto;
          text-align: center;
          color:#104634;
      }
.news-panel ul{
    padding: 10px;
    font-size: 1.5em;
} 
.news-panel ul li{
    margin: .7em;
    padding: .5em;
    height: 1.5em;
    border-radius: 10px;
    box-shadow: 2px 2px 2px 2px #888888;

   
} 

      .job-panel{
        box-shadow: 2px 2px 2px 2px #888888;
        border-radius: 10px;
        padding: 5px;
        width: 40%;
      }
      .job-panel:hover{
          width:41%;
      }

      .job-panel h2{
          margin: auto;
          text-align: center;
          color:#104634;
      }
.job-panel ul{
    padding: 10px;
    font-size: 1.5em;
}  
.job-panel ul li{
    margin: .7em;
    padding: .5em;
    height: 1.5em;
    border-radius: 10px;
    box-shadow: 2px 2px 2px 2px #888888;

   
} 

      `}
  </style>
</Layout>

    );
  
}
export default ViewNesAdmin;