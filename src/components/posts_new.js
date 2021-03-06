import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { Link } from 'react-router';
import { createPost, createPageTitle } from '../actions/index';
class PostsNew extends Component {
  componentWillMount(){
    this.props.createPageTitle();
  }
  onSubmit(props){
    this.props.createPost(props)
      .then(()=>{
        this.context.router.push('/');
      });
  }
  render(){
    const { fields: { title, categories, content },handleSubmit }=this.props;
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit.bind(this))}>
        <div className="form-group">
          <label>Title</label>
          <input type="text" className="form-control" {...title} />
          <div className="text-help">
            {title.touched ? title.error:''}
          </div>
        </div>
        <div className="form-group">
          <label>Categories</label>
          <input type="text" className="form-control" {...categories} />
          <div className="text-help">
            {categories.touched ? categories.error:''}
          </div>
        </div>
        <div className="form-group">
          <label>Content</label>
          <textarea type="text" className="form-control" {...content} />
          <div className="text-help">
            {content.touched ? content.error:''}
          </div>
        </div>
        <button type="submit" className="btn btn-success" style={{marginRight:"10px"}}>Submit</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
    );
  }
}
function validate(values){
  const errors = {};
  if(!values.title){
    errors.title='Enter a username';
  }
  if(!values.categories){
    errors.categories='Enter categories';
  }
  if(!values.content){
    errors.content="Enter some content";
  }
  return errors;
}
PostsNew.contextTypes =  {
    router: PropTypes.object
};
export default reduxForm({
  form: 'PostsNewForm',
  fields: ['title','categories', 'content'],
  validate
},null,{ createPost, createPageTitle })(PostsNew);
