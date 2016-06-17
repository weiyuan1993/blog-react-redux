const INITIAL_STATE = { all:[], post:null , title:''};

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case 'FETCH_POSTS':
      return { ...state, all: action.payload.data }; //reducer將資料存入state
    case 'FETCH_POST':
      return { ...state, post: action.payload.data };
    case 'HOME_PAGE':
      return { ...state, title: action.payload }
    case 'CREATE_PAGE':
      return { ...state, title: action.payload };
    case 'SHOW_PAGE':
      return { ...state, title: action.payload };
    default:
      return state;
  }
}
