import { fromJS, List } from 'immutable'

import actions from './actions'

export default function reducer(state = fromJS({}), action) {
  switch (action.type) {
    case actions.ADD_ARTICLE:
      return state.updateIn(['articles'], articles =>
        articles ? articles.push(action.title) : List([action.title]))

    case actions.CLEAR_ARTICLES:
      return state.delete('articles')

    default:
      return state
  }
}
