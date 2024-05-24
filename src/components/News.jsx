"use client"

import { useEffect, useState } from "react"

export default function News() {

  const [news,setNews] = useState([]);
  const [articleNum, setArticleNumber]=useState(3);

   useEffect(()=>{
    fetch('https://saurav.tech/NewsAPI/top-headlines/category/business/in.json')
    .then((res)=> res.json())
    .then((data)=>{
      setNews(data.articles)
    });
  
   },[]);


  return (
    <div  className="bg-gray-200 rounded-xl p-5 my-5 space-y-4 text-gray-700 transition-all duration-200">
      <h1 className="font-bold">What is happening</h1>
      {news.slice(0, articleNum).map((article, i)=>(
        <div key={article.url} >
            <a href={article.url} target="'_blank" className="flex gap-2">

              { article.urlToImage? (<img src={article.urlToImage} alt="Article Image" width={60} height={50} className=" rounded-md " />)
              : ( <div className=" bg-blue-500 h-full w-4"></div>)}

              <div> <h2 className=" font-bold text-xs ">{article.title}</h2></div>
              
            </a>

            
        </div>
      ))}
    <button className="bg-blue-700 text-white rounded-full w-30 px-4 py-2 text-xs"  onClick={()=> setArticleNumber( articleNum + 3)} > Load more</button>
    </div>
  )
}
