import React from 'react'
import { useAPIDataFromServer } from '../hooks'

function ArticleListing({ content, apiUrl }) {
  const articles = useAPIDataFromServer(apiUrl)

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>{content.header}</h1>
      <ul>
        {
          !articles ? <div>Loading...</div> : articles.map(article => (
            <li key={article._id}>
              <h2>{article.title}</h2>
              <h3>By {article.author}</h3>
              <img src={article.image} />
              <p>By {article.text}</p>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default ArticleListing