import { SET_ARTICLES, SET_TAGS } from "../Types";

let INITIAL_STATE = {
  articles: null,
  tags: null
};

export default function ArticleFeeds(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_ARTICLES:
      return {
        ...state,
        articles: action.payload
      };

    case SET_TAGS:
      return {
        ...state,
        tags: action.payload
      };
    default:
      return state;
  }
}
