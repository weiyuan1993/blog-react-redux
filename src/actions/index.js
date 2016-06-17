import axios from 'axios';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=weiyuan1993';

//action creator為一個function，目的為回傳一個action物件

//抓取所有POST
export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
  return {
    type: 'FETCH_POSTS',
    payload: request
  };
}
//抓取個別POST
export function fetchPost(id) {
  const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);
  return {
    type: 'FETCH_POST',
    payload: request
  };
}
//新增POST
export function createPost(props) {
  const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, props);
  return {
    type:'CREATE_POST',
    payload: request
  };
}
//刪除個別POST
export function deletePost(id){
  const request = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`);
  return {
    type:'DELETE_POST',
    payload:request
  }
}
export function homePageTitle() {
  return {
    type:'HOME_PAGE',
    payload:'List of Blog Post'
  }
}
export function createPageTitle(){
  return {
    type:'CREATE_PAGE',
    payload:'New Article'
  }
}
export function showPageTitle(title){
  return {
    type:"SHOW_PAGE",
    payload:title
  }
}
