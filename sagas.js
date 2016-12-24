import { takeEvery } from 'redux-saga'
import { call, put } from 'redux-saga/effects'

import { fetch } from './network'
import actions from './actions'

const URL = 'http://localhost:3000/articles'

export default function* rootSaga() {
  yield [
    watchGetArticles()
  ]
}

export function* getArticles() {
  const articles = yield call(fetch, URL)

  for (let article of articles) {
    yield put({
      type: actions.ADD_ARTICLE, title: article.title
    })
  }
}

export function* watchGetArticles() {
  yield takeEvery(
    actions.GET_ARTICLES,
    getArticles
  )
}
