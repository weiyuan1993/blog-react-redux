import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { fetchPost, deletePost } from '../actions/index';

class PostsShow extends Component {
  componentWillMount(){
    this.props.fetchPost(this.props.params.id);//解析react-router傳來的URL參數
  }
  onDeleteClick(){
    this.props.deletePost(this.props.params.id)
      .then(()=>{
        this.context.router.push('/');
      });
  }
  render(){
    const { post } = this.props; //簡化語法，取代繁瑣的this.props.post
    console.log(post);
    if(!post){
      return <div>Loading...</div>;
    }
    return(
      <div>
        <Link to="/" className="btn btn-primary">Back</Link>
        <button onClick={this.onDeleteClick.bind(this)} className="btn btn-danger pull-xs-right">DELETE</button>
        <div className="list-group-item">
          <h3>Title:{post.title}</h3>
          <h6>Categories:{post.categories}</h6>
          <p>Content:{post.content}</p>
        </div>
      </div>
    );
  }
}
//將reducer傳來的state綁定到props
function mapStateToProps(state){
  return {
    post:state.posts.post
  };
}
PostsShow.contextTypes =  {
    router: PropTypes.object
};
//利用connect綁定action宣告的fetchPost方法
export default connect(mapStateToProps, {fetchPost,deletePost})(PostsShow);
