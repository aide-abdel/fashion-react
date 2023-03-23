import React from 'react'

function Article({article}) {
  return (
    <article>
    <div class="article-date">{article.date}</div>
    <div class="article-title">{article.title}</div>
    <div class="article-image"><img src={article.img}/></div>
    <p class="article-text">{article.text}</p>
    <div class="continues"><a>Continues...</a></div>
</article>
  )
}

export default Article