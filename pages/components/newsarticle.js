import React from 'react';

class NewsArticle extends React.Component{
  constructor(props){
    super(props);
    this.state ={
title: "",
body:" "
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChange (e){
this.setState({
 [e.target.name]: e.target.value
})
  }

 handleSubmit(e){
    e.preventDefault();  
   const article = [this.state];
   const storedArticles = JSON.parse(localStorage.getItem('article')) ;
   storedArticles.push(article);
   console.log(storedArticles);
  localStorage.setItem("article", JSON.stringify(storedArticles));
  console.log(localStorage["article"]);
 
  }

  render(){
          const{title, body} = this.state;

    return(
          <div className="news-form">
            <h2>Create News</h2>
            <hr />

            <form  onSubmit ={this.handleSubmit}>
              <label htmlFor="title">Article Title</label><br/>
              <input type="text" id="title" name="title" value={title} required onChange = {this.handleChange}/><br/>
              <label htmlFor="article">Article Body</label><br/>
              <textarea type="text" id="body" name="body" value ={body} required onChange = {this.handleChange}/><br/>
              <button type="submit">Submit</button>
            </form>
  
        <style jsx>
            {`

            .news-form{
              box-shadow: 1px 1px 1px 1px #888888;
              border-radius: 10px;
              padding: 5px;
              width: 100%;
              min-height: 70vh;
              margin: auto;
                          }
    h2{
      text-align: center;
      margin: auto;
      padding-top: 0.2em;
    }
           
      .news-form form{
        margin: 3em;
       
      }

      input{
         width: 90%;
         height:2em;
         border-radius: 5px;
         margin-bottom: 1em;
      }
      textarea{
        width: 90%;
        border-radius: 4px;
        min-height: 13em;
      }

      button{
        background-color: #0000fe;
        border-radius: 6px;
        width: 7em;
        height: 2em;
        color: white;
      }
            `}
        </style>
      </div>
      
          );
  }
}
export default NewsArticle;