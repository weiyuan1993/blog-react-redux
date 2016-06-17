const INITIAL_STATE = { title:''};

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
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
