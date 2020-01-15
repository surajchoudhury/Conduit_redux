import { combineReducers } from "redux";
import ArticleFeeds from "./ArticleFeeds";

let user = null;

export let rootReducer = combineReducers({
  globalFeeds: ArticleFeeds,
  userInfo: user
});
