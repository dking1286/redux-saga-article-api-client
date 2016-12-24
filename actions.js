const actions = {
  ADD_ARTICLE: 'ADD_ARTICLE',
  CLEAR_ARTICLES: 'CLEAR_ARTICLES',
  GET_ARTICLES: 'GET_ARTICLES'
}

export default new Proxy(actions, {
  get(target, key) {
    if (target[key] === undefined) {
      throw new Error(`Invalid action ${key}`)
    }

    return target[key]
  }
})
