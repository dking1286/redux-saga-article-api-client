import React from 'react'
import { connect } from 'react-redux'

import actions from '../actions'
import ArticleControlButton from './ArticleControlButton.jsx'

const ArticleControls = ({ getArticles, clearArticles }) =>
  <div className='article-controls'>
    <ArticleControlButton
      text='Get articles'
      onClick={() => getArticles()}
    />
    <ArticleControlButton
      text='Clear articles'
      onClick={() => clearArticles()}
    />
  </div>

const mapDispatchToProps = (dispatch) => ({
  getArticles() {
    dispatch({ type: actions.GET_ARTICLES })
  },

  clearArticles() {
    dispatch({ type: actions.CLEAR_ARTICLES })
  }
})

export default connect(null, mapDispatchToProps)(ArticleControls)
