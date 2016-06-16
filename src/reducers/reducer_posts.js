const INITIAL_STATE = { all:[], post:null };

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case 'FETCH_POSTS':
      return { ...state, all: action.payload.data }; //reducer將資料存入state
    case 'FETCH_POST':
      return { ...state, post: action.payload.data };
    default:
      return state;
  }
}
