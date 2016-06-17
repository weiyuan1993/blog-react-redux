import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { fetchPosts } from '../actions/index';
class PostsIndex extends Component {
  componentWillMount() {
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
          <Link to="posts/new" className="btn btn-primary">New Post</Link>
          <h3>List of blog post</h3>
        </div>
        <ul className="list-group">{postsList}</ul>
      </div>

    );
  }
}
function mapStateToProps(state){ //存取rootReducer回傳的state
  return { posts:state.posts.all };
}
export default connect( mapStateToProps, { fetchPosts } )(PostsIndex);
