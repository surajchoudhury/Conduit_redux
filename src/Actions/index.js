import { SET_ARTICLES, SET_TAGS } from "../Types";

export function setArticles(payload) {
  return {
    type: SET_ARTICLES,
    payload: payload
  };
}

export function setTags(payload) {
  return {
    type: SET_TAGS,
    payload: payload
  };
}

export function articleThunk() {
  return dispatch => {
    fetch("http://localhost:3000/api/v1/articles")
      .then(res => res.json())
      .then(articles => dispatch(setArticles(articles)));
  };
}

export function tagThunk() {
  return dispatch => {
    fetch("http://localhost:3000/api/v1/tags")
      .then(res => res.json())
      .then(tags => dispatch(setTags(tags)));
  };
}
