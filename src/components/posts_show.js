import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { fetchPost, deletePost,showPageTitle } from '../actions/index';

class PostsShow extends Component {
  constructor(props){
    super(props);
    this.state={loadingText:'Loading...',deleteText:''};
  }
  componentWillMount(){
    this.props.fetchPost(this.props.params.id)//解析react-router傳來的URL參數
      .then(()=>{
        this.props.showPageTitle(this.props.post.title);//發送action，更改title
      })
  }
  onDeleteClick(){
    this.props.deletePost(this.props.params.id)
      .then(()=>{
        this.context.router.push('/');//回首頁
      });
    this.setState({deleteText:'Deleting...'});
  }
  render(){
    const { post } = this.props; //簡化語法，取代繁瑣的this.props.post
    //載入中的狀態
    if(!post||post.id!=this.props.params.id){
      return (
        <div>
          <Link to="/" className="btn btn-primary">Back</Link>
          <button onClick={this.onDeleteClick.bind(this)} className="btn btn-danger pull-xs-right">DELETE</button>
          <div className="list-group-item">
            {this.state.loadingText}
          </div>
        </div>

      );
    }else{
      return(
        <div>
          <Link to="/" className="btn btn-primary">Back</Link>
          {this.state.deleteText}
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
export default connect(mapStateToProps, {fetchPost,deletePost,showPageTitle})(PostsShow);
