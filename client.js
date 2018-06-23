function search(query) {
    return fetch(`/articles?q=${query}`, {
      accept: 'dbArticle/json',
    }).then(checkStatus)
      .then(parseJSON);
  }