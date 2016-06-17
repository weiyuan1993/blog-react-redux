import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { fetchPosts, homePageTitle } from '../actions/index';
//materail-ui

class PostsIndex extends Component {
  componentWillMount() {
    this.props.homePageTitle();
    //擷取文章資料，發送fetchPost action
    this.props.fetchPosts()
      .then(()=>{
          console.log(this.props.posts);
      });
  }
  render(){
    const postsList = this.props.posts.map(function(post){
      return(
          <li key={post.id} className="list-group-item">
          <div>
            <Link to={`posts/${post.id}`}>
              <span className="pull-xs-right">{post.categories}</span>
              <strong>{post.title}</strong>
            </Link>
          </div>
          </li>
      );
    })
    return(
      <div>
        <div className="text-xs-right">
          <Link to="posts/new" className="btn btn-info">New Post</Link>
        </div>
        <ul className="list-group">{postsList}</ul>
      </div>

    );
  }
}
function mapStateToProps(state){ //存取rootReducer回傳的state
  return {
    posts:state.posts.all,
    title:state.posts.title
   };
}
export default connect( mapStateToProps, { fetchPosts,homePageTitle } )(PostsIndex);
