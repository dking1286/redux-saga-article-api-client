import React from 'react'
import { connect } from 'react-redux'
import { List } from 'immutable'

import Article from './Article.jsx'


const ArticleDisplay = ({ articles }) =>
  <div className='article-display'>
    {articles.toJS().map((article, i) =>
      <Article key={i} title={article} />)}
  </div>




const mapStateToProps = (state) => ({
  articles: state.get('articles', List([]))
})


export default connect(mapStateToProps)(ArticleDisplay)
