import React from 'react';
import Link from 'next/link';
import Layout from './components/AdminLayout';
import NewsArticle from './components/newsarticle';


class Admin extends React.Component{
constructor(props){
    super(props);
    this.state ={
       'news':[]
    }
}

componentDidMount(){
 let news = JSON.parse(localStorage['article']);
this.setState({
    'news':news
});

}

//  fetchData = () =>{
  
// }

  render(){
const {news}=this.state;
    return(
<Layout>
   <div className="admin">   
      <h1>Admin Page</h1>
  <div className="panels"> 
  
    <div className="news-panel">
        <h2> News</h2>
        <hr />
        <ul>
          {news.map(el=>{
                return ( 
            <li key={news.indexOf(el)} onClick={()=>{
                 console.log(news.indexOf(el));
            }}>
            <Link href="#"><a>{el.title}</a></Link> <span><button><a>X</a></button></span>
            </li>);
            })}  
           
        </ul>
    </div>
<div className="news-edit-panel">
 <NewsArticle  />   
</div>

    </div>
  </div>

  <style jsx>
      {`
      .admin{
        margin:auto;
          text-align:center;

         
      }
      .admin h1{
          margin:auto;
          text-align:center;
      }

      

      .panels{
          box-sizing: border-box;
        display: flex;
          flex-wrap: wrap;
          background-color:hsl(179, 2%, 96%);
          min-height: 70vh;
          margin: auto;
          text-align: center;
          padding: 5em;
          border-radius: 20px;
          justify-content: space-between;
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

      .news-edit-panel{
        padding: 5px;
        width: 40%;
      }
     
      `}
  </style>
</Layout>

    );
    
}
}
export default Admin;