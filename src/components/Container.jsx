import React from "react";
import { connect } from "react-redux";

import { articleThunk, tagThunk } from "../Actions";
import Articles from "./Articles";

class Hero extends React.Component {
  componentDidMount() {
    this.props.dispatch(articleThunk());
    this.props.dispatch(tagThunk());
  }

  render() {
    let { articles, tags } = this.props;
    return (
      <div className="container is-32X32">
        <div class="columns">
          <div class="column is-three-quarters">
            {articles &&
              articles.articles.map(article => <Articles {...article} />)}
          </div>
          <div class="column">Tags</div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    articles: state.globalFeeds.articles,
    tags: state.globalFeeds.tags
  };
}
export default connect(mapStateToProps)(Hero);
